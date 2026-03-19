import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import Particles from './components/ui/particles';

const App = () => {
  return (
    <div className="app">
      {/* Global Background Layer 1: Aurora */}
      <div className="aurora-container">
        <div className="aurora-bg"></div>
        <div className="aurora-bg-2"></div>
      </div>
      
      {/* Global Background Layer 2: Particles */}
      <Particles
        className="fixed inset-0 -z-10"
        quantity={150}
        ease={80}
        color="#ffffff"
        refresh
      />
      
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Education />
        <div className="section-divider" />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
