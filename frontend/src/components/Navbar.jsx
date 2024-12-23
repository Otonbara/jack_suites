import React, { useState } from 'react';
import Logo from '../assets/Logo.jpg';
import { Link } from 'react-router-dom';

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
            <Link
              to="/home"
              className="px-4 py-2 bg-zinc-500 text-white rounded-full hover:bg-zinc-300 transition hover:text-black font-bold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="px-4 py-2 bg-zinc-500 text-white rounded-full hover:bg-zinc-300 transition hover:text-black font-bold"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/rooms"
              className="px-4 py-2 bg-zinc-500 text-white rounded-full hover:bg-zinc-300 transition hover:text-black font-bold"
            >
              Rooms
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="px-4 py-2 bg-zinc-500 text-white rounded-full hover:bg-zinc-300 transition hover:text-black font-bold"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contactus"
              className="px-4 py-2 bg-zinc-500 text-white rounded-full hover:bg-zinc-300 transition hover:text-black font-bold"
            >
              Contact Us
            </Link>
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
            <Link
              to="/home"
              className="block px-4 py-2 bg-zinc-500 text-white rounded-full hover:bg-zinc-300 hover:text-black transition"
              onClick={toggleSidebar}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block px-4 py-2 bg-zinc-500 text-white rounded-full hover:bg-zinc-300 hover:text-black transition"
              onClick={toggleSidebar}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/rooms"
              className="block px-4 py-2 bg-zinc-500 text-white rounded-full hover:bg-zinc-300 hover:text-black transition"
              onClick={toggleSidebar}
            >
              Rooms
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="block px-4 py-2 bg-zinc-500 text-white rounded-full hover:bg-zinc-300 hover:text-black transition"
              onClick={toggleSidebar}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contactus"
              className="block px-4 py-2 bg-zinc-500 text-white rounded-full hover:bg-zinc-300 hover:text-black transition"
              onClick={toggleSidebar}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;