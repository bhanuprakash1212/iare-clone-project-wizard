
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full">
      {/* Top header with logo and accreditation */}
      <div className="bg-iare-blue text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center">
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

      {/* Main navigation */}
      <nav className="bg-white shadow">
        <div className="container mx-auto">
          <ul className="flex flex-wrap">
            <li className="py-3 px-4 hover:bg-gray-100 transition duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="py-3 px-4 hover:bg-gray-100 transition duration-300">
              <Link to="/about-us">About Us</Link>
            </li>
            <li className="py-3 px-4 hover:bg-gray-100 transition duration-300">
              <Link to="/study-with-us">Study with Us</Link>
            </li>
            <li className="py-3 px-4 hover:bg-gray-100 transition duration-300">
              <Link to="/approvals">Approvals</Link>
            </li>
            <li className="py-3 px-4 hover:bg-gray-100 transition duration-300">
              <Link to="/departments">Departments</Link>
            </li>
            <li className="py-3 px-4 hover:bg-gray-100 transition duration-300">
              <Link to="/placements">Placements</Link>
            </li>
            <li className="py-3 px-4 hover:bg-gray-100 transition duration-300">
              <Link to="/research">Research</Link>
            </li>
            <li className="py-3 px-4 hover:bg-gray-100 transition duration-300">
              <Link to="/campus-life">Campus Life</Link>
            </li>
            <li className="py-3 px-4 bg-gray-700 text-white">
              <Link to="/student-services">Student Services</Link>
            </li>
            <li className="py-3 px-4 hover:bg-gray-100 transition duration-300">
              <Link to="/iqac">IQAC</Link>
            </li>
            <li className="py-3 px-4 hover:bg-gray-100 transition duration-300">
              <Link to="/naac">NAAC</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Ticker/News bar */}
      <div className="bg-iare-darkblue text-white py-2">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="whitespace-nowrap">Campus Placements 2025 :</div>
          </div>
        </div>
      </div>
      <div className="bg-iare-yellow text-black py-2">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="whitespace-nowrap">Campus Placements 2024 :</div>
            <div className="ml-auto">MICROSOFT (2)</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
