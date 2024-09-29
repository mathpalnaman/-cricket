import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">© {new Date().getFullYear()} CricFolio. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="/about" className="text-gray-400 hover:text-gray-300">About Us</a>
          <a href="/services" className="text-gray-400 hover:text-gray-300">Services</a>
          <a href="/contact" className="text-gray-400 hover:text-gray-300">Contact</a>
          <a href="/tournamentregistration" className="text-gray-400 hover:text-gray-300">Register</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
