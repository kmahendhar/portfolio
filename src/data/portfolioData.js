import React from 'react';
import { BiCodeAlt, BiCollection, BiLogoJavascript } from 'react-icons/bi';
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiSpringboot, SiHibernate, SiMysql, SiPostman, SiJavascript, SiTailwindcss, SiBootstrap } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

import profileImg from '../assets/profile.jpg';

export const personalInfo = {
  name: "Mahendhar Kalyanapu",
  role: "Java Full Stack Developer",
  location: "Hyderabad, Uppal, India",
  phone: "+91 9391178550",
  email: "kalyanapumahendhar@gmail.com",
  github: "https://github.com/kmahendhar",
  linkedin: "https://www.linkedin.com/in/mahendhar-kalyanapu-a0b314339",
  image: profileImg,
  summary: "Java Full Stack Developer with knowledge in React, Spring Boot, and MySQL. Looking for an opportunity to build scalable applications and grow in software development."
};

export const skills = {
  frontend: [
    { name: "ReactJS", icon: FaReact, color: "text-blue-500" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-600" },
    { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-600" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" }
  ],
  backend: [
    { name: "Java", icon: FaJava, color: "text-red-500" },
    { name: "Spring Boot", icon: SiSpringboot, color: "text-green-500" },
    { name: "Hibernate", icon: SiHibernate, color: "text-yellow-600" },
    { name: "JDBC", icon: BiCodeAlt, color: "text-gray-500" },
    { name: "Collections", icon: BiCollection, color: "text-gray-500" },
  ],
  database: [
    { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
    { name: "SQL", icon: SiMysql, color: "text-blue-500" },
    { name: "SQL", icon: SiMysql, color: "text-blue-500" }
  ],
  tools: [
    { name: "Git", icon: FaGithub, color: "text-gray-800 dark:text-gray-200" },
    { name: "Postman", icon: SiPostman, color: "text-orange-500" },
    { name: "VS Code", icon: VscVscode, color: "text-blue-500" }
  ]
};

export const projects = [
  {
    id: 1,
    title: "Travel Planner Application",
    description: "Built using React + Spring Boot. Features include itinerary planning, responsive UI, and backend integration.",
    techStack: ["React", "Spring Boot", "MySQL", "Tailwind CSS"],
    githubLink: "https://github.com/kmahendhar/travel-planner-app",
    demoLink: "",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=800&h=500"
  },
  {
    id: 2,
    title: "To-Do App",
    description: "Clean UI application to manage day-to-day tasks. Features include Add, Edit, Delete, and Mark tasks.",
    techStack: ["HTML", "CSS", "JavaScript", "React"],
    githubLink: "https://github.com/kmahendhar",
    demoLink: "",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800&h=500"
  }
];

export const education = [
  {
    id: 1,
    degree: "Pursuing MCA",
    institution: "Sree Chaitanya Technical Campus",
    location: "Hyderabad",
    year: "Present"
  },
  {
    id: 2,
    degree: "Bachelor of Computer Applications",
    institution: "Sathavahana University",
    location: "Karimnagar",
    year: "2024"
  }
];

export const certificates = [
  {
    id: 1,
    title: "Java Full Stack Certificate",
    issuer: "ExcelR Ed Tech Training Institute",
    link: "https://drive.google.com/file/d/1cuupMHXuVvOETmRDcYhL4bmcU5j4vtc-/view"
  },
  {
    id: 2,
    title: "Internship Certificate",
    issuer: "Ai Variant pvt Ltd Company",
    link: "https://drive.google.com/file/d/1Iu4cwomSeIYVQELj_PYeTosBiPv9KaWL/view"
  }
];
