import React, { useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="min-h-[100vh] bg-cover bg-center flex flex-col justify-center items-center text-center text-white px-4 pb-6 relative">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/hero.jpg)" }}
      >
        <div className="absolute bottom-0 left-0 w-full h-12 sm:h-16 md:h-20 lg:h-24 bg-gradient-to-b from-transparent to-white opacity-100"></div>
      </div>

      {/* Header */}
      <header className="w-full top-0 left-0 bg-transparent p-4 absolute">
        <div className="container mx-auto flex justify-between items-center relative">
          {/* Logo */}
          <div className="m-0 p-0 h-10 md:h-12 lg:h-15 w-30 md:w-30 lg:w-60 flex items-center justify-center rounded">
            <Link to="/">
              <img src="/Logo.png" alt="Logo" className="" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex space-x-6 text-[12px] md:text-[14px] lg:text-[16px] lg:space-x-12 md:space-x-8 md:mr-5 lg:mr-10 ">
            <Link to="/" className="text-white hover:text-orange-300">Home</Link>
            <Link to="/about" className="text-white hover:text-orange-300">About</Link>
            <Link to="/features" className="text-white hover:text-orange-300">Features</Link>
            <Link to="/contact" className="text-white hover:text-orange-300">Contact</Link>
          </nav>

          {/* Hamburger for Mobile */}
          <button
            className="sm:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="absolute top-full right-0 mt-2 w-40 bg-black text-orange-900 flex flex-col items-start p-2 shadow-lg sm:hidden z-20">
              <Link to="/" className="py-2 px-4 w-full hover:bg-orange-100" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/about" className="py-2 px-4 w-full hover:bg-orange-100" onClick={() => setMenuOpen(false)}>About</Link>
              <Link to="/features" className="py-2 px-4 w-full hover:bg-orange-100" onClick={() => setMenuOpen(false)}>Features</Link>
              <Link to="/contact" className="py-2 px-4 w-full hover:bg-orange-100" onClick={() => setMenuOpen(false)}>Contact</Link>
            </div>
          )}
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl mt-20 sm:mt-28">
        <h1 className="text-4xl font-bold mb-4 [font-family:'Segoi UI', sans-serif] text-[35px] md:text-[37px] lg:text-[40px]">
          Welcome to ITMasterSphere
        </h1>
        <p className="text-lg text-white mb-8 text-[12px] md:text-[14px] lg:text-[16px]">
          We are a digital hub that brings together skilled IT service providers under one roof, making it easy for businesses to find the right expert. Instead of searching everywhere, companies come to our platform, <span className="text-white">explore</span> verified specialists, and choose the perfect match for their needs.
        </p>
        <button className="bg-[#FF5A09] hover:bg-orange-600 text-white px-6 py-3 rounded text-[12px] md:text-[14px] lg:text-[16px]">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
