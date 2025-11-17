function exportArticleToPDF(art, el) {
      if (!el) {
        console.error("Elemento no encontrado");
        return;
      }

      const clone = el.cloneNode(true);

      clone.querySelector(".export-article")?.remove();
      clone.querySelector(".focus-mode")?.remove();
      clone.querySelector(".add-note")?.remove();
      clone.querySelector(".summarize-article")?.remove();

      injectMinimalPDFStyles(clone);

      const tempContainer = document.createElement("div");
      tempContainer.style.position = "fixed";
      tempContainer.style.left = "-9999px";
      tempContainer.style.top = "0";
      tempContainer.style.width = "1000px";
      tempContainer.style.background = "#ffffff";

      tempContainer.appendChild(clone);
      document.body.appendChild(tempContainer);

      html2pdf().set({
        margin: 0.5,
        filename: `Articulo_${art.numero.replace(/[^\w]/g, '')}.pdf`,
        html2canvas: { 
          scale: 2,
          backgroundColor: '#ffffff',
          useCORS: true,
        },
        jsPDF: { 
          unit: 'in',
          format: 'letter',
          orientation: 'portrait'
        }
      }).from(clone).save().then(() => {
        document.body.removeChild(tempContainer);
      }).catch(err => {
        console.error("Error al exportar artículo:", err);
        document.body.removeChild(tempContainer);
      });
    }
    
    async function exportCurrentToPDF() {
  const element = document.querySelector("main");
  if (!element) {
    console.error("No se encontró <main>");
    return;
  }

  const clone = element.cloneNode(true);

  // Limpiar estilos problemáticos ANTES de inyectar nuevos
  removeProblematicStyles(clone);
  
  // Ahora inyectar estilos para PDF
  injectMinimalPDFStyles(clone);

  const tempContainer = document.createElement("div");
  tempContainer.style.position = "fixed";
  tempContainer.style.left = "-9999px";
  tempContainer.style.top = "0";
  tempContainer.style.width = "1000px";
  tempContainer.style.background = "#ffffff";
  tempContainer.style.zIndex = "-1";

  tempContainer.appendChild(clone);
  document.body.appendChild(tempContainer);

  try {
    await new Promise(resolve => setTimeout(resolve, 300));

    await html2pdf().set({
      margin: 0.5,
      filename: "Ley_21600_Resultados.pdf",
      html2canvas: {
        scale: 2,
        backgroundColor: "#ffffff",
        useCORS: true,
        logging: true,  // activar para debug
        allowTaint: true,
        removeContainer: false
      },
      jsPDF: {
        unit: "in",
        format: "letter",
        orientation: "portrait",
      }
    }).from(clone).save();

  } catch (err) {
    console.error("Error al generar PDF:", err);
  } finally {
    document.body.removeChild(tempContainer);
  }
}

    function removeProblematicStyles(container) {
      // Remover todos los elementos <style> existentes que puedan causar conflictos
      const existingStyles = container.querySelectorAll('style');
      existingStyles.forEach(style => style.remove());
      
      // Remover atributos de estilo inline que fuerzen colores
      const allElements = container.querySelectorAll('*');
      allElements.forEach(el => {
        // Remover solo propiedades problemáticas, no todo el style
        if (el.style) {
          el.style.filter = '';
          el.style.opacity = '';
          el.style.mixBlendMode = '';
        }
      });
    }

    function injectMinimalPDFStyles(container) {
      const css = `
        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }

        /* NO usar selector universal para backgrounds */
        ${container.tagName.toLowerCase()} {
          background: #ffffff !important;
        }

        /* Mantener backgrounds originales de elementos específicos */
        div[class*="bg-"], 
        section[class*="bg-"],
        article[class*="bg-"] {
          background: inherit !important;
        }

        /* Solo forzar texto a oscuro */
        body, main, p, div, span, li, td, th, article, section {
          color: #1a1a1a !important;
        }

        h1, h2, h3, h4, h5, h6 {
          color: #000000 !important;
          font-weight: bold !important;
        }

        a {
          color: #0066cc !important;
          text-decoration: underline !important;
        }

        pre {
          background: #f8f8f8 !important;
          border: 1px solid #ddd !important;
          padding: 12px !important;
          border-radius: 4px !important;
        }

        code {
          background: #f0f0f0 !important;
          color: #c7254e !important;
          padding: 2px 4px !important;
          border-radius: 3px !important;
          font-family: 'Courier New', monospace !important;
        }

        pre code {
          color: #333333 !important;
          background: transparent !important;
          padding: 0 !important;
        }

        table {
          border-collapse: collapse !important;
          width: 100% !important;
        }

        th {
          background: #f0f0f0 !important;
          color: #000 !important;
          font-weight: bold !important;
          border: 1px solid #999 !important;
          padding: 8px !important;
        }

        td {
          border: 1px solid #ccc !important;
          padding: 8px !important;
          color: #1a1a1a !important;
        }

        img {
          max-width: 100% !important;
          height: auto !important;
          display: block !important;
        }

        /* Eliminar efectos visuales */
        * {
          box-shadow: none !important;
          text-shadow: none !important;
          filter: none !important;
        }
      `;

      const style = document.createElement("style");
      style.innerHTML = css;
      container.insertBefore(style, container.firstChild);
    }
