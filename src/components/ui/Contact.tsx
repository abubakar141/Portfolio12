'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-gray-800 to-black text-white py-16 px-6 lg:px-32">
      <motion.h1 
        className="text-5xl font-extrabold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Get In Touch
      </motion.h1>
      
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Contact Form */}
        <motion.form
          className="bg-gray-800 p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
        
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              placeholder="Your Message"
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Contact Information */}
        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg mb-8">Feel free to reach out to me via email or through social media.</p>
          
          <div className="space-y-4">
            <motion.div
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="bg-blue-500 p-3 rounded-full">
                <i className="fas fa-envelope text-white"></i>
              </span>
              <p className="text-lg font-semibold">abubakarzohaib54@gmail.com</p>
            </motion.div>
            
            <motion.div
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="bg-blue-500 p-3 rounded-full">
                <i className="fas fa-phone-alt text-white"></i>
              </span>
              <p className="text-lg font-semibold">+92 310 3591186</p>
            </motion.div>

            <div className="flex space-x-4 mt-8">
              <motion.a
                href="#"
                className="text-white hover:text-blue-500 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fab fa-twitter text-2xl"></i>
              </motion.a>
              <motion.a
                href="#"
                className="text-white hover:text-blue-500 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </motion.a>
              <motion.a
                href="#"
                className="text-white hover:text-blue-500 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fab fa-github text-2xl"></i>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
