import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const projects = [
  {
    title: "Personal Finance Tracker",
    description: "Built and deployed a full-stack finance tracker with a React frontend and Node.js/Express REST API backed by MongoDB Atlas. Features JWT authentication, CRUD operations with expense categorization, and an interactive dashboard with chart visualizations for spending trends.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "JWT"],
    github: "https://github.com/ctrl-Satwik/Expense-Tracker"
  },
  {
    title: "Music Streaming Application",
    description: "Architected a responsive music streaming platform enabling users to search, organize, and play tracks with zero latency. Integrated the HTML5 Audio API for playback controls including seek, shuffle, loop, and volume. Designed a mobile-responsive UI using Tailwind CSS.",
    tech: ["React.js", "HTML5 Audio API", "Tailwind CSS"],
    github: "#"
  },
  {
    title: "Real-Time Chat Application",
    description: "Built a real-time messaging application using React.js and Socket.IO with live message delivery, synchronized conversations, typing indicators, online presence, and read receipts. Implemented persistent chat history for seamless messaging.",
    tech: ["React.js", "Node.js", "Express.js", "Socket.IO"],
    github: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-sm text-primary uppercase font-bold tracking-widest mb-4">Chapter 2</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Exploring the Web</h3>
          <p className="text-foreground/70 mt-4 max-w-2xl text-lg">
            My early development journey through interactive applications and full-stack projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-primary/60 hover:shadow-[0_0_30px_rgba(220,38,38,0.15)] transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h4>
                <div className="flex space-x-3 text-foreground/50">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Github size={20} /></a>
                </div>
              </div>
              <p className="text-foreground/70 mb-8 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map(t => (
                  <span key={t} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                    {t}
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

export default Projects;
