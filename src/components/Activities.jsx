import { motion } from 'framer-motion';

const activities = [
  "Contributed to open-source projects on GitHub.",
  "Volunteered for local tech education events.",
  "Actively involved in developer communities and meetups."
];

export default function Activities() {
  return (
    <section id="activities" className="max-w-3xl mx-auto mt-20 mb-16 px-6">
      <motion.h2 
        className="text-3xl font-semibold text-primary mb-6"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x:0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Activities
      </motion.h2>
      <motion.ul 
        className="list-disc list-inside text-gray-700 space-y-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
          hidden: {}
        }}
      >
        {activities.map((act, i) => (
          <motion.li 
            key={i}
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {act}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
