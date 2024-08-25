'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaLinkedin, FaYoutube, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-8 px-4 lg:px-10">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <motion.div
          className="text-lg font-bold mb-6 lg:mb-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          &copy; 2024 Abu Bakar Software Wala. All Rights Reserved.
        </motion.div>
        <div className="flex space-x-6">
          <motion.a
            href="https://wa.me/your-number-here" // Replace with your WhatsApp link
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-xl hover:text-green-500 transition-colors duration-300"
          >
            <FaWhatsapp />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/abu-bakar-software-wala-b462b129b/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-xl hover:text-blue-500 transition-colors duration-300"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://www.youtube.com/@abubakarsoftware"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-xl hover:text-red-500 transition-colors duration-300"
          >
            <FaYoutube />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/profile.php?id=100095211904951"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-xl hover:text-blue-600 transition-colors duration-300"
          >
            <FaFacebook />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
