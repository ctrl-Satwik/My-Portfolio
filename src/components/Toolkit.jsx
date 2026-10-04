import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  "Languages": ["C++", "Python", "JavaScript", "TypeScript", "SQL"],
  "Frontend": ["React.js", "Tailwind CSS", "Bootstrap"],
  "Mobile": ["React Native", "React Navigation", "Expo", "Android Studio"],
  "Backend & DB": ["Node.js", "Express.js", "MongoDB", "MySQL"],
  "Tools": ["Git", "GitHub", "GitHub Copilot", "Claude Code", "Postman", "VS Code"],
  "Core CS": ["DSA", "OOP", "DBMS", "OS"]
};

const Toolkit = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-sm text-primary uppercase font-bold tracking-widest mb-4">Chapter 5</h2>
          <h3 className="text-4xl md:text-5xl font-bold">The Developer I Am Today</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all group"
            >
              <h4 className="text-xl font-bold mb-6 text-white group-hover:text-primary transition-colors">{category}</h4>
              <div className="flex flex-wrap gap-3">
                {items.map(skill => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 bg-black/40 rounded-lg text-sm font-medium text-foreground/80 border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Toolkit;
