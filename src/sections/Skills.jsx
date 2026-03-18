import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { skills } from '../data/portfolioData';

const SkillCategory = ({ title, skillList, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 hover:border-brand/50 dark:hover:border-brand/50 transition-colors duration-300"
    >
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-700 pb-2">
        {title}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {skillList.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center gap-2 group"
            >
              <div className={`p-4 rounded-xl bg-slate-50 dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800 group-hover:shadow-md transition-all duration-300 ${skill.color}`}>
                <Icon size={32} />
              </div>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6 sm:px-12">
        <SectionHeading title="Technical Skills" subtitle="Technologies and tools I work with to bring ideas to life." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <SkillCategory title="Frontend Development" skillList={skills.frontend} index={1} />
          <SkillCategory title="Backend Development" skillList={skills.backend} index={2} />
          <SkillCategory title="Database" skillList={skills.database} index={3} />
          <SkillCategory title="Tools & Platforms" skillList={skills.tools} index={4} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
