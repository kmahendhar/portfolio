import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-100 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="container mx-auto px-6 sm:px-12">
        <SectionHeading title="About Me" subtitle="A brief introduction to who I am and what I do." />
        
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 relative group"
          >
            <div className="absolute inset-0 bg-brand rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 opacity-20"></div>
            <div className="relative bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {personalInfo.name}
              </h3>
              <p className="text-brand font-medium mb-6">{personalInfo.role}</p>
              <ul className="space-y-4 text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="text-brand font-bold mt-1">✓</span>
                  Passionate about building scalable web applications.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand font-bold mt-1">✓</span>
                  Eager to learn and apply modern technologies.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand font-bold mt-1">✓</span>
                  Strong foundational knowledge in Java and React.
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 text-lg text-slate-600 dark:text-slate-400 leading-relaxed space-y-6"
          >
            <p>
              I am a driven and detail-oriented <strong className="text-slate-900 dark:text-white">Java Full Stack Developer</strong> fresh out of university, looking for an opportunity to kickstart my career in the software development industry. 
            </p>
            <p>
              During my academic journey, I have cultivated a strong foundation in both frontend and backend technologies, enabling me to understand and contribute to the complete software development lifecycle. I enjoy solving complex problems, writing clean algorithms, and bringing visually appealing UI designs to life.
            </p>
            <p>
              When I'm not coding, I am usually exploring new AI tools, keeping up with the latest tech trends, or working on personal projects to further sharpen my skills.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
