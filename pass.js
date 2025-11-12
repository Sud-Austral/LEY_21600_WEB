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
async function obtenerRespuesta(pregunta) {
  const preguntaSanitizada = sanitizeInput(pregunta);

  UIState.historialConversacion.push({
    role: "user",
    content: preguntaSanitizada
  });

  const promptBase = `Eres un asistente experto en la Ley 21.600 de Chile.
  Ley N.º 21.600 – Resumen Ejecutivo

  Objetivo:
  - Conservación de la biodiversidad y protección del patrimonio natural de Chile.
  - Preservación, restauración y uso sustentable de genes, especies y ecosistemas.

  Organismo regulador:
  - Se crea el Servicio de Biodiversidad y Áreas Protegidas (SBAP), organismo público descentralizado.
  - Presencia territorial mediante direcciones regionales.

  Sistema Nacional de Áreas Protegidas (SNAP):
  - Conjunto de áreas protegidas (estatales y privadas) bajo administración del SBAP.
  - Categorías: Parque Nacional, Monumento Natural, Reserva Nacional, Reserva de Región Virgen, Áreas de Conservación de Múltiples Usos, Áreas de Conservación de Pueblos Indígenas.

  Principios rectores:
  - Coordinación entre órganos competentes.
  - No regresión en niveles de protección.
  - Participación de comunidades y pueblos originarios.
  - Valoración de servicios ecosistémicos.

  Instrumentos de conservación:
  - Planes de manejo y recuperación de especies amenazadas.
  - Regulación de humedales y criterios de uso sustentable.
  - Instrumentos económicos: Fondo Nacional de la Biodiversidad, contratación de servicios ecosistémicos, certificación de biodiversidad.

  Fiscalización y sanciones:
  - SBAP puede supervisar, sancionar administrativamente y aplicar multas por infracciones.

  Importancia:
  - Centraliza y fortalece la institucionalidad ambiental.
  - Permite protección de áreas privadas y públicas.
  - Alinea con compromisos internacionales (meta 30% de áreas protegidas para 2030).

  Desafíos:
  - Implementación del SBAP y reglamentos necesarios.
  - Incentivar participación de propietarios privados y comunidades.
  - Integrar la ley con políticas ambientales y sectoriales existentes.

  Conclusión:
  - Ley clave para la conservación de biodiversidad en Chile.
  - Éxito depende de reglamentación rápida, coordinación de actores y fortalecimiento de incentivos para conservación en terrenos privados.


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

// ========================================================
// ✅ Ejemplo de uso
// ========================================================
// obtenerRespuesta("¿Cuál es el límite de velocidad en zona urbana en Chile?")
//   .then(console.log)
//   .catch(console.error);


async function obtenerExplicacionJSON(jsonLey) {
  console.log(jsonLey)
  const promptBase = `

  Rol:
  Actúa como un experto en Derecho Administrativo y Ambiental chileno, especializado en la Ley N° 21.600.
  Analiza e interpreta el JSON que representa una red de relaciones (grafo) sobre dicha ley.

  🎯 Objetivo:
  Entregar un análisis sistémico y crítico, que muestre cómo la Ley 21.600 se articula con el marco normativo e institucional ambiental chileno, pero con síntesis conceptual y enfoque evaluativo, no descriptivo.

  📘 Estructura obligatoria de la respuesta (solo dos secciones):

  1. Definiciones
  Expón de manera breve y cohesionada las estructuras institucionales, principios y relaciones normativas esenciales que emergen del grafo.

  Prioriza lo estructural (instituciones, jerarquías, principios de gestión).

  Evita enumerar artículos o reproducir contenido textual.

  Resume el sentido funcional del sistema creado por la Ley 21.600.

  2. Alcances
  Desarrolla una evaluación crítica y sintética de las limitaciones, riesgos y efectos reales del modelo institucional descrito.

  Enfócate en eficacia administrativa, coordinación interinstitucional, y viabilidad práctica.

  Formula conclusiones interpretativas breves y claras.

  🧠 Estilo:

  Tono técnico y riguroso, pero comprensible.

  Extensión máxima: 6 párrafos sustantivos en total.

  Prioriza la coherencia sistémica y el juicio interpretativo sobre el detalle normativo.

  No incluyas citas ni numeración de artículos salvo si son esenciales para la lógica institucional.
    

  
  📦 JSON a analizar:
  ${JSON.stringify(jsonLey, null, 0)}
  `;

    const requestBody = {
      model: "glm-4.5-flash",
      messages: [
        { role: "user", content: promptBase }
      ],
      temperature: 0.7,
      max_tokens: 2000
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
      max_tokens: 2000
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

