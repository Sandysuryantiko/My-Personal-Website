import React from "react";
// import Popup3D from "./components/Popup3D";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer/>
      </main>
    </div>
  );
}

export default App;
