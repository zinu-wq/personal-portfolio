import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="max-w-3xl mx-auto mt-20 mb-12 px-6">
      <motion.h2 
        className="text-3xl font-semibold text-primary mb-6"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x:0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Contact
      </motion.h2>
      <motion.p 
        className="text-lg text-gray-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay:0.2 }}
      >
        Email: <a href="mailto:zarrinrahmanzinat@gmail.com" className="text-primary underline hover:text-blue-600">zarrinrahmanzinat@gmail.com</a>
      </motion.p>
    </section>
  );
}
