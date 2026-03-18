import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';
import { personalInfo } from '../data/portfolioData';

const ContactInfoItem = ({ icon: Icon, title, content, link }) => (
  <div className="flex items-start gap-4">
    <div className="mt-1 w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center flex-shrink-0">
      <Icon size={20} />
    </div>
    <div>
      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{title}</h4>
      {link ? (
        <a href={link} className="text-slate-600 dark:text-slate-400 hover:text-brand dark:hover:text-brand transition-colors">
          {content}
        </a>
      ) : (
        <p className="text-slate-600 dark:text-slate-400">{content}</p>
      )}
    </div>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 sm:px-12">
        <SectionHeading title="Get In Touch" subtitle="Have a question or want to work together? Leave a message!" />
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700">
          
          {/* Left Side - Contact Info */}
          <div className="lg:col-span-2 bg-slate-50 dark:bg-slate-900 p-10 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-8">
              <ContactInfoItem 
                icon={FaMapMarkerAlt} 
                title="Location" 
                content={personalInfo.location} 
              />
              <ContactInfoItem 
                icon={FaPhoneAlt} 
                title="Phone" 
                content={personalInfo.phone} 
                link={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
              />
              <ContactInfoItem 
                icon={FaEnvelope} 
                title="Email" 
                content={personalInfo.email} 
                link={`mailto:${personalInfo.email}`}
              />
            </div>
          </div>
          
          {/* Right Side - Contact Form */}
          <div className="lg:col-span-3 p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent text-slate-900 dark:text-white transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent text-slate-900 dark:text-white transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent text-slate-900 dark:text-white transition-all resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl text-white font-bold flex items-center justify-center gap-2 transition-all shadow-lg ${isSuccess ? 'bg-green-500 hover:bg-green-600 shadow-green-500/30' : 'bg-brand hover:bg-purple-600 shadow-brand/30'}`}
              >
                {isSubmitting ? (
                  <span className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                ) : isSuccess ? (
                  "Message Sent Successfully!"
                ) : (
                  <>Send Message <FaPaperPlane /></>
                )}
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
