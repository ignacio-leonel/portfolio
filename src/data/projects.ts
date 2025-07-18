// src/data/projects.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  live?: string;
  code?: string;
  category: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Juan José Mosman",
    description: "Sitio web institucional para Juan Mosman, trabajador del campo argentino, con dominio propio e indexado a Google.",
    tech: ["React", "TypeScript", "Tailwind", "Vite", "Vercel", "Framer Motion", "Git", "Cloudflare"],
    image: "./images/mosman.jpg",
    live: "https://www.juanjosemosman.com.ar",
    category: "Sitios Web",
    featured: true
  },
  {
    id: 2,
    title: "Pastelería Rose",
    description: "Sitio web elegante para emprendimiento local de pastelería con catálogo de productos, sistema de pedidos y galería interactiva.",
    tech: ["React", "Tailwind", "Vite", "Vercel", "Git", "Framer Motion", "Git Hub"],
    image: "./images/pasteleria.png",
    live: "https://pasteleria-rose.vercel.app/",
    code: "https://github.com/ignacio-leonel/Pasteleria",
    category: "Sitios Web",
    featured: true
  },
  {
    id: 3,
    title: "Nacho Web",
    description: "Sitio web dedicado a la comercialización de servicios de desarrollo web, con contacto por WhatsApp y formulario de contacto.",                  
    tech: ["React", "Next.js", "Tailwind", "Vercel","google Analytics", "Framer Motion", "Git"],
    image: "./images/nachoweb.jpg",
    live: "https://nachoweb.com.ar",
    category: "Sitios Web",
    featured: true
  },
  {
    id: 4,
    title: "Gestión Comercial",
    description: "Sistema para gestión comercial: administración de productos, stock y ventas. Distintos roles de usuario con permisos específicos.",
    tech: ["React", "Tailwind", "Vite", "Git","Node.js", "Express", "PostgreSQL"],
    image: "./images/gestioncomercial.jpg",
    code: "https://github.com/ignacio-leonel/sistemaGestionComercial" ,
    category: "Full Stack",
    featured: true
  },

];
export const categories = ["Todos", "Sitios Web", "Full Stack", "Backend"];
