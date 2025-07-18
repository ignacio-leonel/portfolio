import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-[#0a192f] text-white relative" id="about">
      <div className="max-w-4xl mx-auto text-center space-y-10">

        {/* Título */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold italic text-cyan-400 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          🧑‍💻 Sobre mí
        </motion.h2>

        {/* Párrafo 1 */}
        <motion.p
          className="text-lg md:text-xl leading-relaxed text-slate-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          ¡Hola! Soy <span className="text-cyan-400 font-semibold italic">Ignacio Maldonado</span>, un apasionado por la tecnología,
          el desarrollo web y la educación. Estudio la <span className="italic text-cyan-400">Licenciatura en Gestión de Tecnologías de la Información</span> 
          en la Universidad Nacional de José C. Paz, y desde que empecé a programar no paré. Me formé con cursos, desafíos, proyectos reales y mucha práctica.
        </motion.p>

        {/* Párrafo 2 */}
        <motion.p
          className="text-lg md:text-xl leading-relaxed text-slate-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Hoy desarrollo sitios <span className="italic font-semibold text-cyan-400">funcionales, modernos y accesibles</span> para personas
          y emprendimientos que quieren tener presencia en internet sin complicarse con lo técnico.
        </motion.p>

      
        {/* Párrafo 3 */}
        <motion.p
          className="text-lg md:text-xl leading-relaxed text-slate-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          🎥 En este video te cuento quién soy, qué hago y por qué me apasiona tanto este mundo:
        </motion.p>

        {/* Video embed */}
        <motion.div
          className="w-full max-w-xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-md border border-cyan-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/tuVideoID"
            title="Presentación de Nacho"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
    
        {/* Botón de descarga */}
        <motion.a
          href="/Ignacio_Maldonado_Front-end.pdf"
          download
          className="inline-block bg-cyan-500 hover:bg-cyan-400 text-[#0a192f] font-semibold px-6 py-3 rounded-xl shadow-md transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          📄 Descargar CV
        </motion.a>

        
      </div>
    </section>
  );
};

export default About;
