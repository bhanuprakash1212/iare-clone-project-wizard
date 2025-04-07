
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const StudentServices = () => {
  const serviceCards = [
    {
      title: "Learning and Educational Technologies",
      description: "Access cutting-edge educational technologies and digital resources to enhance your learning experience.",
      link: "/student-services/learning-technologies"
    },
    {
      title: "Experiential Learning (ExL)",
      description: "Hands-on, practical learning experiences that complement classroom education.",
      link: "/student-services/experiential-learning"
    },
    {
      title: "Self Learning",
      description: "Resources and support for self-directed learning and skill development.",
      link: "/student-services/self-learning"
    },
    {
      title: "Career Guidance and Counselling",
      description: "Professional guidance to help you make informed career decisions.",
      link: "/student-services/career-guidance"
    },
    {
      title: "Student Counselling System",
      description: "Support for your academic, personal, and emotional well-being.",
      link: "/student-services/counselling-system"
    },
    {
      title: "Makers Space",
      description: "Creative environments where you can design, experiment, and build projects.",
      link: "/student-services/makers-space"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="container mx-auto flex flex-col md:flex-row my-6 px-4">
        <div className="w-full md:w-1/4 mb-6 md:mb-0 md:pr-6">
          <Sidebar />
        </div>
        
        <div className="w-full md:w-3/4">
          <div className="bg-iare-gray p-2 mb-4">
            <nav className="text-sm">
              <ol className="list-none p-0 inline-flex">
                <li className="flex items-center">
                  <Link to="/" className="text-iare-blue hover:text-iare-teal">Home</Link>
                  <span className="mx-2">/</span>
                </li>
                <li className="flex items-center text-gray-500">Student Services</li>
              </ol>
            </nav>
          </div>
          
          <div className="mb-8">
            <img 
              src="/lovable-uploads/d946174c-1f32-4235-ac92-53616e58c2a5.png" 
              alt="Student Services Skills Banner" 
              className="w-full h-auto rounded shadow-md" 
            />
          </div>
          
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-iare-blue border-b-2 border-iare-teal pb-2 mb-4">Student Services</h1>
            
            <h2 className="text-xl font-semibold text-iare-maroon mb-4">On your journey with you</h2>
            
            <p className="mb-4">
              We're here to support you and help you develop your skills for the future.
            </p>
            
            <p className="mb-4">
              The institute strives to provide outstanding service and opportunities to students. We offer a wide variety of campus-based activities 
              designed to assist students in self learning, experiential learning, career development, innovation, creativity, entrepreneurship, 
              gathering information, making decisions about their lives, and implementing plans for their future and more.
            </p>
            
            <h2 className="text-xl font-semibold text-iare-maroon mb-4">Student Services Portal</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {serviceCards.map((card, index) => (
                <div key={index} className="bg-white border rounded shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-iare-blue mb-2">{card.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{card.description}</p>
                    <Link 
                      to={card.link} 
                      className="text-iare-teal hover:text-iare-blue transition-colors text-sm font-medium"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <h2 className="text-xl font-semibold text-iare-maroon mb-4">Have any questions or need help?</h2>
            
            <p className="mb-4">
              Dean of Student Services facilitate success and engagement opportunities for students from an early informational stage to beyond 
              graduation. Student Services encourages participation in various clubs and student chapters of professional bodies to help students understand 
              the importance of collaborative work and organizing skills, and to bring them into direct relationship with professional fields of their areas of study.
            </p>
            
            <div className="bg-iare-lightblue p-4 rounded-lg border border-iare-teal mt-8">
              <h3 className="text-lg font-semibold text-iare-blue mb-2">Contact Dean of Student Services</h3>
              <p className="mb-1"><strong>Dr. L V Narasimha Prasad</strong></p>
              <p className="mb-1">Email: dean.ss@iare.ac.in</p>
              <p>Phone: +91-9490182900</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default StudentServices;
