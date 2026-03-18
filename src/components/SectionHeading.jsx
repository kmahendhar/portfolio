import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ title, subtitle }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <div className="w-24 h-1 bg-brand mx-auto rounded-full mb-6"></div>
      )}
      {subtitle && (
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
