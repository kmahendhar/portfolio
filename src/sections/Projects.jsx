import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/portfolioData';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 flex flex-col group"
    >
      <div className="relative overflow-hidden aspect-video">
        <div className="absolute inset-0 bg-brand/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            {project.title}
          </h3>
          <div className="flex gap-3">
            {project.githubLink && (
              <a 
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-brand dark:hover:text-brand transition-colors duration-200"
                aria-label="GitHub Repository"
              >
                <FaGithub size={22} />
              </a>
            )}
            {project.demoLink && (
              <a 
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-brand dark:hover:text-brand transition-colors duration-200"
                aria-label="Live Demo"
              >
                <FaExternalLinkAlt size={20} />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.techStack.map((tech, i) => (
            <span 
              key={i} 
              className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-100 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="container mx-auto px-6 sm:px-12">
        <SectionHeading title="Selected Projects" subtitle="A showcase of my recent work and personal projects." />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
