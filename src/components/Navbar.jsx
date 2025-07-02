import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar absolute top-0 left-0 z-[10] w-full py-6 px-6 sm:py-10 sm:px-10 flex justify-between items-center">
      {/* Left: Logo */}
      <div className="logo flex">
        <div className=" lines flex justify-center items-center">
          <img
            className=" w-[60px] sm:w-[60px] lg:w-24 xl:w-28 p-0 m-auto drop-shadow-lg drop-shadow-gray-700"
            src="./logo1.png"
            alt="logo"
          />
        </div>
        <h3 className=" items-center text-3xl hidden sm:flex align-center sm:text-2xl md:text-3xl xl:text-[2.50rem] 2xl:text-5xl text-amber-400 text-shadow-lg text-shadow-gray-900">
          RetroRiotes
        </h3>
      </div>

      {/* Right: Desktop Navigation Links */}
      <nav className="hidden lg:flex gap-6 text-shadow-gray-900 text-gray-100 text-shadow-md font-[Aclonica] text-lg font-medium">
        <a href="#about" className="hover:text-amber-300 transition" onClick={() => setIsOpen(false)}>About</a>
        <a href="#games" className="hover:text-amber-300 transition" onClick={() => setIsOpen(false)}>Games</a>
        <a href="#testimonials" className="hover:text-amber-300 transition" onClick={() => setIsOpen(false)}>Testimonial</a>
        <a href="#contact" className="hover:text-amber-300 transition"  onClick={() => setIsOpen(false)}>Contact</a>
      </nav>

      {/* Right: Hamburger Icon on Mobile */}
      <button
        className="lg:hidden text-white text-3xl z-[20]"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? (
          <i className="ri-close-line drop-shadow-sm drop-shadow-gray-600"></i> // close icon
        ) : (
          <i className="ri-menu-line drop-shadow-sm drop-shadow-gray-700"></i> // hamburger icon
        )}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center gap-10 text-white text-2xl font-semibold z-[15]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h3 className="text-3xl sm:text-2xl md:text-4xl xl:text-5xl text-amber-400  text-shadow-md text-shadow-black">
                RetroRiotes
            </h3>

            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="hover:text-amber-400 transition"
            >
              About
            </a>
            <a
              href="#games"
              onClick={() => setIsOpen(false)}
              className="hover:text-amber-400 transition"
            >
              Games
            </a>
            <a
              href="#testimonial"
              onClick={() => setIsOpen(false)}
              className="hover:text-amber-400 transition"
            >
              Testimonial
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-amber-400 transition"
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
