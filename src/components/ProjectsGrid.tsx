import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { PortfolioCard } from './PortfolioCard';
import { Project } from '../data/projects';

interface ProjectsGridProps {
  projects: Project[];
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  if (projects.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-2xl font-bold text-white mb-2">No se encontraron proyectos</h3>
        <p className="text-slate-400">Intenta con otra categoría</p>
      </div>
    );
  }

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Contenedor scrollable sin scroll visible */}
      <motion.div
        ref={containerRef}
        className="
          flex flex-col md:flex-row md:gap-6
          overflow-x-auto overflow-y-hidden
          scrollbar-hide
          scroll-smooth
          px-2
        "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="flex-shrink-0 w-full md:w-80"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { delay: index * 0.3, duration: 1.5, ease: 'easeOut' },
              },
            }}
          >
            <PortfolioCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      {/* Botón izquierda */}
      <button
        onClick={scrollLeft}
        aria-label="Anterior"
        className="
          hidden md:flex items-center justify-center
          absolute top-1/2 left-0 -translate-y-1/2
          w-10 h-10
          bg-black bg-opacity-30 hover:bg-opacity-50
          text-white rounded-r
          cursor-pointer
          z-10
          select-none
        "
      >
        ‹
      </button>

      {/* Botón derecha */}
      <button
        onClick={scrollRight}
        aria-label="Siguiente"
        className="
          hidden md:flex items-center justify-center
          absolute top-1/2 right-0 -translate-y-1/2
          w-10 h-10
          bg-black bg-opacity-30 hover:bg-opacity-50
          text-white rounded-l
          cursor-pointer
          z-10
          select-none
        "
      >
        ›
      </button>

      {/* CSS para ocultar scrollbar (agregar a tu CSS global o tailwind.config.js) */}
      <style >{`
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE y Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;  /* Chrome, Safari, Opera */
        }
      `}</style>
    </div>
  );
};
