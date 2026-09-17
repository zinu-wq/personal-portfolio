import { motion } from 'framer-motion';

export default function ProjectCard({ title, description, technologies, github, children }) {
  return (
    <motion.div
      className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-xl transition cursor-pointer flex flex-col"
      whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(59,130,246,0.3)" }}
    >
      <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
      <p className="text-gray-700 text-sm flex-grow">{description}</p>
      <p className="text-gray-500 text-xs mt-4 mb-2 font-mono">Tech: {technologies}</p>
      <a href={github} target="_blank" rel="noopener noreferrer" className="mt-auto text-primary underline hover:text-blue-600">View on GitHub</a>
    </motion.div>
  );
}
