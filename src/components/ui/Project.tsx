'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'ATM System',
    description: 'An ATM simulation built using TypeScript.',
    tech: 'TypeScript',
    src: '/atm.png',
    link: ""
  },
  {
    name: 'Calculator',
    description: 'A calculator app built using TypeScript and Python.',
    tech: 'TypeScript, Python',
    src: '/calculater.png',
  },
  {
    name: 'E-commerce Site',
    description: 'An online store built using Next.js.',
    tech: 'Next.js',
    src: '/ecommerce.png',
    link: "abz-commerce.vercel.app"
  },
  {
    name: 'Portfolio',
    description: 'A personal portfolio website built using Next.js.',
    tech: 'Next.js',
    src: '/portfolio.png',
  },
  {
    name: 'Blog',
    description: 'A blog platform built using Next.js.',
    tech: 'Next.js',
    src: '/blog.png',
  },
  {
    name: 'Currency Converter',
    description: 'A currency converter tool built using TypeScript.',
    tech: 'TypeScript',
    src: '/currencyconverter.png',
  },
  {
    name: 'GPT Projects',
    description: 'Various GPT projects using ChatGPT and Zapier AI actions.',
    tech: 'ChatGPT, Zapier AI',
    src: '/gptprojects.png',
  },
];

const Projects = () => {
  return (
    <div className="cursor-pointer py-16 px-4 lg:px-10 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      <h2 className="text-4xl font-extrabold text-center mb-12">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300"
          >
            <div className="flex justify-center items-center p-4">
              <Image
                src={project.src}
                alt={project.name}
                width={150}
                height={150}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 text-center">{project.name}</h3>
              <p className="text-sm mb-4 text-center">{project.description}</p>
              <div className="text-center">
                <span className="text-xs font-semibold bg-blue-500 text-white px-2 py-1 rounded">
                  {project.tech}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
