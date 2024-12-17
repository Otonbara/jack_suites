import React, { useState } from 'react';
import Logo from '../assets/Logo.jpg';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-800 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Jack Suites Logo" className="h-20 w-auto" />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex flex-1 space-x-6 justify-center items-center">
          <li>
            <a
              href="#home"
              className="px-4 py-2 bg-zinc-500 text-white rounded-full hover:bg-zinc-300 transition hover:text-black font-bold"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="px-4 py-2 bg-zinc-500 text-white rounded-full hover:bg-zinc-300 transition hover:text-black font-bold"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#rooms"
              className="px-4 py-2 bg-zinc-500 text-white rounded-full hover:bg-zinc-300 transition hover:text-black font-bold"
            >
              Rooms
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="px-4 py-2 bg-zinc-500 text-white rounded-full hover:bg-zinc-300 transition hover:text-black font-bold"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="px-4 py-2 bg-zinc-500 text-white rounded-full hover:bg-zinc-300 transition hover:text-black font-bold"
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleSidebar}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="XXXXXXXXXXXXXXXXXXXXXXXXXX"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Sidebar Navigation */}
      <div
        className={`fixed top-0 left-0 h-full w-64 z-50 bg-slate-800 shadow-md transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 md:hidden`}
      >
        <div className="flex justify-between items-center p-4">
          {/* Close Button */}
          <h2 className="text-lg text-white font-bold">Menu</h2>
          <button
            className="text-white focus:outline-none"
            onClick={toggleSidebar}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="XXXXXXXXXXXXXXXXXXXXXXXXXX"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="space-y-4 px-4">
          <li>
            <a
              href="#home"
              className="block px-4 py-2 bg-zinc-500 text-white rounded-full hover:bg-zinc-300 hover:text-black transition"
              onClick={toggleSidebar}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block px-4 py-2 bg-zinc-500 text-white rounded-full hover:bg-zinc-300 hover:text-black transition"
              onClick={toggleSidebar}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#rooms"
              className="block px-4 py-2 bg-zinc-500 text-white rounded-full hover:bg-zinc-300 hover:text-black transition"
              onClick={toggleSidebar}
            >
              Rooms
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="block px-4 py-2 bg-zinc-500 text-white rounded-full hover:bg-zinc-300 hover:text-black transition"
              onClick={toggleSidebar}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block px-4 py-2 bg-zinc-500 text-white rounded-full hover:bg-zinc-300 hover:text-black transition"
              onClick={toggleSidebar}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;