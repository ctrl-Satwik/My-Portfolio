import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Leadership from './components/Leadership';
import Experience from './components/Experience';
import Toolkit from './components/Toolkit';
import Contact from './components/Contact';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />
      
      {/* Custom Cursor */}
      <motion.div 
        className="custom-cursor hidden md:block"
        animate={{ 
          x: mousePosition.x - 10, 
          y: mousePosition.y - 10 
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />

      <Navbar />
      
      <main className="px-6 md:px-12 lg:px-24">
        <Hero />
        <About />
        <Projects />
        <Leadership />
        <Experience />
        <Toolkit />
        <Contact />
      </main>
    </div>
  );
}

export default App;
