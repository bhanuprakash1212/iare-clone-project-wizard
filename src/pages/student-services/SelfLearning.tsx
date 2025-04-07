
import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

const SelfLearning = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="container mx-auto flex flex-col md:flex-row my-6 px-4">
        <div className="w-full md:w-1/4 mb-6 md:mb-0 md:pr-6">
          <Sidebar />
        </div>
        
        <div className="w-full md:w-3/4">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-iare-blue border-b-2 border-iare-teal pb-2 mb-4">Self Learning</h1>
            
            <p className="mb-4">
              At IARE, we recognize that self-directed learning is a critical skill for lifelong success. Our Self Learning program empowers students to take ownership of their educational journey.
            </p>
            
            <h2 className="text-xl font-semibold text-iare-maroon mb-4">Self Learning Resources</h2>
            
            <p className="mb-4">
              IARE provides a comprehensive array of resources to support self-learning:
            </p>
            
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Digital Library:</strong> Access to thousands of e-books, journals, and research papers</li>
              <li><strong>Online Courses:</strong> Curated selection of MOOCs from platforms like Coursera, edX, and NPTEL</li>
              <li><strong>Learning Management System:</strong> Self-paced modules and supplementary materials</li>
              <li><strong>Software Tools:</strong> Access to industry-standard software for practice and exploration</li>
              <li><strong>Virtual Labs:</strong> Simulated laboratory environments for self-directed experimentation</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-iare-maroon mb-4">Self Learning Support</h2>
            
            <p className="mb-4">
              While self-learning emphasizes autonomy, we provide support structures to guide students:
            </p>
            
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Learning Advisors:</strong> Faculty members who can suggest resources and learning paths</li>
              <li><strong>Peer Learning Groups:</strong> Connect with other students exploring similar topics</li>
              <li><strong>Progress Tracking:</strong> Tools to monitor and reflect on learning achievements</li>
              <li><strong>Skill Assessment:</strong> Regular opportunities to evaluate acquired knowledge and skills</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-iare-maroon mb-4">Self Learning Recognition</h2>
            
            <p className="mb-4">
              We recognize and value the effort students put into self-directed learning:
            </p>
            
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Digital Badges:</strong> Earn recognition for completing self-learning milestones</li>
              <li><strong>Portfolio Development:</strong> Document self-acquired skills and knowledge</li>
              <li><strong>Challenge Examinations:</strong> Demonstrate proficiency gained through self-study</li>
              <li><strong>Showcase Opportunities:</strong> Present self-directed projects at institutional events</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-iare-maroon mb-4">Developing Self-Learning Skills</h2>
            
            <p className="mb-4">
              We offer workshops and guidance on developing essential self-learning skills:
            </p>
            
            <ul className="list-disc pl-6 mb-4">
              <li>Setting effective learning goals</li>
              <li>Time management and learning schedules</li>
              <li>Note-taking and information organization</li>
              <li>Critical evaluation of resources</li>
              <li>Self-assessment techniques</li>
              <li>Overcoming challenges in independent learning</li>
            </ul>
            
            <p className="mb-4">
              For more information about our Self Learning initiatives, please contact the Dean of Student Services.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SelfLearning;
