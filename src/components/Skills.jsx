import { motion } from 'framer-motion';

const skills = [
  "React.js", "Next.js", "JavaScript", "TypeScript",
  "Node.js", "Express.js", "MongoDB", "SQL", "Tailwind CSS"
];

export default function Skills() {
  return (
    <section 
    className="relative z-10 max-w-5xl mx-auto mt-20 glass-card p-10"
   >
      <motion.h2 
        className="text-3xl font-semibold text-primary mb-6"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x:0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>
      <motion.div 
        className="flex flex-wrap gap-4 justify-center sm:justify-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {}
        }}
      >
        {skills.map((skill) => (
          <motion.span
            key={skill}
            className="bg-primary bg-opacity-10 text-primary font-medium px-4 py-2 rounded-full cursor-default select-none hover:bg-opacity-30 transition"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
