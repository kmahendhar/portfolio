import React, { useState, useEffect } from 'react';
import { BiSun, BiMoon, BiMenu, BiX } from 'react-icons/bi';
import { personalInfo } from '../data/portfolioData';

const NavLinks = ({ mobile, setIsOpen }) => {
  const links = ['About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact'];
  
  return (
    <ul className={`flex ${mobile ? 'flex-col space-y-6 text-xl' : 'flex-row space-x-8 text-sm font-medium'} items-center`}>
      {links.map((link) => (
        <li key={link}>
          <a
            href={`#${link.toLowerCase()}`}
            onClick={() => mobile && setIsOpen(false)}
            className="text-slate-600 hover:text-brand dark:text-slate-300 dark:hover:text-brand transition-colors duration-200"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
};

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm dark:shadow-slate-900/50 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-white flex items-center gap-2">
          <span className="text-brand">&lt;</span>
          {personalInfo.name.split(' ')[0]}
          <span className="text-brand">/&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks mobile={false} />
          
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition duration-200 focus:outline-none"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <BiSun size={20} /> : <BiMoon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 transition duration-200 focus:outline-none"
          >
            {darkMode ? <BiSun size={20} /> : <BiMoon size={20} />}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-700 dark:text-slate-300 focus:outline-none"
          >
            {isOpen ? <BiX size={28} /> : <BiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full h-screen bg-white dark:bg-slate-950 flex flex-col items-center pt-24 border-t border-slate-200 dark:border-slate-800">
          <NavLinks mobile={true} setIsOpen={setIsOpen} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
