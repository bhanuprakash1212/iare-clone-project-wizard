
import React from 'react';
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
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-iare-blue border-b-2 border-iare-teal pb-2 mb-4">Learning and Educational Technologies</h1>
            
            <p className="mb-4">
              The Institute of Aeronautical Engineering is committed to providing cutting-edge educational technologies to enhance the learning experience of our students.
            </p>
            
            <h2 className="text-xl font-semibold text-iare-maroon mb-4">Digital Learning Resources</h2>
            
            <p className="mb-4">
              We provide access to a wide range of digital learning resources including:
            </p>
            
            <ul className="list-disc pl-6 mb-4">
              <li>Virtual learning environments</li>
              <li>Digital libraries and databases</li>
              <li>Interactive learning tools</li>
              <li>Simulation and modeling software</li>
              <li>Online courses and webinars</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-iare-maroon mb-4">Technology-Enhanced Classrooms</h2>
            
            <p className="mb-4">
              Our classrooms are equipped with state-of-the-art technology to facilitate interactive teaching and learning:
            </p>
            
            <ul className="list-disc pl-6 mb-4">
              <li>Smart boards and digital projectors</li>
              <li>High-speed internet connectivity</li>
              <li>Audio-visual aids</li>
              <li>Lecture capture systems</li>
              <li>Student response systems</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-iare-maroon mb-4">Learning Management System</h2>
            
            <p className="mb-4">
              Our comprehensive Learning Management System (LMS) provides a platform for:
            </p>
            
            <ul className="list-disc pl-6 mb-4">
              <li>Course materials and resources</li>
              <li>Assignment submission and feedback</li>
              <li>Online discussions and collaboration</li>
              <li>Progress tracking and assessment</li>
              <li>Communication between students and faculty</li>
            </ul>
            
            <p className="mb-4">
              For more information on our learning and educational technologies, please contact the Dean of Student Services.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default LearningTechnologies;
