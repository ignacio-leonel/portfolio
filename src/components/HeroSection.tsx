import React from 'react';
import { motion } from 'framer-motion';
import { Code, Sparkles, Zap } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative py-24 mb-16 overflow-hidden">
      {/* Fondo animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-cyan-900/20" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Contenido */}
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 border border-cyan-400/20 rounded-full px-4 py-2 mb-6"
        >
          <Sparkles className="text-cyan-400" size={16} />
          <span className="text-cyan-400 text-sm font-medium">Portfolio 2024</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white via-cyan-400 to-white bg-clip-text text-transparent"
        >
          Ignacio Maldonado
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Desarrollador Frontend con foco en React, diseño funcional y experiencias intuitivas. Este portfolio es mi carta de presentación.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-6 text-sm mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="flex items-center gap-2 text-slate-400">
            <Code size={16} className="text-cyan-400" />
            <span>Frontend Developer</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Zap size={16} className="text-cyan-400" />
            <span>React Specialist</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Sparkles size={16} className="text-cyan-400" />
            <span>UI/UX Lover</span>
          </div>
        </motion.div>

        {/* Botón de contacto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <a
            href="https://wa.me/541156417859"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg"
          >
            📲 Hablemos por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};
