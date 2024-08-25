"use client";
import React, { useState } from 'react';
import { ModeToggle } from './ModeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="  fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-3xl font-black">
              AbuBakar
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="/" className="text-xl font-semibold nav">
              Home
            </a>
            <a href="/" className="text-xl font-semibold nav">
              About
            </a>
            <a href="/" className="text-xl font-semibold nav">
              Work
            </a>
            <a href="/" className="text-xl font-semibold nav">
              Contact
            </a>
            <ModeToggle />
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-3xl font-black focus:outline-none">
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="space-y-4 px-4 pt-4 pb-6">
            <li>
              <a href="/" className="text-xl font-semibold nav block">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="text-xl font-semibold nav block">
                About
              </a>
            </li>
            <li>
              <a href="/" className="text-xl font-semibold nav block">
                Work
              </a>
            </li>
            <li>
              <a href="/" className="text-xl font-semibold nav block">
                Contact
              </a>
            </li>
            <li>
              <ModeToggle />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
