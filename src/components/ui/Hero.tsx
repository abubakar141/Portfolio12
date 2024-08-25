"use client";
import React from 'react';
import abz from '/public/abz.png';
import Image from 'next/image';
import { Button } from './button';
import { motion } from 'framer-motion';
import Typewriter from "typewriter-effect"
const Hero = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start lg:justify-between px-4 lg:px-10 py-10">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="mt-6 lg:mt-0 lg:w-1/2"
      >
        <br /><br /><br /><br /><br />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
          I&apos;m Abu Bakar
        </h1>
        <br />
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
       <Typewriter 
       options={{
        strings: ["A Frontend Developer", "Custom GPT Creater", "Ui Ux Designer", "Graphic Designer"],
        autoStart: true,
        loop: true,
        delay: 100,
        cursor: '|',
 
       }}
       />
        </h1>

        <p className="leading-7 mt-4 sm:mt-6">
          I&apos;m Abu Bakar, Software Wala. I am a 9-year-old Frontend Web Developer. <br />
          I created so many GPTs, and I am in Batch 51, Quarter 3 at PIAIC. <br />
          I have also created many websites like Portfolios, Blogs, and E-commerce sites. <br />
          My skills include HTML, CSS, TS, Next.js, React.js, Python, GPT, Zapier, and more.
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.9 }}
          className="mt-6"
        >
          <Button>
            Hire Me
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="lg:w-1/2 lg:ml-10"
      >
        <Image
          src={abz}
          alt="Hero Image"
          className="w-full sm:w-3/4 float-right md:w-2/3 lg:w-96 rounded-2xl"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
