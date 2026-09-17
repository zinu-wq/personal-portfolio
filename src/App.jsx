import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";


function App() {

  return (

    <main className="portfolio-bg">

      {/* Background Effects */}

      <div className="background-shape shape-one"></div>

      <div className="background-shape shape-two"></div>

      <div className="background-shape shape-three"></div>



      <div className="relative z-10">


        {/* Navigation */}

        <Navbar />


        {/* Sections */}

        <Hero />

        <About />

        <Skills />

        <Projects />


      </div>


    </main>

  );

}


export default App;