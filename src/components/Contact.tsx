
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:ignacio.lm1991@gmail.com?subject=Contacto de ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message + '\n\nEmail: ' + form.email)}`;
  };

  return (
    <section id="contact" className="py-16 bg-[#0f172a]">
      <div className="container mx-auto px-4">
        {/* Título principal */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-4">
            ¿Querés <span className="text-white">sumarme a tu equipo</span>?
          </h2>
          <p className="text-cyan-300 max-w-3xl mx-auto">
            Estoy buscando nuevas oportunidades laborales. Si tenés una propuesta o querés charlar para una entrevista, podés contactarme por el medio que prefieras.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Izquierda */}
          <motion.div
            className="flex flex-col gap-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* WhatsApp */}
            <div className="bg-[#1e293b] rounded-xl shadow-lg p-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                ¿Querés hablar <span className="text-green-400">por WhatsApp?</span>
              </h3>
              <p className="text-green-300 mb-6">
                Enviame un mensaje y coordinamos una charla cuando te quede cómodo.
              </p>
              <a
                href="https://wa.me/541139339046"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition"
              >
                Enviar mensaje por WhatsApp
              </a>
            </div>

            {/* Redes laborales */}
            <div className="bg-[#1e293b] rounded-xl shadow-lg p-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Conectemos en <span className="text-cyan-400">mis redes</span>
              </h3>
              <p className="text-[#94a3b8] mb-6">
                Ahí comparto mis proyectos, publicaciones y reflexiones sobre tecnología y desarrollo.
              </p>
              <div className="flex justify-center gap-6">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/ignaciomaldo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-5 py-3 rounded-full shadow-lg transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-.97 0-1.75-.78-1.75-1.75S5.53 4.2 6.5 4.2s1.75.78 1.75 1.75S7.47 7.7 6.5 7.7zM20 19h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.88 0-2.17 1.46-2.17 2.97V19h-3v-10h2.88v1.37h.04c.4-.76 1.37-1.57 2.82-1.57 3.01 0 3.56 1.98 3.56 4.56V19z" />
                  </svg>
                  LinkedIn
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Ignacio-leonel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-semibold px-5 py-3 rounded-full shadow-lg transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.41 7.86 10.95.58.1.79-.25.79-.55v-2.05c-3.2.7-3.87-1.54-3.87-1.54-.52-1.3-1.27-1.65-1.27-1.65-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.19 1.75 1.19 1.02 1.75 2.67 1.24 3.32.94.1-.74.4-1.24.73-1.53-2.55-.29-5.24-1.27-5.24-5.65 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.03 0 0 .96-.31 3.14 1.17a10.8 10.8 0 012.86-.39c.97 0 1.95.13 2.86.39 2.17-1.48 3.14-1.17 3.14-1.17.62 1.58.24 2.74.12 3.03.74.8 1.18 1.82 1.18 3.07 0 4.39-2.7 5.35-5.27 5.63.42.36.79 1.1.79 2.22v3.29c0 .31.2.66.8.55A10.51 10.51 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>

          {/* Derecha - Formulario */}
          <motion.div
            className="bg-[#1e293b] rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2">
              ¿Preferís escribirme <span className="text-cyan-400">por mail?</span>
            </h3>
            <p className="text-cyan-400 mb-6">
              Completá el formulario y me pondré en contacto lo antes posible. Estoy abierto a entrevistas, propuestas o charlas informativas.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-1 font-medium">
                  Nombre
                </label>
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
                <label htmlFor="email" className="block text-gray-300 mb-1 font-medium">
                  Email
                </label>
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
                <label htmlFor="message" className="block text-gray-300 mb-1 font-medium">
                  Mensaje
                </label>
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
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
