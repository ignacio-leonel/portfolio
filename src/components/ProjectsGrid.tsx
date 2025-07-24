import React, { useRef } from "react";
import { motion } from "framer-motion";
import { PortfolioCard } from "./PortfolioCard";
import { Project } from "../data/projects";

interface ProjectsGridProps {
  projects: Project[];
}

export const ProjectsGrid: React.FC<ProjectsGridProps> = ({ projects }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  if (projects.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-xl shadow-md max-w-4xl mx-auto border border-black/10">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-2xl font-bold text-cyan-400 mb-2">
          No se encontraron proyectos
        </h3>
        <p className="text-cyan-400">Intenta con otra categoría</p>
      </div>
    );
  }

  return (
    <section className="relative bg-white py-16 px-6 rounded-xl shadow-md max-w-7xl mx-auto border border-black/10">
      <motion.div
        ref={containerRef}
        className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth py-4 px-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="flex-shrink-0 w-80"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  delay: index * 0.25,
                  duration: 1.1,
                  ease: "easeOut",
                },
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
        className="hidden md:flex items-center justify-center absolute top-1/2 left-0 -translate-y-1/2
          w-12 h-12 border border-black/10 text-cyan-400 bg-white hover:bg-cyan-50
          rounded-r-xl shadow-md cursor-pointer z-10 transition duration-300 ease-in-out active:scale-95"
      >
        ‹
      </button>

      {/* Botón derecha */}
      <button
        onClick={scrollRight}
        aria-label="Siguiente"
        className="hidden md:flex items-center justify-center absolute top-1/2 right-0 -translate-y-1/2
          w-12 h-12 border border-black/10 text-cyan-400 bg-white hover:bg-cyan-50
          rounded-l-xl shadow-md cursor-pointer z-10 transition duration-300 ease-in-out active:scale-95"
      >
        ›
      </button>

      {/* Ocultar scrollbar */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
