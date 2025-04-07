
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const upcomingEvents = [
    {
      date: "April 15, 2025",
      title: "National Conference on Aerospace Technologies",
      description: "A two-day conference featuring speakers from leading aerospace organizations."
    },
    {
      date: "April 20, 2025",
      title: "Campus Recruitment Drive - Infosys",
      description: "Infosys will be conducting recruitment for 2025 passing out students."
    },
    {
      date: "May 5, 2025",
      title: "Tech Fest 2025",
      description: "Annual technical festival featuring competitions, workshops, and exhibitions."
    }
  ];

  const departments = [
    { name: "Aeronautical Engineering", code: "AE" },
    { name: "Computer Science & Engineering", code: "CSE" },
    { name: "Information Technology", code: "IT" },
    { name: "Electronics & Communication Engineering", code: "ECE" },
    { name: "Electrical & Electronics Engineering", code: "EEE" },
    { name: "Mechanical Engineering", code: "ME" },
    { name: "Civil Engineering", code: "CE" },
    { name: "Computer Science & Business Systems", code: "CSBS" }
  ];

  const news = [
    {
      date: "April 5, 2025",
      title: "Microsoft Recruitment Success",
      content: "Microsoft has recruited 5 students from our institute with competitive packages."
    },
    {
      date: "March 30, 2025",
      title: "NAAC A++ Accreditation",
      content: "IARE has been awarded A++ grade by the National Assessment and Accreditation Council."
    },
    {
      date: "March 25, 2025",
      title: "Research Grant Awarded",
      content: "Department of Aeronautical Engineering receives ₹1.5 crore research grant from DRDO."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-iare-blue to-iare-darkblue text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Institute of Aeronautical Engineering</h1>
            <p className="text-xl mb-8">Excellence in Education and Research Since 2000</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/about-us" className="bg-iare-yellow text-iare-blue font-semibold px-6 py-2 rounded hover:bg-yellow-400 transition duration-300">
                About Us
              </Link>
              <Link to="/admissions" className="bg-white text-iare-blue font-semibold px-6 py-2 rounded hover:bg-gray-100 transition duration-300">
                Admissions
              </Link>
              <Link to="/placements" className="bg-iare-teal text-white font-semibold px-6 py-2 rounded hover:bg-teal-600 transition duration-300">
                Placements
              </Link>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="py-10 bg-iare-gray">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-white p-4 rounded shadow-sm">
                <div className="text-3xl font-bold text-iare-blue mb-2">25+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <div className="text-3xl font-bold text-iare-blue mb-2">8</div>
                <div className="text-gray-600">Academic Departments</div>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <div className="text-3xl font-bold text-iare-blue mb-2">350+</div>
                <div className="text-gray-600">Faculty Members</div>
              </div>
              <div className="bg-white p-4 rounded shadow-sm">
                <div className="text-3xl font-bold text-iare-blue mb-2">95%</div>
                <div className="text-gray-600">Placement Rate</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Services Section */}
        <div className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-iare-blue">Our Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300 border-t-4 border-iare-blue">
                <h3 className="text-xl font-semibold mb-4 text-iare-blue">Academic Programs</h3>
                <p className="text-gray-700 mb-4">Explore our diverse range of undergraduate and postgraduate programs in aeronautical engineering and related fields.</p>
                <Link to="/programs" className="text-iare-teal hover:text-iare-blue font-medium flex items-center">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300 border-t-4 border-iare-teal">
                <h3 className="text-xl font-semibold mb-4 text-iare-blue">Research Initiatives</h3>
                <p className="text-gray-700 mb-4">Discover our cutting-edge research projects, collaborations, and opportunities for students to engage in innovative research.</p>
                <Link to="/research" className="text-iare-teal hover:text-iare-blue font-medium flex items-center">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300 border-t-4 border-iare-yellow">
                <h3 className="text-xl font-semibold mb-4 text-iare-blue">Student Services</h3>
                <p className="text-gray-700 mb-4">Access comprehensive support services designed to enhance your academic journey and personal development.</p>
                <Link to="/student-services" className="text-iare-teal hover:text-iare-blue font-medium flex items-center">
                  Learn More <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Departments Section */}
        <div className="py-12 bg-iare-gray">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-iare-blue">Academic Departments</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {departments.map((dept, index) => (
                <div key={index} className="bg-white p-4 rounded shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="bg-iare-lightblue rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <span className="font-bold text-iare-blue">{dept.code}</span>
                  </div>
                  <h3 className="text-sm font-medium">{dept.name}</h3>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link to="/departments" className="inline-block bg-iare-blue text-white font-semibold px-6 py-2 rounded hover:bg-blue-800 transition duration-300">
                View All Departments
              </Link>
            </div>
          </div>
        </div>
        
        {/* Events and News Section */}
        <div className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-iare-blue border-b-2 border-iare-teal pb-2">Upcoming Events</h2>
                
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="mb-5 border-b border-gray-200 pb-5 last:border-b-0 last:pb-0">
                    <div className="text-sm text-gray-500 mb-1">{event.date}</div>
                    <h3 className="font-semibold text-lg mb-1">{event.title}</h3>
                    <p className="text-gray-600 text-sm">{event.description}</p>
                  </div>
                ))}
                
                <Link to="/events" className="inline-block text-iare-teal hover:text-iare-blue font-medium mt-4">
                  View All Events
                </Link>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6 text-iare-blue border-b-2 border-iare-yellow pb-2">Latest News</h2>
                
                {news.map((item, index) => (
                  <div key={index} className="mb-5 border-b border-gray-200 pb-5 last:border-b-0 last:pb-0">
                    <div className="text-sm text-gray-500 mb-1">{item.date}</div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.content}</p>
                  </div>
                ))}
                
                <Link to="/news" className="inline-block text-iare-teal hover:text-iare-blue font-medium mt-4">
                  View All News
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-iare-teal text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Start Your Journey with IARE</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Join one of the premier engineering institutions in India and build a successful career.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/admissions" className="bg-white text-iare-teal font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition duration-300">
                Apply Now
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-iare-teal transition duration-300">
                Contact Us
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
