import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-primary font-medium tracking-wide uppercase text-sm"
          >
            Portfolio
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            Hi, I'm <span className="text-primary">Satwik.</span>
            <br />
            I turn ideas into digital experiences.
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-lg">
            From electrical engineering to building digital products, my journey is driven by curiosity and problem-solving.
          </p>
          
          <div className="pt-4">
            <a
              href="#journey"
              className="group inline-flex items-center space-x-2 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] transition-all duration-300"
            >
              <span>Explore My Journey</span>
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="inline-block"
              >
                ↓
              </motion.span>
            </a>
          </div>
        </motion.div>

        {/* Abstract visual element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:flex justify-center items-center h-[500px]"
        >
          {/* Core glow */}
          <div className="absolute w-72 h-72 bg-primary/30 blur-[120px] rounded-full"></div>
          {/* Accent glow */}
          <div className="absolute w-48 h-48 bg-accent/40 blur-[80px] rounded-full translate-x-12 translate-y-12"></div>
          
          {/* Outer rotating shape */}
          <motion.div 
            animate={{ 
              rotate: 360,
              borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "70% 30% 30% 70% / 70% 70% 30% 30%", "30% 70% 70% 30% / 30% 30% 70% 70%"]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-72 h-72 border-2 border-primary/40 bg-gradient-to-br from-primary/10 via-transparent to-transparent backdrop-blur-md shadow-[inset_0_0_50px_rgba(220,38,38,0.2)]"
          />
          
          {/* Inner rotating shape */}
          <motion.div 
            animate={{ 
              rotate: -360,
              borderRadius: ["70% 30% 30% 70% / 70% 70% 30% 30%", "30% 70% 70% 30% / 30% 30% 70% 70%", "70% 30% 30% 70% / 70% 70% 30% 30%"]
            }}
            transition={{ 
              duration: 12, 
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-48 h-48 border border-accent/30 bg-gradient-to-tl from-accent/10 to-transparent backdrop-blur-sm"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
