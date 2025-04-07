
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="w-full">
      {/* Top header with logo and accreditation */}
      <div className="bg-iare-blue text-white py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div className="flex items-center mb-4 md:mb-0">
            <Link to="/" className="flex items-center">
              <img src="/iare-logo.svg" alt="IARE Logo" className="h-16" />
              <div className="ml-4">
                <div className="text-2xl font-bold text-iare-yellow">IARE</div>
                <div className="text-xl">INSTITUTE OF</div>
                <div className="text-xl text-iare-yellow">AERONAUTICAL ENGINEERING</div>
              </div>
            </Link>
          </div>
          <div className="flex items-center">
            <img src="/naac-logo.svg" alt="NAAC Accreditation" className="h-12 mx-4" />
            <img src="/25years-logo.svg" alt="25 Years" className="h-16" />
          </div>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden bg-white border-b">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <span className="font-semibold">Menu</span>
          <button onClick={toggleMobileMenu} className="p-2 focus:outline-none">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Main navigation */}
      <nav className={`bg-white shadow ${mobileMenuOpen ? 'block' : 'hidden'} md:block`}>
        <div className="container mx-auto">
          <ul className="flex flex-col md:flex-row md:flex-wrap">
            <li className="border-b md:border-b-0 md:border-r">
              <Link to="/" className="block py-3 px-4 hover:bg-gray-100 transition duration-300">Home</Link>
            </li>
            <li className="border-b md:border-b-0 md:border-r">
              <Link to="/about-us" className="block py-3 px-4 hover:bg-gray-100 transition duration-300">About Us</Link>
            </li>
            <li className="border-b md:border-b-0 md:border-r">
              <Link to="/study-with-us" className="block py-3 px-4 hover:bg-gray-100 transition duration-300">Study with Us</Link>
            </li>
            <li className="border-b md:border-b-0 md:border-r">
              <Link to="/approvals" className="block py-3 px-4 hover:bg-gray-100 transition duration-300">Approvals</Link>
            </li>
            <li className="border-b md:border-b-0 md:border-r">
              <Link to="/departments" className="block py-3 px-4 hover:bg-gray-100 transition duration-300">Departments</Link>
            </li>
            <li className="border-b md:border-b-0 md:border-r">
              <Link to="/placements" className="block py-3 px-4 hover:bg-gray-100 transition duration-300">Placements</Link>
            </li>
            <li className="border-b md:border-b-0 md:border-r">
              <Link to="/research" className="block py-3 px-4 hover:bg-gray-100 transition duration-300">Research</Link>
            </li>
            <li className="border-b md:border-b-0 md:border-r">
              <Link to="/campus-life" className="block py-3 px-4 hover:bg-gray-100 transition duration-300">Campus Life</Link>
            </li>
            <li className="border-b md:border-b-0 md:border-r">
              <Link to="/student-services" className="block py-3 px-4 bg-gray-700 text-white">Student Services</Link>
            </li>
            <li className="border-b md:border-b-0 md:border-r">
              <Link to="/iqac" className="block py-3 px-4 hover:bg-gray-100 transition duration-300">IQAC</Link>
            </li>
            <li>
              <Link to="/naac" className="block py-3 px-4 hover:bg-gray-100 transition duration-300">NAAC</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Ticker/News bar */}
      <div className="bg-iare-darkblue text-white py-2">
        <div className="container mx-auto px-4 overflow-hidden">
          <div className="whitespace-nowrap overflow-hidden relative">
            <div className="inline-block animate-[marquee_20s_linear_infinite]">
              <span className="mr-8">Campus Placements 2025 : MICROSOFT (5) | AMAZON (8) | GOOGLE (3) | ACCENTURE (45) | TCS (120) | WIPRO (98) | COGNIZANT (65)</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-iare-yellow text-black py-2">
        <div className="container mx-auto px-4 overflow-hidden">
          <div className="whitespace-nowrap overflow-hidden relative">
            <div className="inline-block animate-[marquee_20s_linear_infinite]">
              <span className="mr-8">Campus Placements 2024 : MICROSOFT (2) | AMAZON (5) | GOOGLE (1) | ACCENTURE (42) | TCS (105) | WIPRO (87) | COGNIZANT (58)</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
