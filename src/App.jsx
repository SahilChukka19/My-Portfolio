import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Awards from './components/Awards';

function App() {
  const [loaderComplete, setLoaderComplete] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen selection:bg-[var(--color-accent-navy)] selection:text-white relative">
      {!loaderComplete && <Loader onComplete={() => setLoaderComplete(true)} />}
      
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[var(--color-accent-navy)] origin-left z-50"
        style={{ scaleX }}
      />

      {loaderComplete && (
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Awards />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;