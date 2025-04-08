
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Function to check if a path is active (starts with the given path)
  const isActive = (path) => {
    return location.pathname.startsWith(path);
  };

  return (
    <header className="w-full">
      {/* Top header with logo and accreditation */}
      <div className="bg-iare-blue text-white py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div className="flex items-center mb-4 md:mb-0">
            <Link to="/" className="flex items-center">
              <img src="/ace.png" alt="IARE Logo" className="h-16" />
              <div className="ml-4">
                <div className="text-md font-bold text-iare-yellow">SVUCE</div>
                <div className="text-sm uppercase">Department OF</div>
                <div className="text-sm text-iare-yellow uppercase">Computer Science & Enginnering</div>
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
          <ul className="flex flex-col gap-5 md:flex-row md:flex-wrap">
            <li className="border-b md:border-b-0 md:border-r">
              <Link to="/" className={`block py-3 px-4 ${location.pathname === '/' ? 'bg-[#efb800] text-black' : 'hover:bg-gray-100'} transition duration-300`}>Home</Link>
            </li>
            <li className="border-b md:border-b-0 md:border-r">
              <Link to="/about-us" className={`block py-3 px-4 ${isActive('/about-us') ? 'bg-[#efb800] text-black' : 'hover:bg-gray-100'} transition duration-300`}>About Us</Link>
            </li>
            <li className="border-b md:border-b-0 md:border-r">
              <Link to="/departments" className={`block py-3 px-4 ${isActive('/departments') ? 'bg-[#efb800] text-black' : 'hover:bg-gray-100'} transition duration-300`}>Departments</Link>
            </li>
            <li className="border-b md:border-b-0 md:border-r">
              <Link to="/placements" className={`block py-3 px-4 ${isActive('/placements') ? 'bg-[#efb800] text-black' : 'hover:bg-gray-100'} transition duration-300`}>Placements</Link>
            </li>
            <li className="border-b md:border-b-0 md:border-r">
              <Link to="/campus-life" className={`block py-3 px-4 ${isActive('/campus-life') ? 'bg-[#efb800] text-black' : 'hover:bg-gray-100'} transition duration-300`}>Campus Life</Link>
            </li>
            <li className="border-b md:border-b-0 md:border-r">
              <Link to="/student-services" className={`block py-3 px-4 ${isActive('/student-services') ? 'bg-[#efb800] text-black' : 'hover:bg-gray-100'} transition duration-300`}>Student Services</Link>
            </li>
            <li>
              <Link to="/naac" className={`block py-3 px-4 ${isActive('/naac') ? 'bg-[#efb800] text-black' : 'hover:bg-gray-100'} transition duration-300`}>NAAC</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
