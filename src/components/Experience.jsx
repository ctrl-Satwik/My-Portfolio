import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-32 relative">
      <div className="absolute inset-0 bg-primary/5 skew-y-3 transform -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-sm text-primary uppercase font-bold tracking-widest mb-4">Chapter 4</h2>
          <h3 className="text-4xl md:text-6xl font-bold">Building Real Products</h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h4 className="text-3xl font-bold mb-2">Full-Stack (AI-Native) Intern</h4>
              <p className="text-xl text-primary font-medium">StapuBox</p>
              <p className="text-foreground/50 text-sm mt-1">July 2026 – Present</p>
            </div>
            
            <ul className="space-y-6 text-foreground/80 text-lg">
              <li className="flex items-start">
                <span className="text-primary mr-4 mt-1">✦</span>
                <p>Developed the Leagues feature for the StapuBox React Native application, integrating backend-provided data and dynamically rendering league information.</p>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-4 mt-1">✦</span>
                <p>Redesigned the application's bottom navigation bar with interactive animations to improve navigation flow.</p>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-4 mt-1">✦</span>
                <p>Standardized reusable React Native UI components and design patterns across the application.</p>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-4 mt-1">✦</span>
                <p>Implemented and debugged frontend enhancements, improving existing features and building new user-facing functionality.</p>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            {/* Minimal Mobile Device Mockup */}
            <div className="relative w-[300px] h-[600px] bg-black border-[8px] border-white/10 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col">
              <div className="absolute top-0 inset-x-0 h-6 bg-black z-20 rounded-t-[2.5rem]" />
              
              {/* Fake App Header */}
              <div className="h-20 bg-gray-900 flex items-end justify-center pb-4 z-10">
                <span className="font-bold text-lg">Leagues</span>
              </div>
              
              {/* Fake App Body */}
              <div className="flex-1 bg-gray-950 p-4 space-y-4 overflow-hidden relative">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div 
                    key={i}
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.2 }}
                    className="h-24 bg-gray-900 rounded-xl border border-white/5 p-4 flex flex-col justify-between"
                  >
                    <div className="w-1/2 h-4 bg-gray-700 rounded-full" />
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="w-2/3 h-full bg-primary" />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Fake Bottom Nav */}
              <div className="h-20 bg-gray-900 border-t border-white/10 flex justify-around items-center px-4 z-10">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -5 }}
                    className={`w-12 h-12 flex items-center justify-center rounded-full ${i === 2 ? 'bg-primary/20 text-primary' : 'text-gray-500'}`}
                  >
                    <Smartphone size={24} />
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Glow effect behind phone */}
            <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10 rounded-full transform scale-75" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
