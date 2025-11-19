// ========================================================
// 🔒 Funciones de ofuscación y recuperación
// ========================================================
function ofuscar(texto) {
  return texto
    .split("")
    .reverse()
    .map(c => String.fromCharCode(c.charCodeAt(0) + 1))
    .join("");
}

function recuperar(ofuscado) {
  return ofuscado
    .split("")
    .reverse()
    .map(c => String.fromCharCode(c.charCodeAt(0) - 1))
    .join("");
}

// ========================================================
// 🧠 Estado y configuración básica
// ========================================================
const UIState = {
  historialConversacion: []
};

const CHAT_CONFIG = {
  MAX_HISTORY_LENGTH: 6
};

// ========================================================
// 🧹 Sanitización de entrada del usuario
// ========================================================
function sanitizeInput(texto) {
  if (!texto) return "";
  return texto
    .replace(/[<>]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

// ========================================================
// 🔗 Agregar enlaces automáticos a la respuesta
// ========================================================
function agregarEnlacesARespuesta(texto) {
  if (!texto) return "";
  return texto.replace(
    /(https?:\/\/[^\s]+)/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
  );
}

// ========================================================
// 🔑 Credenciales y URL del modelo
// ========================================================
const API_KEY = "8ba5395226c049bb8ff816496c16859c.8tGkqfsvheCvYom5";
const API_URL = "https://api.z.ai/api/paas/v4/chat/completions";

// ========================================================
// 💬 Función principal simplificada
// ========================================================
async function obtenerRespuesta2(pregunta) {
  const preguntaSanitizada = sanitizeInput(pregunta);

  UIState.historialConversacion.push({
    role: "user",
    content: preguntaSanitizada
  });

  const promptBase = `Eres un asistente experto en la Ley 21.600 de Chile.

  📦 JSON a analizar:
  ${JSON.stringify(mockDataResponse.articulos, null, 0)}
  
  Pregunta: ${preguntaSanitizada}`;

  const historialReciente = UIState.historialConversacion.slice(-CHAT_CONFIG.MAX_HISTORY_LENGTH);
  const mensajes = [
    { role: "user", content: promptBase },
    ...historialReciente
  ];

  const requestBody = {
    model: "glm-4.5-flash",
    messages: mensajes,
    temperature: 0.7,
    max_tokens: 2000
  };

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000000);

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.status} ${response.statusText}`);
    }

    const dataResp = await response.json();

    if (dataResp?.choices?.[0]?.message?.content) {
      let respuesta = dataResp.choices[0].message.content.trim();
      respuesta = agregarEnlacesARespuesta(respuesta);

      UIState.historialConversacion.push({
        role: "assistant",
        content: respuesta
      });

      return respuesta;
    } else {
      throw new Error("Respuesta inesperada de la API");
    }
  } catch (error) {
    console.error("Error al llamar a la API:", error);
    if (error.name === "AbortError") {
      throw new Error("La solicitud ha excedido el tiempo de espera. Por favor, intenta nuevamente.");
    }
    throw error;
  }
}

function obtenerArticulosRelevantesTFIDF(query, articulos, topK = 5) {
  const stopWords = [
    "hola", "gracias", "si", "no", "como", "que", "de", "la", "el", "los", "las",
    "un", "una", "por", "para", "a", "al", "del", "yo", "tu", "usted", "ustedes"
  ];

  const palabras = query
    .toLowerCase()
    .split(/\W+/)
    .filter(p => p.length > 2 && !stopWords.includes(p));

  // Si no hay palabras relevantes → no fallar
  if (palabras.length === 0) {
    return articulos.slice(0, topK); // fallback: primeros artículos
  }

  const scores = articulos.map(art => {
    const texto = (art.texto_completo || "").toLowerCase();

    // conteo de coincidencias
    let score = 0;
    palabras.forEach(p => {
      if (texto.includes(p)) score += 1;
    });

    return { score, articulo: art };
  });

  const filtrados = scores
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map(x => x.articulo);

  // fallback si TF-IDF falló
  return filtrados.length > 0 ? filtrados : articulos.slice(0, topK);
}


function detectarCategoria(texto) {
  const t = texto.toLowerCase();

  // Conversación normal → no limpiar caché legal
  const saludos = ["hola", "buenas", "gracias", "gracias!", "ok", "dale", "sí", "no", "como estas"];
  if (saludos.some(s => t.includes(s))) return "chat_general";

  // Categorías legales reales
  if (t.includes("sancion")) return "sanciones";
  if (t.includes("seia")) return "seia";
  if (t.includes("área protegida") || t.includes("habitat") || t.includes("hábitat")) 
    return "areas_protegidas";
  if (t.includes("biodiversidad")) return "biodiversidad";

  return "general";
}


async function obtenerRespuesta3(pregunta) {
  const preguntaSanitizada = sanitizeInput(pregunta);

  const categoria = detectarCategoria(preguntaSanitizada);

  // Respuestas sin artículos para conversación casual
  if (categoria === "chat_general") {
    const mensajesCortesia = {
      "hola": "¡Hola! ¿En qué puedo ayudarte con la Ley 21.600?",
      "gracias": "¡De nada! ¿Necesitas analizar algún artículo o concepto?",
      "como estas": "¡Muy bien! ¿Cómo puedo apoyarte con la Ley 21.600?"
    };

    const key = Object.keys(mensajesCortesia).find(k =>
      preguntaSanitizada.toLowerCase().includes(k)
    );

    if (key) return mensajesCortesia[key];
  }

  // Cambio de tema → limpiar caché de artículos
  if (UIState.categoriaActual !== categoria) {
    UIState.categoriaActual = categoria;
    UIState.cacheArticulos = {};
  }

  // Obtener artículos desde caché o calcularlos
  let articulosRelevantes = UIState.cacheArticulos[categoria];

  if (!articulosRelevantes) {
    articulosRelevantes = obtenerArticulosRelevantesTFIDF(
      preguntaSanitizada,
      mockDataResponse.articulos,
      5
    );

    UIState.cacheArticulos[categoria] = articulosRelevantes;
  }

  // Historial
  UIState.historialConversacion.push({
    role: "user",
    content: preguntaSanitizada
  });

  const promptBase = `
Eres un asistente experto en la Ley 21.600 de Chile.
Responde SOLO basándote en los siguientes artículos:

${JSON.stringify(articulosRelevantes, null, 2)}

Pregunta:
"${preguntaSanitizada}"

Reglas:
- No inventes información.
- Si la respuesta no está en los artículos, dilo.
- Cita artículos solo si aparecen aquí.
`;

  const mensajes = [
    { role: "system", content: "Eres un asistente experto en análisis legislativo." },
    { role: "user", content: promptBase },
    ...UIState.historialConversacion.slice(-CHAT_CONFIG.MAX_HISTORY_LENGTH)
  ];

  const requestBody = {
    model: "glm-4.5-flash",
    messages: mensajes,
    temperature: 0.4,
    max_tokens: 2500
  };

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    const dataResp = await response.json();
    let respuesta = dataResp?.choices?.[0]?.message?.content || 
                    "No pude obtener una respuesta del modelo.";

    respuesta = agregarEnlacesARespuesta(respuesta.trim());

    UIState.historialConversacion.push({
      role: "assistant",
      content: respuesta
    });

    return respuesta;

  } catch (error) {
    console.error("Error:", error);
    return "⚠️ Hubo un error al procesar tu solicitud. Intenta nuevamente.";
  }
}
// Con GEMINI
async function obtenerRespuesta4(query) {
  const API_KEY = "AIzaSyDro4Ii6RJcoJO8do7vquamOXl9uh6uWIw";

  const body = {
    contents: [
      {
        role: "user",
        parts: [{ text:  
          `Eres un experto en la Ley 21600 de Chile. 
          Para cada respuesta cita los articulos en cada parrafo que escribas de donde sacas la información.
          Para cada respuesta agrega iconos.
          Responde: ${query}` }]
      }
    ],
    tools: [
      {
        fileSearch: {
          fileSearchStoreNames: ["fileSearchStores/tutorial-gemini-file-search-3oi7j1dv8anb"]
        }
      }
    ]
  };

  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + API_KEY,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    }
  );

  const data = await response.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
}

async function obtenerRespuesta5(query) {
  const API_KEY = "AIzaSyDro4Ii6RJcoJO8do7vquamOXl9uh6uWIw";

  const instrucciones = `
Eres un asistente experto en la Ley 21600 de Chile.

📌 **Reglas obligatorias que SIEMPRE debes cumplir:**

1. **Cada párrafo que escribas debe indicar exactamente de qué artículo(s) se obtiene la información**, citando explícitamente así:
   - (Artículo 3)
   - (Artículos 12 y 14)
   - (Modificación del Artículo 38 de la Ley 19.xxx)
   - etc.

2. Solo puedes citar artículos que realmente existan en la base de datos proporcionada por FileSearch.

3. Si una parte de la respuesta NO proviene de un artículo, declara explícitamente:
   - “(Sin artículo — interpretación general)”

4. Cada sección debe incluir **íconos** adecuados al contenido:
   - 📘 Explicaciones
   - 📜 Artículos citados
   - ⚠️ Advertencias
   - 🧩 Interpretaciones
   - 🏛️ Instituciones
   - ♻️ Biodiversidad
   etc., según corresponda.

5. Sé claro, preciso y cita en cada párrafo.
6. Has 3 preguntas de seguimiento.

---

Ahora responde estrictamente siguiendo estas reglas:

${query}
`;

  const body = {
  contents: [
    {
      role: "user",
      parts: [{ text: instrucciones }]
    }
  ],
  tools: [
    {
      fileSearch: {
        fileSearchStoreNames: [
          "fileSearchStores/tutorial-gemini-file-search-3oi7j1dv8anb"
        ]
      }
    }
  ]
};

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + API_KEY,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      }
    );

    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.json();

    return data?.candidates?.[0]?.content?.parts?.[0]?.text 
           || "⚠️ No se pudo generar respuesta.";
  } catch (error) {
    console.error("Error en obtenerRespuesta:", error);
    return "❌ Error al obtener la respuesta del modelo.";
  }
}

async function obtenerRespuesta(query) {
  const API_KEY = "AIzaSyDro4Ii6RJcoJO8do7vquamOXl9uh6uWIw";

  //
  // 🔥 1) Construcción del prompt con instrucciones claras para forzar FileSearch
  //
const instrucciones = `
📌 **Reglas obligatorias que SIEMPRE debes cumplir:**

1. 📌 SOLO debes responder usando FileSearch.
2. 📌 NO puedes usar conocimiento general del modelo.
3. 📌 Si la información no está en FileSearch, debes decirlo explícitamente.
4. 📌 Cada párrafo debe incluir citas obligatorias del artículo correspondiente:
   - (Artículo 3)
   - (Artículos 12 y 14)
   - (Modificación del Artículo 38)
5. 📌 Usa íconos según el contenido:
   - 📘 Explicaciones
   - 📜 Artículos citados
   - ⚠️ Advertencias
   - 🧩 Interpretaciones
   - 🏛️ Instituciones
   - ♻️ Biodiversidad
   etc.

6. 🚫 **Prohibición estricta**:  
   - NO generar contenido sobre ninguna ley distinta a la **Ley 21.600**.  
   - NO hacer preguntas, referencias ni explicaciones que no se basen exclusivamente en **los artículos de la Ley 21.600 cargados en FileSearch**.

7. 🧩 **Preguntas de seguimiento obligatorias**:
   - Debes generar EXACTAMENTE 3 preguntas de seguimiento.
   - TODAS deben referirse *únicamente* a la Ley 21.600.
   - Ejemplos válidos:
     - "¿Deseas profundizar en cómo la Ley 21.600 regula X según el Artículo Y?"
     - "¿Quieres revisar otro artículo relacionado dentro de la Ley 21.600?"
   - Ejemplos prohibidos:
     - Preguntas generales sin referencia a la Ley 21.600.
     - Preguntas sobre otras leyes o temas externos.

-----

${query}
`;


  //
  // 🔥 2) Request principal a Gemini
  //
  const body = {
    contents: [
      {
        role: "user",
        parts: [{ text: instrucciones }]
      }
    ],
    tools: [
      {
        fileSearch: {
          fileSearchStoreNames: [
            "fileSearchStores/tutorial-gemini-file-search-3oi7j1dv8anb"
          ]
        }
      }
    ]
  };

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + API_KEY,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }
    );

    const data = await response.json();
    console.log("RAW GEMINI RESPONSE:", data);

    //
    // 🔥 3) EXTRAER TOOL CALLS Y RESPUESTAS
    //
    const parts = data?.candidates?.[0]?.content?.parts || [];

    // Caso 1: El modelo devolvió directamente texto (sin tool calls)
    const directText = parts.find(p => p.text)?.text;
    if (directText) {
      return directText;
    }

    // Caso 2: El modelo pide ejecutar FileSearch (tool call)
    const toolCall = parts.find(p => p.fileSearchResult);
    if (toolCall) {
      const results = toolCall.fileSearchResult;
      
      if (!results || !results.results || results.results.length === 0) {
        return "⚠️ No se encontraron resultados en FileSearch.";
      }

      // Construimos una respuesta usando los documentos encontrados
      let textoFinal = "📄 **Resultados encontrados:**\n\n";

      for (const r of results.results) {
        textoFinal += `### ${r.fileName}\n`;
        textoFinal += `${r.content}\n\n`;
      }

      return textoFinal;
    }

    //
    // Caso 3: No hubo texto ni resultado → retorno seguro
    //
    return "⚠️ El modelo no entregó texto ni resultados de FileSearch.";

  } catch (error) {
    console.error("Error en obtenerRespuesta:", error);
    return "❌ Error al obtener la respuesta del modelo.";
  }
}

async function busquedaSemantica2(query) {
  const API_KEY = "AIzaSyDro4Ii6RJcoJO8do7vquamOXl9uh6uWIw";

  //
  // 🔥 1) Construcción del prompt con instrucciones claras para forzar FileSearch
  //
  const instrucciones = `
Reglas obligatorias (seguir SIEMPRE):
Debes usar exclusivamente FileSearch para obtener la información.
No puedes usar conocimiento general del modelo ni inventar información.
Tu respuesta SIEMPRE debe ser únicamente un array JSON con los IDs de los artículos encontrados.
No agregues texto adicional, explicaciones ni formato extra. Solo el array.
Si no existe coincidencia, responde [].
Tarea:
Busca el concepto siguiente dentro de los artículos usando FileSearch de manera semantica:
${query}
`;
//Formato esperado de respuesta:
//Ejemplo: si el concepto aparece en los artículos 3, 5 y 6 →
//[3, 5, 6]
//`;

  //
  // 🔥 2) Request principal a Gemini
  //
  const body = {
    contents: [
      {
        role: "user",
        parts: [{ text: instrucciones }]
      }
    ],
    tools: [
      {
        fileSearch: {
          fileSearchStoreNames: [
            "fileSearchStores/tutorial-gemini-file-search-3oi7j1dv8anb"
          ]
        }
      }
    ]
  };

  try {
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + API_KEY,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }
    );

    const data = await response.json();
    console.log("RAW GEMINI RESPONSE:", data);

    //
    // 🔥 3) EXTRAER TOOL CALLS Y RESPUESTAS
    //
    const parts = data?.candidates?.[0]?.content?.parts || [];

    // Caso 1: El modelo devolvió directamente texto (sin tool calls)
    const directText = parts.find(p => p.text)?.text;
    if (directText) {
      return directText;
    }
    console.log("prerespuesta",directText)
    // Caso 2: El modelo pide ejecutar FileSearch (tool call)
    const toolCall = parts.find(p => p.fileSearchResult);
    if (toolCall) {
      const results = toolCall.fileSearchResult;
      
      if (!results || !results.results || results.results.length === 0) {
        return "⚠️ No se encontraron resultados en FileSearch.";
      }

      // Construimos una respuesta usando los documentos encontrados
      let textoFinal = "📄 **Resultados encontrados:**\n\n";

      for (const r of results.results) {
        textoFinal += `### ${r.fileName}\n`;
        textoFinal += `${r.content}\n\n`;
      }
      console.log("respuesta",textoFinal)
      return textoFinal;
    }

    //
    // Caso 3: No hubo texto ni resultado → retorno seguro
    //
    return "⚠️ El modelo no entregó texto ni resultados de FileSearch.";

  } catch (error) {
    console.error("Error en obtenerRespuesta:", error);
    return "❌ Error al obtener la respuesta del modelo.";
  }
}

async function busquedaSemantica(query) {
  // ⚠️ NO dejes la API key en el código. Usa variables de entorno o un secreto seguro.
  const API_KEY = "AIzaSyDro4Ii6RJcoJO8do7vquamOXl9uh6uWIw";

  const instrucciones = `
  Devuelve los numero de los artículos que tengan cualquier tipo de relación semántica, contextual, conceptual, temática o textual con: "${query}".

  `;

  const body = {
    contents: [
      {
        role: "user",
        parts: [{ text: instrucciones }]
      }
    ],
    tools: [
      {
        fileSearch: {
          fileSearchStoreNames: [
            "fileSearchStores/tutorial-gemini-file-search-3oi7j1dv8anb"
          ]
        }
      }
    ]
  };

  try {
    const resp = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" + API_KEY,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }
    );

    if (!resp.ok) {
      const text = await resp.text();
      console.error("Error response from Gemini:", resp.status, text);
      throw new Error(`Gemini API error ${resp.status}`);
    }

    const data = await resp.json();
    console.log("RAW GEMINI RESPONSE:", data);

    const parts = data?.candidates?.[0]?.content?.parts || [];

    // -----------------------------------------
    // 🔥 1) NORMALIZACIÓN DE RESPUESTA DE TEXTO 
    // -----------------------------------------
    const directPart = parts.find(
      p => typeof p.text === "string" && p.text.trim().length > 0
    );

    if (directPart) {
      const txt = directPart.text.trim();

      // 🔥 LIMPIEZA del formato (maneja: {text:"1,2,3"}, "[1,2,3]", "IDs: 1 2 3", etc.)
      const limpio = txt
        .replace(/^[^{\[]*:/, "") // elimina "text:" o "IDs:" si existe
        .replace(/[\{\}\[\]]/g, "") // elimina { } [ ]
        .trim();

      // 🔥 Extraer números aunque estén separados por comas, espacios o ambos
      const nums = limpio
        .split(/[\s,]+/)
        .map(x => parseInt(x))
        .filter(n => !isNaN(n));

      if (nums.length > 0) {
        const ordenados = Array.from(new Set(nums)).sort((a, b) => a - b);
        console.log("RESPUESTA NORMALIZADA:", ordenados);
        return ordenados;
      }
    }

    // -----------------------------------------
    // 🔥 2) RESULTADOS DEL FILE SEARCH (tool)
    // -----------------------------------------
    const toolPart = parts.find(p => p.fileSearchResult);

    if (toolPart) {
      const hits = toolPart.fileSearchResult?.results || [];
      const ids = new Set();

      for (const h of hits) {
        if (typeof h.id === "number") ids.add(h.id);
        if (typeof h.documentId === "number") ids.add(h.documentId);
        if (typeof h.fileId === "number") ids.add(h.fileId);

        if (typeof h.id === "string" && /^\d+$/.test(h.id)) ids.add(Number(h.id));
        if (typeof h.documentId === "string" && /^\d+$/.test(h.documentId)) ids.add(Number(h.documentId));
        if (typeof h.fileId === "string" && /^\d+$/.test(h.fileId)) ids.add(Number(h.fileId));

        if (h.fileName) {
          const m = h.fileName.match(/\b(\d{1,6})\b/);
          if (m) ids.add(Number(m[1]));
        }
      }

      return Array.from(ids).sort((a, b) => a - b);
    }

    // -----------------------------------------
    // 🔥 3) toolCalls (otro formato de Gemini)
    // -----------------------------------------
    const toolCalls = data?.candidates?.[0]?.toolCalls || [];
    for (const tc of toolCalls) {
      const hits = tc?.fileSearchResult?.results;
      if (!hits) continue;

      const ids = new Set();
      for (const h of hits) {
        if (typeof h.id === "number") ids.add(h.id);
        if (h.fileName) {
          const m = h.fileName.match(/\b(\d{1,6})\b/);
          if (m) ids.add(Number(m[1]));
        }
      }
      return Array.from(ids).sort((a, b) => a - b);
    }

    // -----------------------------------------
    // Si todo falla → array vacío
    // -----------------------------------------
    return [];

  } catch (error) {
    console.error("Error en busquedaSemantica:", error);
    return [];
  }
}







// ========================================================
// ✅ Ejemplo de uso
// ========================================================
// obtenerRespuesta("¿Cuál es el límite de velocidad en zona urbana en Chile?")
//   .then(console.log)
//   .catch(console.error);

async function obtenerExplicacionJSON2(jsonLey) {
  console.log(jsonLey)
   const promptBase = `
  Rol: Actúa como un analista de políticas públicas y normativas ambientales con expertise en la Ley 21600. Tu objetivo es proporcionar una explicación completa, clara y, sobre todo, equilibrada y multifacética. Debes presentar tanto los objetivos y beneficios del concepto como sus implicaciones prácticas, restricciones y potenciales tensiones para los diferentes actores sociales, como propietarios privados, sectores productivos y proyectos de inversión.
  Contexto: Una aplicación ha filtrado el texto de la Ley 21600 usando el término [TÉRMINO_DE_FILTRO]. Como resultado, ha generado un grafo de relaciones que conecta artículos de la ley, instituciones y otras normas. Los datos estructurados de este grafo se proporcionan a continuación en formato JSON. El texto completo de la ley también está disponible como referencia.
  Inputs:
  1.	Término de Filtro:[TÉRMINO_DE_FILTRO]
  2.	Datos del Grafo (JSON):
  3.	Texto Completo de la Ley (Referencia):[REFERENCIA_AL_TEXTO_COMPLETO_DE_LA_LEY]
  Tarea: Genera una explicación analítica y equilibrada sobre el término [TÉRMINO_DE_FILTRO]. La explicación debe cubrir sus beneficios de conservación, pero también sus implicaciones prácticas, restricciones y el contexto de su implementación, basándote estrictamente en lo que se puede inferir del texto de la ley y sus conexiones.
  Instrucciones Específicas para el Análisis:
  •	Visión Equilibrada: Para cada punto, considera tanto la perspectiva de la conservación como la de los actores potencialmente afectados.
  •	Análisis de Implicaciones: Infiera del texto de la ley las posibles restricciones o requisitos. Por ejemplo, si un artículo menciona "fiscalización", "condiciones", "exigencias" o "planes de manejo obligatorios", debes interpretarlos como potenciales limitaciones o costos para propietarios o proyectos.
  •	Para las Instituciones: Explica su rol, pero también su poder de actuación. ¿Tiene facultades para restringir, fiscalizar o sancionar?
  •	Para las Leyes: Explica si la relación es de modificación (que puede añadir o quitar restricciones) o de complementariedad.
  Estructura de la Respuesta Esperada: Organiza tu respuesta en las siguientes secciones, usando los títulos correspondientes:
  1.	Resumen Ejecutivo:
  •	Define brevemente qué es [TÉRMINO_DE_FILTRO] y su doble cara: por un lado, su objetivo de conservación y, por otro, su naturaleza como instrumento legal que puede generar restricciones.
  2.	Definición y Propósito de Conservación:
  •	Presenta la definición oficial y su propósito ecológico, explicando por qué es una herramienta para la conservación.
  3.	Análisis Detallado del Marco Legal:
  •	Analiza los artículos clave, explicando su rol y sus conexiones con instituciones y leyes, pero siempre con un enfoque en las facultades y restricciones que establecen.
  •	Artículo [Número]: "[Título del Artículo]".
  •	Rol y Facultades:Explica qué hace este artículo y qué poderes otorga (ej: "Este artículo prohíbe...", "faculta al Servicio para establecer condiciones...", "exige la elaboración de un plan...").
  •	Conexiones Clave:Menciona las instituciones y leyes vinculadas, enfocándote en cómo se distribuyen las responsabilidades y las potestades.
  4.	Implicaciones Prácticas y Consideraciones Críticas:
  Basado en el análisis anterior, detalla las consecuencias prácticas del concepto.
  •	Para Propietarios Privados: ¿Cómo podría afectar este concepto el dominio, el uso del suelo o las actividades en terrenos privados? ¿Puede implicar limitaciones a la construcción, agricultura, minería, acuicultura,energía,  etc.?
  •	Para Actividades Productivas y Proyectos de Inversión: ¿Qué barreras, costos o requisitos adicionales podría enfrentar un proyecto (agrícola, minero, inmobiliario, etc.)? (Ej: necesidad de permisos especiales, estudios de impacto ambiental más rigurosos, compensaciones, prohibiciones directas).
  •	Mecanismos de Participación y Resolución: ¿La ley menciona vías para la participación ciudadana, acuerdos voluntarios o mecanismos para resolver conflictos o compensar a los afectados?
  5.	Síntesis y Conclusión:
  •	Elabora una conclusión equilibrada que presente el concepto analizado destacando tanto sus potenciales beneficios como sus posibles 
  limitaciones. Explica cómo puede funcionar simultáneamente como una herramienta útil dentro del marco regulatorio y, a la vez, 
  como un elemento que genera obligaciones o restricciones para distintos actores. Finaliza mostrando cómo este equilibrio busca 
  compatibilizar el interés público con los intereses y derechos de los actores involucrados, sin asumir de antemano si dicho 
  balance es positivo o negativo.
  6.	Puntos Clave para el Usuario:
  •	Presenta una lista equilibrada con las ideas más importantes.
  •	Son herramientas vitales para conectar la naturaleza y proteger la biodiversidad.
  •	Implican restricciones legales, como la prohibición de la caza.
  •	Pueden afectar el uso de suelo privado y requerir permisos o condiciones para proyectos productivos.
  •	El Servicio de Biodiversidad es la principal autoridad para su gestión y fiscalización.
  Restricciones de Estilo:
  1.	Tono Analítico y Neutral: Evita un lenguaje laudatorio o puramente promocional de la ley. Usa un tono objetivo, como el de un informe técnico.
  2.	Claridad: Sé directo y preciso. Al describir restricciones, sé claro sobre qué establece la ley.
  3.	Fidelidad: Basa todo tu análisis estrictamente en la información proporcionada. No inventes problemas, pero infiere las implicaciones lógicas de las facultades y restricciones descritas en el texto legal.
  4.	Formato: Usa Markdown para mejorar la legibilidad.


  
  📦 JSON a analizar:
  ${JSON.stringify(jsonLey, null, 0)}
  `;

    const requestBody = {
      model: "glm-4.5-flash",
      messages: [
        { role: "user", content: promptBase }
      ],
      temperature: 0.7,
      max_tokens: 4000
    };

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 300000000);

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`Error en la petición: ${response.status} ${response.statusText}`);
      }

      const dataResp = await response.json();

      if (dataResp?.choices?.[0]?.message?.content) {
        return dataResp.choices[0].message.content.trim();
      } else {
        throw new Error("Respuesta inesperada de la API");
      }
    } catch (error) {
      console.error("Error al obtener explicación:", error);
      if (error.name === "AbortError") {
        throw new Error("La solicitud ha excedido el tiempo de espera. Por favor, intenta nuevamente.");
      }
      throw error;
    }
  }


async function obtenerExplicacionJSON(jsonLey) {
  console.log(jsonLey)
   const promptBase = `
  Rol: Actúa como un analista experto en políticas públicas ambientales con conocimiento profundo de la Ley 21.600. Tu objetivo es proporcionar un análisis preciso que distinga correctamente entre:
- Conceptos normativos/estratégicos (que crean obligaciones y restricciones)
- Conceptos operativos/instrumentales (que implementan políticas existentes)
- Actores con poder regulatorio directo versus aquellos con funciones ejecutivas

Contexto: Una aplicación ha filtrado el texto de la Ley 21.600 usando el término [TÉRMINO_DE_FILTRO]. Como resultado, ha generado un grafo de relaciones que conecta artículos de la ley, instituciones y otras normas. Los datos estructurados de este grafo se proporcionan a continuación en formato JSON.

Inputs:
1. Término de Filtro: [TÉRMINO_DE_FILTRO]
2. Datos del Grafo (JSON): ${JSON.stringify(jsonLey, null, 0)}

Tarea: Genera un análisis contextualizado del término [TÉRMINO_DE_FILTRO] que siga rigurosamente la siguiente estructura:

1. Clasificación del Concepto:
   - Determina si el concepto es: a) normativo/estratégico, b) operativo/instrumental, c) un actor con poder regulatorio directo, o d) un actor con funciones ejecutivas.
   - Explica brevemente por qué se le asigna esa categoría y su posición jerárquica en el sistema.

2. Análisis Estructural del Grafo de Relaciones:
   - **Este es un paso obligatorio y fundamental.** Analiza explícitamente el JSON proporcionado.
   - **Paso 2.1: Evaluación de la Escala.** Primero, evalúa la naturaleza y la escala del grafo. ¿Es un grafo enfocado y específico (conectado a un puñado de artículos clave) o es un grafo amplio y transversal (conectado a múltiples partes de la ley, incluyendo definiciones, principios, instrumentos, etc.)?
   - **Paso 2.2: Análisis Basado en la Escala.**
      - **SI el grafo es ENFOCADO:** Identifica y lista los nodos (artículos, leyes, instituciones) más importantes conectados al término. Describe las conexiones clave y la "ruta crítica" o el camino de mayor poder/restricción que se puede inferir.
      - **SI el grafo es AMPLIO/TRANSVERSAL:** No listes todas las conexiones. En su lugar, explica por qué el concepto es fundamental para la arquitectura de la ley. Agrupa las conexiones en categorías lógicas (ej. "Definiciones Base", "Principios Rectores", "Instrumentos de Gestión", "Actores Clave", "Régimen Sancionatorio"). Describe el "rol estructural" del concepto (ej. "pilar conceptual", "motor de implementación", "eje articulador").

3. Análisis Detallado del Marco Legal (Basado en el Grafo):
   - Utilizando el análisis estructural del paso anterior como base (ya sea una ruta crítica o un rol estructural), profundiza en los artículos clave.
   - Para cada artículo relevante, explica:
     * **Rol y Facultades:** Qué hace este artículo y qué poderes, deberes o restricciones establece en relación con el término.
     * **Conexiones Clave (basadas en el grafo):** Explica cómo este artículo conecta con las instituciones y otras leyes mencionadas en el grafo, enfocándote en la distribución de potestades y responsabilidades.

4. Implicaciones Prácticas y Consideraciones Críticas:
   - Basado en el análisis anterior, detalla las consecuencias prácticas del concepto.
   - **Para Propietarios Privados:** ¿Cómo podría afectar el dominio, el uso del suelo o las actividades en terrenos privados?
   - **Para Actividades Productivas y Proyectos de Inversión:** ¿Qué barreras, costos o requisitos adicionales podría enfrentar un proyecto?
   - **Mecanismos de Participación y Resolución:** ¿La ley menciona vías para la participación ciudadana o para resolver conflictos?

5. Síntesis y Conclusión:
   - Elabora una conclusión equilibrada que presente el concepto destacando tanto sus potenciales beneficios como sus posibles limitaciones.

6. Puntos Clave para el Usuario:
   - Presenta una lista equilibrada con las ideas más importantes del análisis.

Restricciones de Estilo:
1. **Adaptabilidad:** Tu respuesta debe demostrar claramente que has evaluado la escala del grafo y has elegido el enfoque analítico correcto (enfocado vs. transversal).
2. **Fidelidad al Grafo:** Tu análisis en las secciones 2 y 3 DEBE basarse explícitamente en las conexiones y nodos proporcionados en el JSON.
3. Tono Analítico y Neutral, Claridad y Formato Markdown.
  
  `;

    const requestBody = {
      model: "glm-4.5-flash",
      messages: [
        { role: "user", content: promptBase }
      ],
      temperature: 0.7,
      max_tokens: 4000
    };

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 300000000);

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`Error en la petición: ${response.status} ${response.statusText}`);
      }

      const dataResp = await response.json();

      if (dataResp?.choices?.[0]?.message?.content) {
        console.log(dataResp.choices[0].message.content.trim())
        return dataResp.choices[0].message.content.trim();
      } else {
        throw new Error("Respuesta inesperada de la API");
      }
    } catch (error) {
      console.error("Error al obtener explicación:", error);
      if (error.name === "AbortError") {
        throw new Error("La solicitud ha excedido el tiempo de espera. Por favor, intenta nuevamente.");
      }
      throw error;
    }
  }

async function obtenerRespuestaLey(pregunta) {
  const promptBase = `
  Actúa como un experto en análisis legislativo. Dada la siguiente base de datos de artículos de una ley chilena sobre biodiversidad y áreas protegidas, responde a la pregunta del usuario siguiendo estrictamente esta estructura:

  1. **Artículos directamente relacionados con [tema específico]**:
  - Lista los artículos que mencionan explícitamente el tema o modifican leyes directamente vinculadas.
  - Para cada artículo, incluye:
  - Número y nombre del artículo.
  - Relevancia (por qué es importante para el tema).
  - Contenido clave (fragmentos textuales relevantes entre comillas).

  2. **Artículos indirectamente relacionados (contexto regulatorio)**:
  - Lista artículos que establecen facultades, definiciones o procedimientos aplicables al tema, aunque no lo mencionen directamente.
  - Incluye los mismos detalles que en la sección anterior.

  3. **Artículos con menciones técnicas relevantes**:
  - Si aplica, incluye artículos que definen conceptos o establecen criterios técnicos útiles para entender el tema.

  4. **Conclusión**:
  - Resume en 2-3 frases los artículos más importantes y su relación con el tema.
  - Si el tema no está cubierto técnicamente, sugiere fuentes alternativas.

  **Reglas adicionales**:
  - Usa viñetas (•) para listas.
  - Usa **negritas** para títulos de secciones y artículos.
  - Incluye citas textuales breves entre comillas cuando sean esclarecedoras.
  - Si un artículo no tiene relación clara con el tema, no lo incluyas.
  - La base de datos es la siguiente: [pegar aquí la base de datos completa].

  **Pregunta del usuario**:${pregunta} 

  
  📦 JSON a analizar:
  ${JSON.stringify(mockDataResponse.articulos, null, 0)}
  `;

    const requestBody = {
      model: "glm-4.5-flash",
      messages: [
        { role: "user", content: promptBase }
      ],
      temperature: 0.7,
      max_tokens: 6000
    };

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 300000000);

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`Error en la petición: ${response.status} ${response.statusText}`);
      }

      const dataResp = await response.json();

      if (dataResp?.choices?.[0]?.message?.content) {
        console.log(dataResp.choices[0].message.content.trim());
        return dataResp.choices[0].message.content.trim();
      } else {
        throw new Error("Respuesta inesperada de la API");
      }
    } catch (error) {
      console.error("Error al obtener explicación:", error);
      if (error.name === "AbortError") {
        throw new Error("La solicitud ha excedido el tiempo de espera. Por favor, intenta nuevamente.");
      }
      throw error;
    }
  }



// ============================================
// BÚSQUEDA SEMÁNTICA REAL CON LLM
// ============================================

async function obtenerSemanticaZ(query) {
  const baseDatos = mockDataResponse.articulos.map(articulo => ({
    numero: articulo.id,
    texto: `${articulo.nombre}: ${articulo.texto_completo.substring(0, 150)}`
  }));

  // Prompt blindado
  const promptBase = `
Devuelve solo los números de los artículos que tengan cualquier tipo de relación semántica, contextual, conceptual, temática o textual con: "${query}".

De la siguiente Base de datos:
${JSON.stringify(baseDatos)}
  `;

  const requestBody = {
    model: "glm-4.5-flash",
    messages: [{ role: "user", content: promptBase }],
    temperature: 0.3,
    max_tokens: 5000
  };

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1500000); // 15s

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.status} ${response.statusText}`);
    }

    const dataResp = await response.json();
    console.log("Todo",dataResp)
    const content = dataResp?.choices?.[0]?.message?.content;

    if (typeof content !== "string") {
      console.error("Contenido inválido:", content);
      return [];
    }

    console.log("Respuesta cruda del modelo:", content);

    // Procesar
    const ids = procesarRespuestaIds(content);
    console.log("IDs procesados:", ids);

    return ids;

  } catch (error) {
    console.error("Error en obtenerSemanticaZ:", error);
    if (error.name === "AbortError") {
      throw new Error("Tiempo de espera excedido.");
    }
    throw error;
  }
}


// ⚙️ Procesador fortificado de IDs
function procesarRespuestaIds(respuesta) {
  try {
    let clean = respuesta.trim();

    // Si vino rodeado de backticks ```json ... ```
    clean = clean.replace(/```json/gi, '').replace(/```/g, '').trim();

    // Intentar encontrar el array JSON directo
    const arrayMatch = clean.match(/\[[^\]]*\]/);
    if (arrayMatch) {
      try {
        const arr = JSON.parse(arrayMatch[0]);
        return arr.filter(n => Number.isInteger(n));
      } catch (e) {
        // Si el JSON viene casi-correcto, intentar rescatar números
        console.warn("JSON malformado, intentando rescatar números...");
      }
    }

    // Rescate final: extraer cualquier número
    const nums = clean.match(/\d+/g);
    if (nums) {
      return nums.map(n => parseInt(n, 10));
    }

    return [];
  } catch (e) {
    console.error("Error procesando IDs:", respuesta);
    return [];
  }
}

