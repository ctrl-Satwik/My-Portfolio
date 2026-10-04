import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="journey" className="py-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm text-primary uppercase font-bold tracking-widest mb-4">Chapter 1</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8">The Beginning — IIT BHU</h3>
          
          <div className="prose prose-invert prose-lg text-foreground/80">
            <p className="mb-6">
              My journey started in the classrooms of IIT (BHU) Varanasi, where I pursued Electrical Engineering. It was there that I first discovered the power of code. What began as a curiosity quickly evolved into a deep fascination with software development and problem-solving.
            </p>
            <p>
              I built a strong foundation in C++, Python, JavaScript, and core computer science concepts. But more importantly, I learned how to approach complex problems methodically. This was the beginning of my transition from hardware circuits to digital products.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {['C++', 'Python', 'JavaScript', 'TypeScript', 'SQL'].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 border border-white/10 rounded-lg text-center bg-white/5 hover:bg-white/10 transition-colors"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
