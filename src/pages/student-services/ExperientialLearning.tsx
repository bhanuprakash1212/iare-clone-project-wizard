
import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

const ExperientialLearning = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="container mx-auto flex flex-col md:flex-row my-6 px-4">
        <div className="w-full md:w-1/4 mb-6 md:mb-0 md:pr-6">
          <Sidebar />
        </div>
        
        <div className="w-full md:w-3/4">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-iare-blue border-b-2 border-iare-teal pb-2 mb-4">Experiential Learning (ExL)</h1>
            
            <p className="mb-4">
              Experiential Learning at IARE is designed to provide hands-on, practical learning experiences that complement classroom education.
            </p>
            
            <h2 className="text-xl font-semibold text-iare-maroon mb-4">What is Experiential Learning?</h2>
            
            <p className="mb-4">
              Experiential Learning is a process through which students develop knowledge, skills, and values from direct experiences outside a traditional academic setting. It encompasses internships, service learning, undergraduate research, study abroad, and other creative and professional work experiences.
            </p>
            
            <h2 className="text-xl font-semibold text-iare-maroon mb-4">Our Approach</h2>
            
            <p className="mb-4">
              At IARE, we follow the Experiential Learning Cycle developed by educational theorist David A. Kolb:
            </p>
            
            <ol className="list-decimal pl-6 mb-4">
              <li><strong>Concrete Experience:</strong> Engaging in new experiences</li>
              <li><strong>Reflective Observation:</strong> Reflecting on experiences from multiple perspectives</li>
              <li><strong>Abstract Conceptualization:</strong> Creating concepts that integrate observations into logical theories</li>
              <li><strong>Active Experimentation:</strong> Using theories to make decisions and solve problems</li>
            </ol>
            
            <h2 className="text-xl font-semibold text-iare-maroon mb-4">Experiential Learning Opportunities</h2>
            
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Industry Internships:</strong> Gain real-world experience through structured work experiences</li>
              <li><strong>Project-Based Learning:</strong> Work on real projects that address actual problems</li>
              <li><strong>Laboratory Work:</strong> Apply theoretical knowledge in practical settings</li>
              <li><strong>Field Trips:</strong> Visit industry sites to observe professional environments</li>
              <li><strong>Design Challenges:</strong> Participate in competitions to solve engineering problems</li>
              <li><strong>Community Service:</strong> Engage in service learning projects</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-iare-maroon mb-4">Benefits of Experiential Learning</h2>
            
            <ul className="list-disc pl-6 mb-4">
              <li>Bridges the gap between theory and practice</li>
              <li>Develops critical thinking and problem-solving skills</li>
              <li>Enhances teamwork and communication abilities</li>
              <li>Builds professional networks</li>
              <li>Increases motivation and engagement in learning</li>
              <li>Provides career exploration opportunities</li>
            </ul>
            
            <p className="mb-4">
              For more information about our Experiential Learning programs, please contact the Dean of Student Services.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ExperientialLearning;
