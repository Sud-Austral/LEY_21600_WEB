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
