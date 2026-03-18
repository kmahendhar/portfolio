import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 dark:bg-slate-900 py-8 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        <div className="mb-4 md:mb-0">
          <p className="text-slate-600 dark:text-slate-400 font-medium tracking-wide">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>

        <div className="flex space-x-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
            aria-label="Email"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
