# CLAUDE.md — LEY_21600_WEB

## ¿Qué es este proyecto?
Este repositorio forma parte de la Unidad de Información y Análisis (UIA) de CONAF.

Es un visor web estático de la **Ley 21.600** (Servicio de Biodiversidad y Áreas Protegidas): navegación por títulos, párrafos y artículos, vistas de red de relaciones, exportación a PDF y un chat con un modelo de lenguaje. No hay build, backend, pruebas ni gestor de paquetes; las librerías se cargan por CDN (Tailwind CDN, html2pdf, html2canvas, marked, y Cytoscape en `cytos1.html`). Revisado el 2026-11-24 leyendo los archivos; no abrí ninguna página en el navegador (no comprobado).

## Estructura (estado al 2026-11-24)

- Todo está en la raíz y **no hay `index.html`**: las páginas son iteraciones numeradas (`index1..6.html`, `nuevo.html`, `graph1..35.html`, `newFun1..34.html`, `z1.html`, `vectorizacion1.html`, `cytos1.html`, más copias `index1 copy.html` y `nuevo copy.html`). Las más recientes por historial de git son `graph35.html`, `newFun31..34.html` y `z1.html` (commits de 2025-11-17/19). Cuál es la versión "oficial" no consta en el repo: preguntar antes de borrar o consolidar.
- `base.js` — datos de la ley embebidos como objeto JS (`mockDataResponse`: títulos, párrafos, artículos); lo cargan casi todas las páginas.
- `db.json` — datos de artículos en JSON; ninguna página ni script lo referencia por nombre (verificado con grep).
- `pass.js` — chat con el modelo (`API_URL` de api.z.ai) e historial; lo cargan `graph23..35.html`, `newFun6..33.html`, `cytos1.html` y `z1.html` (no `newFun34.html`).
- `pdf.js` — exportación de un artículo a PDF.

## Seguridad: no copiar

- `pass.js` **versiona una API key del proveedor del modelo en texto plano**, visible para cualquiera que abra la página. No la copies a documentos ni respuestas. Lo correcto es rotarla y moverla a un intermediario en servidor; es decisión del equipo y no está hecha.
- Las funciones `ofuscar`/`recuperar` de `pass.js` son un desplazamiento de caracteres reversible, no protegen nada.

## README

No hay `README.md`. `.github/workflows/readme.yml` llama al generador centralizado `Sud-Austral/coipo_aireadme` en cada push a `main`, pero nunca ha commiteado un README en este repo (git log). Se dejó sin crear a propósito para no pelear con ese workflow; en otros repos de la flota ese generador ya se retiró: decidir si se quita también aquí antes de escribir un README a mano.

---

## Comandos de Referencia Rápida
- **Visualizar en local:** Abrir archivos HTML en el navegador o usar un servidor estático local como `npx serve` o la extensión Live Server de VS Code.

## Tecnología y Stack
- **Frontend:** HTML5 estático, Javascript (Tailwind por CDN, Cytoscape.js solo en `cytos1.html`, html2pdf/html2canvas para PDF, marked para el chat)

## Guía de Estilo y Convenciones
- **Idioma del código:** Inglés para infraestructura, nombres de variables y funciones. Español para comentarios de negocio e interfaz de usuario.
- **Frontend JavaScript/TypeScript:** Estilo `camelCase` para variables y funciones, nombres de funciones y datos mayoritariamente en español. No hay React, ESLint ni Prettier configurados en el repo.
- **Trazabilidad:** Cada cambio debe rastrearse directamente a un requerimiento o corrección solicitada.


## Directrices de Desarrollo (Claude Code)

### 1. Pensar antes de Codificar
- **No asumas:** Si hay ambigüedad o múltiples interpretaciones, pregunta antes de codificar.
- **Simplifica:** Elige el camino más simple y limpio. Evita la sobreingeniería y abstracciones innecesarias.

### 2. Cambios Quirúrgicos
- Modifica únicamente las líneas necesarias para cumplir el objetivo.
- No realices refactorizaciones no solicitadas en código adyacente.
- Respeta estrictamente el formato y estilo del archivo existente.

### 3. Ejecución Orientada a Objetivos
- Define el criterio de éxito para cada cambio.
- Comprueba que tus modificaciones no introduzcan errores de compilación o de linting.
