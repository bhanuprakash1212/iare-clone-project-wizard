
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-iare-darkblue text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-iare-yellow pb-2">Contact Us</h3>
            <div className="flex items-start mb-2">
              <MapPin size={18} className="mt-1 mr-2 flex-shrink-0" />
              <p>
                Institute of Aeronautical Engineering<br />
                Dundigal, Hyderabad - 500043<br />
                Telangana, India
              </p>
            </div>
            <div className="flex items-center mb-2">
              <Mail size={18} className="mr-2 flex-shrink-0" />
              <p>info@iare.ac.in</p>
            </div>
            <div className="flex items-center">
              <Phone size={18} className="mr-2 flex-shrink-0" />
              <p>+91-40-29705852, 29705853</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-iare-yellow pb-2">Quick Links</h3>
            <ul>
              <li className="mb-2"><Link to="/about-us" className="hover:text-iare-yellow transition-colors">About Us</Link></li>
              <li className="mb-2"><Link to="/admissions" className="hover:text-iare-yellow transition-colors">Admissions</Link></li>
              <li className="mb-2"><Link to="/departments" className="hover:text-iare-yellow transition-colors">Departments</Link></li>
              <li className="mb-2"><Link to="/placements" className="hover:text-iare-yellow transition-colors">Placements</Link></li>
              <li className="mb-2"><Link to="/research" className="hover:text-iare-yellow transition-colors">Research</Link></li>
              <li className="mb-2"><Link to="/student-services" className="hover:text-iare-yellow transition-colors">Student Services</Link></li>
              <li className="mb-2"><Link to="/contact" className="hover:text-iare-yellow transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-iare-yellow pb-2">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://facebook.com" className="bg-white text-iare-darkblue p-2 rounded-full hover:bg-iare-yellow transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="bg-white text-iare-darkblue p-2 rounded-full hover:bg-iare-yellow transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" className="bg-white text-iare-darkblue p-2 rounded-full hover:bg-iare-yellow transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com" className="bg-white text-iare-darkblue p-2 rounded-full hover:bg-iare-yellow transition-colors">
                <Instagram size={20} />
              </a>
            </div>
            
            <h4 className="text-lg font-semibold mb-2">Location</h4>
            <div className="h-40 bg-gray-700 mb-2 rounded overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.6261653388885!2d78.42557951487804!3d17.475111205491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8fe0c893d7e5%3A0x47b4f6cb5d6784c9!2sInstitute%20of%20Aeronautical%20Engineering!5e0!3m2!1sen!2sin!4v1649933849527!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="IARE Location"
              ></iframe>
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
