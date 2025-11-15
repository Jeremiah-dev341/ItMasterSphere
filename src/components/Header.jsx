import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 p-4">  
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section  */}
          <div className="m-0 p-0 h-10 md:h-12 lg:h-15 w-30 md:w-30 lg:w-60 flex items-center justify-center rounded">
            <Link to="/">
              <img src="/Logo.png" alt="Logo" className="" />
            </Link>
          </div>
        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-gray-300">Home</Link>
            </li>
            <li>  
              <Link to="/about" className="text-white hover:text-gray-300">About</Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;

