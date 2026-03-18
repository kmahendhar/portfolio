import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';
import { education } from '../data/portfolioData';

const TimelineItem = ({ data, index, isEducation }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 md:pl-0"
    >
      <div className="md:hidden absolute left-0 top-1 w-4 h-4 rounded-full bg-brand border-4 border-white dark:border-slate-900 z-10"></div>
      
      <div className="md:grid md:grid-cols-5 md:gap-8 items-center relative">
        {/* Timeline dot for desktop */}
        <div className="hidden md:block absolute left-1/2 -ml-2 top-1/2 -mt-2 w-4 h-4 rounded-full bg-brand border-4 border-white dark:border-slate-900 z-10"></div>
        
        {/* Left side (Year) */}
        <div className="md:col-span-2 md:text-right mb-2 md:mb-0">
          <span className="inline-block px-4 py-1 rounded-full bg-brand/10 text-brand font-bold text-sm tracking-wide">
            {data.year}
          </span>
        </div>
        
        {/* Right side (Content) */}
        <div className="md:col-span-3 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow duration-300 relative group">
          <div className="absolute top-6 -left-3 md:-left-3 w-6 h-6 bg-white dark:bg-slate-800 border-t border-l border-slate-200 dark:border-slate-700 transform -rotate-45 hidden md:block"></div>
          
          <div className="flex items-center gap-3 mb-2">
            <div className="text-slate-400 dark:text-slate-500">
              {isEducation ? <FaGraduationCap size={20} /> : <FaBriefcase size={20} />}
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {data.degree || data.role}
            </h3>
          </div>
          
          <p className="text-slate-600 dark:text-slate-400 font-medium">
            {data.institution || data.company}
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-500 mt-1">
            {data.location}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6 sm:px-12">
        <SectionHeading title="Education & Experience" subtitle="My academic journey and professional experience." />
        
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-slate-200 dark:bg-slate-700 md:left-1/2 md:-ml-[1px]"></div>
          
          <div className="space-y-12">
            {education.map((item, index) => (
              <TimelineItem key={item.id} data={item} index={index} isEducation={true} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
