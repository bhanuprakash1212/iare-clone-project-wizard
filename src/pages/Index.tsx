
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-iare-blue to-iare-darkblue text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Institute of Aeronautical Engineering</h1>
            <p className="text-xl mb-8">Excellence in Education and Research</p>
            <div className="flex justify-center space-x-4">
              <Link to="/about-us" className="bg-iare-yellow text-iare-blue font-semibold px-6 py-2 rounded hover:bg-yellow-400 transition duration-300">
                About Us
              </Link>
              <Link to="/admissions" className="bg-white text-iare-blue font-semibold px-6 py-2 rounded hover:bg-gray-100 transition duration-300">
                Admissions
              </Link>
            </div>
          </div>
        </div>
        
        <div className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-iare-blue">Our Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300">
                <h3 className="text-xl font-semibold mb-4 text-iare-blue">Academic Programs</h3>
                <p className="text-gray-700 mb-4">Explore our diverse range of undergraduate and postgraduate programs in aeronautical engineering and related fields.</p>
                <Link to="/programs" className="text-iare-teal hover:text-iare-blue font-medium">Learn More →</Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300">
                <h3 className="text-xl font-semibold mb-4 text-iare-blue">Research Initiatives</h3>
                <p className="text-gray-700 mb-4">Discover our cutting-edge research projects, collaborations, and opportunities for students to engage in innovative research.</p>
                <Link to="/research" className="text-iare-teal hover:text-iare-blue font-medium">Learn More →</Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300">
                <h3 className="text-xl font-semibold mb-4 text-iare-blue">Student Services</h3>
                <p className="text-gray-700 mb-4">Access comprehensive support services designed to enhance your academic journey and personal development.</p>
                <Link to="/student-services" className="text-iare-teal hover:text-iare-blue font-medium">Learn More →</Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-iare-blue">Latest News & Events</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold mb-2 text-iare-blue">Campus Placements 2024</h3>
                <p className="text-gray-600 mb-2">April 5, 2025</p>
                <p className="text-gray-700">Microsoft has recruited 2 students from our institute with competitive packages.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold mb-2 text-iare-blue">NAAC A++ Accreditation</h3>
                <p className="text-gray-600 mb-2">March 30, 2025</p>
                <p className="text-gray-700">IARE has been awarded A++ grade by the National Assessment and Accreditation Council.</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link to="/news" className="inline-block bg-iare-teal text-white font-semibold px-6 py-2 rounded hover:bg-teal-600 transition duration-300">
                View All News
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
