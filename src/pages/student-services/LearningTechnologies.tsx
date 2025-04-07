
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

const LearningTechnologies = () => {
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
                <li className="flex items-center">
                  <Link to="/student-services" className="text-iare-blue hover:text-iare-teal">Student Services</Link>
                  <span className="mx-2">/</span>
                </li>
                <li className="flex items-center text-gray-500">Learning and Educational Technologies</li>
              </ol>
            </nav>
          </div>
          
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-iare-blue border-b-2 border-iare-teal pb-2 mb-4">Learning and Educational Technologies</h1>
            
            <p className="mb-6">
              The Institute of Aeronautical Engineering is committed to providing cutting-edge educational technologies to enhance the learning experience of our students.
              We believe that technology, when used effectively, can transform the educational landscape and prepare students for the challenges of the future.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border rounded shadow-sm p-5">
                <h2 className="text-xl font-semibold text-iare-maroon mb-4">Digital Learning Resources</h2>
                
                <p className="mb-4">
                  We provide access to a wide range of digital learning resources including:
                </p>
                
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Virtual learning environments with immersive experiences</li>
                  <li>Digital libraries with access to thousands of e-books and journals</li>
                  <li>Interactive learning tools for better engagement</li>
                  <li>Simulation and modeling software for practical understanding</li>
                  <li>Online courses and webinars from industry experts</li>
                  <li>Cloud-based collaboration platforms</li>
                </ul>
              </div>
              
              <div className="bg-white border rounded shadow-sm p-5">
                <h2 className="text-xl font-semibold text-iare-maroon mb-4">Technology-Enhanced Classrooms</h2>
                
                <p className="mb-4">
                  Our classrooms are equipped with state-of-the-art technology to facilitate interactive teaching and learning:
                </p>
                
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Smart boards and interactive digital displays</li>
                  <li>High-speed internet connectivity throughout campus</li>
                  <li>Advanced audio-visual aids for clear communication</li>
                  <li>Lecture capture systems for review and revision</li>
                  <li>Student response systems for real-time feedback</li>
                  <li>Wireless presentation capabilities</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white border rounded shadow-sm p-5 mb-8">
              <h2 className="text-xl font-semibold text-iare-maroon mb-4">Learning Management System</h2>
              
              <p className="mb-4">
                Our comprehensive Learning Management System (LMS) provides a platform for:
              </p>
              
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Course materials and resources available 24/7</li>
                <li>Assignment submission and automated feedback</li>
                <li>Online discussions and collaborative learning</li>
                <li>Progress tracking and personalized assessment</li>
                <li>Direct communication between students and faculty</li>
                <li>Integration with digital tools and resources</li>
                <li>Mobile access for learning on the go</li>
              </ul>
              
              <p className="text-sm italic">
                Our LMS is continuously updated with the latest features to ensure a seamless learning experience.
              </p>
            </div>
            
            <div className="bg-white border rounded shadow-sm p-5">
              <h2 className="text-xl font-semibold text-iare-maroon mb-4">Emerging Technologies in Education</h2>
              
              <p className="mb-4">
                We stay at the forefront of educational innovation by exploring and implementing:
              </p>
              
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Artificial Intelligence:</strong> For personalized learning paths and intelligent tutoring</li>
                <li><strong>Virtual Reality:</strong> For immersive learning experiences in complex subjects</li>
                <li><strong>Augmented Reality:</strong> For overlaying digital information on physical objects</li>
                <li><strong>Blockchain:</strong> For secure credential verification and skills certification</li>
                <li><strong>IoT:</strong> For smart campus infrastructure and resource optimization</li>
              </ul>
              
              <p className="mb-4">
                These technologies are carefully integrated into our curriculum to enhance learning outcomes while maintaining the human touch that is essential to quality education.
              </p>
            </div>
            
            <div className="bg-iare-lightblue p-4 rounded-lg border border-iare-teal mt-8">
              <p className="mb-4">
                For more information on our learning and educational technologies, please contact:
              </p>
              <p className="mb-1"><strong>Dr. Krishna Mohan</strong></p>
              <p className="mb-1">Director, Learning Technologies</p>
              <p className="mb-1">Email: dir.lt@iare.ac.in</p>
              <p>Phone: +91-9876543210</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default LearningTechnologies;
