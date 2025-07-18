import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiVite,
  SiNextdotjs,
  SiFramer,
  SiGit,
  SiPostgresql,
  SiMysql
} from 'react-icons/si';

const technologies = [
  { name: 'React', icon: SiReact },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Python', icon: SiPython },
  { name: 'Vite', icon: SiVite },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Framer Motion', icon: SiFramer },
  { name: 'Git', icon: SiGit },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MySQL', icon: SiMysql }
];

export const TechStackSection: React.FC = () => {
  return (
    <section className="py-20 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Tecnologías que uso a diario
        </motion.h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-center items-center">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center text-slate-300 hover:text-cyan-400 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <tech.icon size={36} />
              <span className="mt-2 text-sm">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
