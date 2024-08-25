"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', src: '/html.png' },
  { name: 'CSS', src: '/css.png' },
  { name: 'TypeScript', src: '/typescript.png' },
  { name: 'Python', src: '/python.png' },
  { name: 'Next.js', src: '/next.js.png' },
  { name: 'React.js', src: '/reactjs.png' },
  { name: 'ChatGPT', src: '/chatgpt.png' },
  { name: 'Zapier', src: '/zapier.png' },
];

const Skills = () => {
  return (
    <div className="py-16 px-4 lg:px-10 bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      <h2 className="text-4xl font-extrabold text-center text-white mb-12">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 justify-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9, rotate: -10 }}
            className="flex flex-col items-center bg-white p-4 rounded-xl shadow-lg transform transition-all duration-300 ease-out"
          >
            <Image
              src={skill.src}
              alt={skill.name}
              width={60}
              height={60}
              className="rounded-full"
            />
            <p className="text-center mt-4 text-lg font-bold text-gray-700">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
