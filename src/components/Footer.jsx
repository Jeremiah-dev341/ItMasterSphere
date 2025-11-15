import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-700 pb-10">
        <h1 className="text-2xl font-bold text-white mb-6 md:mb-0">
          ItMaster<span className="text-orange-500">Sphere</span>
        </h1>
        <div className="flex space-x-6 text-gray-400 text-xl text-[12px] md:text-[14px] lg:text-[16px] items-center justify-center">
          <a href="#" className="hover:text-orange-500 transition"><FaInstagram /></a>
          <a href="#" className="hover:text-orange-500 transition"><FaFacebookF /></a>
          <a href="#" className="hover:text-orange-500 transition"><FaTwitter /></a>
          <a href="#" className="hover:text-orange-500 transition"><FaGithub /></a>
          <a href="#" className="hover:text-orange-500 transition"><FaLinkedinIn /></a>
        </div>
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 mt-10 text-sm text-center">
        {/* Services */}
        <div>
          <h3 className="font-semibold text-white mb-4 text-[14px] md:text-[16px] lg:text-[18px] text-center">Services</h3>
          <ul className="space-y-2 text-[12px] md:text-[14px] lg:text-[16px]">
            <li><a href="#" className="hover:text-orange-400">Web Development</a></li>
            <li><a href="#" className="hover:text-orange-400">App Design</a></li>
            <li><a href="#" className="hover:text-orange-400">Cloud Solutions</a></li>
            <li><a href="#" className="hover:text-orange-400">Tech Consulting</a></li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h3 className="font-semibold text-white mb-4 text-[14px] md:text-[16px] lg:text-[18px] text-center">Features</h3>
          <ul className="space-y-2 text-[12px] md:text-[14px] lg:text-[16px] text-center">
            <li><a href="#" className="hover:text-orange-400">Project Management</a></li>
            <li><a href="#" className="hover:text-orange-400">Real-time Support</a></li>
            <li><a href="#" className="hover:text-orange-400">Analytics </a></li>
            <li><a href="#" className="hover:text-orange-400">Team Collaboration</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold text-white mb-4 text-[14px] md:text-[16px] lg:text-[18px] text-center">Resources</h3>
          <ul className="space-y-2 text-[12px] md:text-[14px] lg:text-[16px] text-center">
            <li><a href="#" className="hover:text-orange-400">Documentation</a></li>
            <li><a href="#" className="hover:text-orange-400">Tutorials</a></li>
            <li><a href="#" className="hover:text-orange-400">FAQs</a></li>
            <li><a href="#" className="hover:text-orange-400">Community</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-white mb-4 text-[14px] md:text-[16px] lg:text-[18px] text-center">Company</h3>
          <ul className="space-y-2 text-[12px] md:text-[14px] lg:text-[16px] text-center">
            <li><a href="#" className="hover:text-orange-400">About Us</a></li>
            <li><a href="#" className="hover:text-orange-400">Careers</a></li>
            <li><a href="#" className="hover:text-orange-400">Contact</a></li>
            <li><a href="#" className="hover:text-orange-400">News</a></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="font-semibold text-white mb-4 text-[14px] md:text-[16px] lg:text-[18px] text-center">Connect</h3>
          <ul className="space-y-2 text-[12px] md:text-[14px] lg:text-[16px]  text-center">
            <li><a href="#" className="hover:text-orange-400">LinkedIn</a></li>
            <li><a href="#" className="hover:text-orange-400">Twitter</a></li>
            <li><a href="#" className="hover:text-orange-400">GitHub</a></li>
            <li><a href="#" className="hover:text-orange-400">Email Us</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 text-center text-sm text-white border-t border-gray-800 pt-6 text-[12px] md:text-[14px] lg:text-[16px]">
        © ItMasterSphere {new Date().getFullYear()} — All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
