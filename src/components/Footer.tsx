
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-iare-darkblue text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>Institute of Aeronautical Engineering</p>
            <p>Dundigal, Hyderabad - 500043</p>
            <p>Telangana, India</p>
            <p>Email: info@iare.ac.in</p>
            <p>Phone: +91-40-29705852, 29705853</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2"><a href="/about-us" className="hover:text-iare-yellow">About Us</a></li>
              <li className="mb-2"><a href="/admissions" className="hover:text-iare-yellow">Admissions</a></li>
              <li className="mb-2"><a href="/departments" className="hover:text-iare-yellow">Departments</a></li>
              <li className="mb-2"><a href="/placements" className="hover:text-iare-yellow">Placements</a></li>
              <li className="mb-2"><a href="/contact" className="hover:text-iare-yellow">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-iare-yellow">Facebook</a>
              <a href="#" className="hover:text-iare-yellow">Twitter</a>
              <a href="#" className="hover:text-iare-yellow">LinkedIn</a>
              <a href="#" className="hover:text-iare-yellow">Instagram</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Institute of Aeronautical Engineering. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
