import React from "react";

const Recursos = () => {
  return (
    <section className="py-16 px-4 bg-[#0f172a] text-white min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-4">Recursos para tu sitio</h2>
        <p className="text-cyan-200 mb-10">
          En esta sección vas a encontrar videos y archivos para mejorar o personalizar tu página web.
        </p>

        {/* Video de instalación del botón de WhatsApp */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-4">📲 Cómo instalar el botón de WhatsApp</h3>
          <div className="w-full max-w-xl mx-auto aspect-video rounded-xl overflow-hidden shadow-md border border-cyan-500">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="Cómo instalar el botón de WhatsApp"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Archivos para descargar */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-white mb-4">📁 Archivos para descargar</h3>
          <p className="text-slate-300 mb-6">
            Hacé clic en el botón para descargar recursos listos para usar.
          </p>

          <a
            href="/WhatsAppButton.zip" 
            download
            className="inline-block bg-cyan-500 hover:bg-cyan-400 text-[#0f172a] font-semibold px-6 py-3 rounded-xl shadow-md transition-all duration-300"
          >
            📥 Descargar Botón Whats App
          </a>

          {/* Lista futura */}
          <ul className="text-left list-disc list-inside text-cyan-200 mt-6">
            <li>Carrito de compras (próximamente)</li>
            <li>Formulario de contacto funcional (próximamente)</li>
            <li>Botón flotante con íconos (próximamente)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Recursos;
