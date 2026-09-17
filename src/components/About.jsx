import { motion } from 'framer-motion';

export default function About() {
  return (
    <section 
id="about"
className="relative z-10 max-w-5xl mx-auto mt-20 glass-card p-10"
>
      <motion.h2 
        className="text-3xl font-semibold text-primary mb-6"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x:0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>
      <motion.p 
        className="text-gray-800 text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        I am a passionate Frontend Developer skilled in React.js, Next.js, JavaScript, TypeScript, Node.js, Express.js, and modern databases such as MongoDB and SQL. I develop clean, responsive, and user-friendly applications with a focus on performance and scalability.
      </motion.p>
    </section>
  );
}
