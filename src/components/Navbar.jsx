export default function Navbar() {

  return (
    <nav className="
    fixed
    top-0
    left-0
    w-full
    z-50
    px-6
    py-5
    ">

      <div className="
      max-w-6xl
      mx-auto
      flex
      justify-between
      items-center
      bg-white/70
      backdrop-blur-xl
      shadow-lg
      rounded-full
      px-8
      py-4
      border
      border-white
      ">


        <h2 className="
        text-2xl
        font-extrabold
        bg-gradient-to-r
        from-blue-600
        to-purple-600
        text-transparent
        bg-clip-text
        ">
          Zarrin
        </h2>



        <div className="
        hidden
        md:flex
        gap-8
        text-gray-700
        font-medium
        ">

          <a href="#hero" className="hover:text-blue-600">
            Home
          </a>

          <a href="#about" className="hover:text-blue-600">
            About
          </a>

          <a href="#skills" className="hover:text-blue-600">
            Skills
          </a>

          <a href="#projects" className="hover:text-blue-600">
            Projects
          </a>

          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>

        </div>



        <a
        href="/cv.pdf"
        download
        className="
        px-5
        py-2
        rounded-full
        bg-blue-600
        text-white
        font-semibold
        hover:bg-blue-700
        transition
        "
        >
          Download CV
        </a>


      </div>

    </nav>
  )
}