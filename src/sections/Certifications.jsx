import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';
import { certificates } from '../data/portfolioData';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-slate-100 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="container mx-auto px-6 sm:px-12">
        <SectionHeading title="Certifications" subtitle="Professional credentials and online coursework." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 hover:border-brand dark:hover:border-brand group transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-brand/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-6">
                  <FaCertificate size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex-grow">
                  {cert.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 mb-6 font-medium">
                  Issued by: {cert.issuer}
                </p>
                
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand font-medium hover:text-purple-600 transition-colors duration-200"
                >
                  View Certificate <FaExternalLinkAlt size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
