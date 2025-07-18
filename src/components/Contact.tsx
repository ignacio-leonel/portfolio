import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

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
    <section id="contact" className="py-16 bg-[#0f172a]">
      <div className="container mx-auto px-4">
        {/* (Poné acá el título y la parte de redes si querés, o dejalo solo el form) */}

        <motion.div
          className="bg-[#1e293b] rounded-xl shadow-lg p-8 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
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
      </div>
    </section>
  );
};

export default ContactForm;
