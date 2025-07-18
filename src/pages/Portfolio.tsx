import React, { useState, useMemo } from 'react';
import { HeroSection } from '../components/HeroSection';
import { FilterBar } from '../components/FilterBar';
import { ProjectsGrid } from '../components/ProjectsGrid';
import { TechStackSection } from '../components/TechStackSection';
import About from '../components/About'
import { projects } from '../data/projects';
import WhatsAppButton from '../components/WhatsAppButton'
import  Contact from '../components/Contact';   
import Recursos from '../components/Recursos'; 
export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'Todos') {
      return projects;
    }
    return projects.filter(project => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="relative">
        <WhatsAppButton/>
        <HeroSection />
        <About/>
        <main className="max-w-7xl mx-auto px-6 pb-20">
          <section className="text-center mb-12">
  <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">
    Proyectos <span className="text-cyan-400">destacados</span>
  </h2>
  <p className="text-cyan-300 max-w-3xl mx-auto">
    Estos son algunos de los proyectos que desarrollé recientemente. Están pensados para resolver problemas reales, practicar buenas prácticas y demostrar mi evolución como desarrollador.
  </p>
</section>

          <FilterBar 
            activeCategory={activeCategory} 
            onCategoryChange={setActiveCategory} 
          />
          
          <ProjectsGrid projects={filteredProjects} />
        </main>
        
        <TechStackSection />
        <Recursos/>
        <Contact/>
        
      </div>
    </div>
  );
};