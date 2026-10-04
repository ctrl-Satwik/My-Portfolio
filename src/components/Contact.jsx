import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 border-t border-white/10 mt-12 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-sm text-primary uppercase font-bold tracking-widest mb-6">Chapter 6</h2>
          <h3 className="text-5xl md:text-7xl font-bold mb-8">
            Still Building. <br />
            <span className="text-white/40">Still Exploring.</span>
          </h3>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto mb-16 leading-relaxed">
            From electrical engineering to building digital products, my journey has always been about curiosity, experimentation, and solving problems. And this is only the beginning.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-24">
            <a href="mailto:satwik.saurav.91@gmail.com" className="flex items-center space-x-3 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95">
              <Mail size={20} />
              <span>Get in Touch</span>
            </a>
            <a href="https://drive.google.com/file/d/19Lz-1axjn45lra2k0mABKbidji04cCBM/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 px-8 py-4 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition-all hover:scale-105 active:scale-95 border border-white/10">
              <FileText size={20} />
              <span>Resume</span>
            </a>
          </div>

          <div className="flex justify-center space-x-8">
            <a href="https://github.com/ctrl-Satwik" target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full">
              <Github size={28} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/satwik-saurav-453471250" target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full">
              <Linkedin size={28} />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative footer element */}
      <motion.div 
        initial={{ height: 0 }}
        whileInView={{ height: '100px' }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-t from-primary to-transparent"
      />
    </section>
  );
};

export default Contact;
