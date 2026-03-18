import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload } from 'react-icons/fa';
import { personalInfo, certificates } from '../data/portfolioData';

const Hero = () => {
  // We'll use the first certificate as the CV for demonstration, or link to a generic # if not available.
  const cvLink = certificates.length > 0 ? certificates[0].link : "#";

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 px-6 sm:px-12">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <p className="text-brand font-semibold tracking-wide uppercase mb-4">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            {personalInfo.name}
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-slate-600 dark:text-slate-300 mb-6">
            {personalInfo.role}
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0">
            {personalInfo.summary}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#projects" 
              className="px-8 py-3 rounded-full bg-brand text-white font-medium hover:bg-purple-600 transition-colors duration-300 flex items-center gap-2 shadow-lg shadow-brand/30 w-full sm:w-auto justify-center"
            >
              View Work <FaArrowRight />
            </a>
            <a 
              href={cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:border-brand hover:text-brand dark:hover:border-brand dark:hover:text-brand transition-colors duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Resume <FaDownload />
            </a>
          </div>
        </motion.div>

        {/* Profile Image - Placeholder using dynamic gradient and glassmorphism */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand to-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full border-4 border-white/10 dark:border-slate-800/50 backdrop-blur-sm overflow-hidden flex items-center justify-center bg-slate-200 dark:bg-slate-800 shadow-2xl">
              {personalInfo.image ? (
                <img 
                  src={personalInfo.image} 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-6xl md:text-8xl font-bold text-slate-400 dark:text-slate-600">
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </span>
              )}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
