export default function Projects() {

  const projects = [
    {
      title: "AgroMart - Full Stack Farmers Marketplace",
      description:
        "A marketplace platform connecting farmers directly with customers. Users can browse agricultural products and manage operations via a responsive web interface.",
      tech: "HTML, CSS, JavaScript, Node.js, Express.js, JSON File Storage, Git",
      link: "#"
    },
    {
      title: "LawConnect - Legal Management System",
      description:
        "A C# Windows Forms application managing communication between clients, lawyers, and administrators with role-based authentication.",
      tech: "C#, .NET Framework, Windows Forms, SQL Server",
      link: "#"
    },
    {
      title: "Portfolio Website",
      description:
        "Modern responsive developer portfolio built with React and Tailwind CSS.",
      tech: "React.js, Tailwind CSS, Framer Motion",
      link: "#"
    }
  ];


  return (
    <section className="max-w-6xl mx-auto px-6 py-20">

      <h2 className="text-4xl font-bold mb-10 text-gray-900">
        Projects
      </h2>


      <div className="grid md:grid-cols-2 gap-8">

        {projects.map((project, index) => (

          <div
            key={index}
            className="
            rounded-3xl
            p-8
            bg-white/70
            backdrop-blur-xl
            border border-white
            shadow-xl
            hover:-translate-y-2
            transition duration-300
            "
          >

            <h3 className="text-2xl font-bold text-gray-900">
              {project.title}
            </h3>


            <p className="mt-4 text-gray-600 leading-relaxed">
              {project.description}
            </p>


            <p className="mt-5 text-sm text-blue-600">
              Tech: {project.tech}
            </p>


            <a
              href={project.link}
              className="
              inline-block
              mt-5
              text-blue-600
              font-semibold
              hover:underline
              "
            >
              View Project →
            </a>


          </div>

        ))}

      </div>

    </section>
  );
}