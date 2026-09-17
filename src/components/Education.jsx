import { motion } from 'framer-motion';

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Your University Name",
    year: "2017 - 2021"
  },
  // Add more if you want
];

export default function Education() {
  return (
    <section id="education" className="max-w-3xl mx-auto mt-20 px-6">
      <motion.h2 
        className="text-3xl font-semibold text-primary mb-6"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x:0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Education
      </motion.h2>
      <div>
        {educationData.map(({degree, institution, year}) => (
          <motion.div 
            key={degree}
            className="mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold">{degree}</h3>
            <p className="text-gray-700">{institution}</p>
            <p className="text-gray-500 text-sm">{year}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
