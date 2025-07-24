import { motion } from "framer-motion";

const About = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.6, duration: 0.9 },
    }),
  };

  const sections = [
    {
      title: "¿Qué me mueve?",
      content: "*Me mueve la necesidad de transformar ideas en cosas reales. De sentir que lo que pienso puede tener un impacto, aunque sea pequeño.*",
    },
    {
      title: "¿Qué me motiva?",
      content: "*Saber que estoy creciendo. Que cada línea de código me acerca un poco más a lo que quiero construir.*",
    },
    {
      title: "¿Qué hago?",
      content: "*Diseño y desarrollo sistemas que funcionan, comparto mis avances y aprendo mientras lo hago. Creo en el poder de mostrar el proceso, no solo el resultado.*",
    },
    {
      title: "¿Por qué lo hago?",
      content: "*Porque esto me da sentido. Porque cuando programo o creo, me siento en el lugar correcto, haciendo lo que realmente quiero hacer.*",
    },
  ];

  return (
    <section className="p-6 md:p-12 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center">Sobre mí</h2>
      {sections.map((section, i) => (
        <motion.div
          key={section.title}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-10"
        >
          <h3 className="text-2xl font-bold mb-3">{section.title}</h3>
          <p className="text-lg italic leading-relaxed">{section.content}</p>
        </motion.div>
      ))}
    </section>
  );
};

export default About;
