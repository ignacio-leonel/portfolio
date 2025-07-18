import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert('Por favor completá todos los campos.');
      return;
    }

    const subject = encodeURIComponent(`Contacto de ${form.name}`);
    const body = encodeURIComponent(`Mensaje: ${form.message}\n\nEmail: ${form.email}`);

    window.location.href = `mailto:ignacio.lm1991@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-16 bg-[#0f172a] text-white">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-3 text-cyan-400">
          Elegí la forma en la que querés contactarme
        </h2>
        <p className="text-gray-400 mb-12">
          Estoy disponible para networking, charlas o entrevistas. No dudes en escribirme.
        </p>

        {/* Botones */}
        <div className="flex justify-center gap-6 flex-wrap mb-12">
          {/* WhatsApp */}
          <a
            href="https://wa.me/541139339046"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 transition-colors text-white font-semibold px-5 py-3 rounded-full shadow-lg"
            aria-label="Contactame por WhatsApp"
          >
            {/* Icono WhatsApp SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.52 3.48A11.8 11.8 0 0012.01.5C6.37.5 1.5 5.38 1.5 11.01c0 1.94.56 3.74 1.53 5.3L.5 23.5l6.94-2.01a11.44 11.44 0 005.57 1.43c5.65 0 10.53-4.87 10.53-10.53a11.59 11.59 0 00-3.02-8.41zm-8.51 15.39a9.16 9.16 0 01-4.68-1.35l-.34-.2-4.15 1.2 1.23-4.03-.22-.35a9.07 9.07 0 01-1.4-4.87c0-5 4.08-9.06 9.12-9.06 2.44 0 4.73.95 6.45 2.67a9.07 9.07 0 012.68 6.41c0 5.04-4.06 9.12-9.08 9.12z" />
              <path d="M17.38 14.46c-.29-.15-1.71-.84-1.97-.94-.26-.1-.44-.15-.62.15s-.71.94-.87 1.14c-.16.2-.32.22-.6.07a7.94 7.94 0 01-2.33-1.44 8.77 8.77 0 01-1.63-2.02c-.17-.29 0-.45.13-.6.13-.13.29-.33.43-.5a.65.65 0 00.2-.35.72.72 0 000-.52c-.07-.14-.62-1.5-.85-2.05-.22-.54-.44-.46-.62-.46-.16 0-.35 0-.54 0s-.52.07-.79.38a3.36 3.36 0 00-1.1 2.56c0 1.51.78 2.97 1.77 3.79a7.68 7.68 0 002.96 2.16c.4.17.7.14.96.08.3-.07.92-.38 1.05-.74.13-.36.13-.67.09-.74-.03-.07-.26-.12-.54-.26z" />
            </svg>
            WhatsApp
          </a>

          {/* Mail - abre el formulario */}
          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold px-5 py-3 rounded-full shadow-lg focus:outline-none"
            aria-expanded={showForm}
            aria-controls="contact-form"
          >
            {/* Icono mail */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 4h16v16H4z" stroke="none" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
            Mail
          </button>

          {/* GitHub */}
          <a
            href="https://github.com/Ignacio-leonel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 transition-colors text-white font-semibold px-5 py-3 rounded-full shadow-lg"
            aria-label="Mi perfil de GitHub"
          >
            {/* Icono GitHub */}
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.41 7.86 10.95.58.1.79-.25.79-.55v-2.05c-3.2.7-3.87-1.54-3.87-1.54-.52-1.3-1.27-1.65-1.27-1.65-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.19 1.75 1.19 1.02 1.75 2.67 1.24 3.32.94.1-.74.4-1.24.73-1.53-2.55-.29-5.24-1.27-5.24-5.65 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.03 0 0 .96-.31 3.14 1.17a10.8 10.8 0 012.86-.39c.97 0 1.95.13 2.86.39 2.17-1.48 3.14-1.17 3.14-1.17.62 1.58.24 2.74.12 3.03.74.8 1.18 1.82 1.18 3.07 0 4.39-2.7 5.35-5.27 5.63.42.36.79 1.1.79 2.22v3.29c0 .31.2.66.8.55A10.51 10.51 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
            </svg>
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ignaciomaldo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 transition-colors text-white font-semibold px-5 py-3 rounded-full shadow-lg"
            aria-label="Mi perfil de LinkedIn"
          >
            {/* Icono LinkedIn */}
            <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-.97 0-1.75-.78-1.75-1.75S5.53 4.2 6.5 4.2s1.75.78 1.75 1.75S7.47 7.7 6.5 7.7zM20 19h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.88 0-2.17 1.46-2.17 2.97V19h-3v-10h2.88v1.37h.04c.4-.76 1.37-1.57 2.82-1.57 3.01 0 3.56 1.98 3.56 4.56V19z" />
            </svg>
            LinkedIn
          </a>
        </div>

        {/* Formulario oculto que se muestra al hacer click en Mail */}
        {showForm && (
          <motion.div
            id="contact-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-[#1e293b] rounded-xl shadow-lg p-8 max-w-lg mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-1 font-medium">Nombre</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-[#111827] text-white px-4 py-2 rounded-md border border-gray-600 focus:border-cyan-400 focus:ring focus:ring-cyan-400/30 transition"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-1 font-medium">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-[#111827] text-white px-4 py-2 rounded-md border border-gray-600 focus:border-cyan-400 focus:ring focus:ring-cyan-400/30 transition"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-1 font-medium">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-[#111827] text-white px-4 py-2 rounded-md border border-gray-600 focus:border-cyan-400 focus:ring focus:ring-cyan-400/30 transition"
                />
              </div>

              <div className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="inline-flex items-center bg-cyan-400 text-[#0f172a] font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-white transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
                >
                  Enviar propuesta o consulta
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Contact;
