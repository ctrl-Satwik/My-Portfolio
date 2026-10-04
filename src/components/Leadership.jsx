import React from 'react';
import { motion } from 'framer-motion';

const Leadership = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-sm text-primary uppercase font-bold tracking-widest mb-4">Chapter 3</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Leadership Beyond Code</h3>
          <p className="text-foreground/70 mt-4 max-w-2xl text-lg">
            Technology is just one part of the story. Creativity, communication, and leadership complete it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l border-white/20"
            >
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1" />
              <h4 className="text-2xl font-bold mb-2">Joint Secretary — Outreach Club</h4>
              <p className="text-sm text-accent mb-4">IIT BHU</p>
              <ul className="space-y-3 text-foreground/70 list-disc list-outside ml-5 marker:text-primary">
                <li>Led a team of 40+ members.</li>
                <li>Coordinated the production of 30+ project videos, documentaries,  and video diaries.</li>
                <li>Increased Instagram followers by 65%.</li>
                <li>Grew YouTube subscribers from 4,000 to 6,500+.</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l border-white/20"
            >
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1" />
              <h4 className="text-2xl font-bold mb-2">Marketing Executive — Symphony'23</h4>
              <p className="text-sm text-accent mb-4">Indian Music Club, IIT BHU</p>
              <ul className="space-y-3 text-foreground/70 list-disc list-outside ml-5 marker:text-primary">
                <li>Executed outreach campaigns and secured corporate sponsorships.</li>
              </ul>
            </motion.div>
          </div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l border-white/20"
            >
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1" />
              <h4 className="text-2xl font-bold mb-2">Event Coordinator — FMC Weekend'23</h4>
              <ul className="space-y-3 text-foreground/70 list-disc list-outside ml-5 marker:text-primary">
                <li>Organized a documentary-making event.</li>
                <li>Increased registrations by 20%.</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl"
            >
              <h4 className="text-xl font-bold mb-6">Achievements</h4>
              <ul className="space-y-4 text-foreground/80">
                <li className="flex items-start">
                  <span className="text-accent mr-3">🏆</span>
                  <span>1st Position — Documentary Making Competition, Springfest 2024, IIT Kharagpur.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">🥇</span>
                  <span>1st Position — Group Song Event, Aagman'22.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">🌟</span>
                  <span>Mentored junior students in vocal performance for Aagman'23.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
