
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';

const SupportHub = () => {
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
                <li className="flex items-center text-gray-500">Student Learning Support Hub</li>
              </ol>
            </nav>
          </div>
          
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-iare-blue border-b-2 border-iare-teal pb-2 mb-4">Student Learning Support Hub</h1>
            
            <div className="bg-white p-6 border rounded shadow-sm">
              <h2 className="text-xl font-semibold text-iare-maroon mb-4">Your Center for Academic Excellence</h2>
              
              <p className="mb-6">
                The Student Learning Support Hub at IARE is a comprehensive resource center designed to support students' 
                academic journey. We provide personalized assistance, learning resources, and collaborative spaces to help 
                students excel in their coursework and develop effective learning strategies.
              </p>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-iare-blue mb-3">Services Offered</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="border rounded shadow-sm p-4">
                    <h4 className="font-semibold text-iare-teal mb-2">Academic Tutoring</h4>
                    <p className="mb-2">One-on-one and group tutoring sessions in:</p>
                    <ul className="list-disc pl-6">
                      <li className="mb-1">Mathematics and Physics</li>
                      <li className="mb-1">Programming and Computer Science</li>
                      <li className="mb-1">Engineering subjects</li>
                      <li className="mb-1">Technical writing</li>
                      <li className="mb-1">Research methodology</li>
                    </ul>
                  </div>
                  
                  <div className="border rounded shadow-sm p-4">
                    <h4 className="font-semibold text-iare-teal mb-2">Learning Skills Development</h4>
                    <p className="mb-2">Workshops and resources for:</p>
                    <ul className="list-disc pl-6">
                      <li className="mb-1">Effective study techniques</li>
                      <li className="mb-1">Time management</li>
                      <li className="mb-1">Note-taking strategies</li>
                      <li className="mb-1">Exam preparation</li>
                      <li className="mb-1">Academic writing</li>
                    </ul>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded shadow-sm p-4">
                    <h4 className="font-semibold text-iare-teal mb-2">Peer Learning Community</h4>
                    <ul className="list-disc pl-6">
                      <li className="mb-1">Study groups formation and facilitation</li>
                      <li className="mb-1">Peer tutoring programs</li>
                      <li className="mb-1">Collaborative learning spaces</li>
                      <li className="mb-1">Academic discussion forums</li>
                      <li className="mb-1">Peer review opportunities</li>
                    </ul>
                  </div>
                  
                  <div className="border rounded shadow-sm p-4">
                    <h4 className="font-semibold text-iare-teal mb-2">Resources and Tools</h4>
                    <ul className="list-disc pl-6">
                      <li className="mb-1">Digital learning resources</li>
                      <li className="mb-1">Subject-specific reference materials</li>
                      <li className="mb-1">Educational software access</li>
                      <li className="mb-1">Online course supplements</li>
                      <li className="mb-1">Past papers and practice questions</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-iare-blue mb-3">Special Support Programs</h3>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border">
                    <thead>
                      <tr className="bg-iare-teal text-white">
                        <th className="py-2 px-4 border">Program</th>
                        <th className="py-2 px-4 border">Description</th>
                        <th className="py-2 px-4 border">Eligibility</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border">First-Year Transition</td>
                        <td className="py-2 px-4 border">Comprehensive support for new students adapting to college academics</td>
                        <td className="py-2 px-4 border">All first-year students</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-2 px-4 border">Academic Intervention</td>
                        <td className="py-2 px-4 border">Intensive support for students facing academic challenges</td>
                        <td className="py-2 px-4 border">Students with CGPA below 6.0</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border">Advanced Learners Program</td>
                        <td className="py-2 px-4 border">Advanced topics and research opportunities for high performers</td>
                        <td className="py-2 px-4 border">Students with CGPA above 8.5</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-2 px-4 border">Bridging Courses</td>
                        <td className="py-2 px-4 border">Extra classes to fill knowledge gaps in prerequisite subjects</td>
                        <td className="py-2 px-4 border">Based on diagnostic tests</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border">Exam Preparation Boot Camps</td>
                        <td className="py-2 px-4 border">Intensive revision sessions before major examinations</td>
                        <td className="py-2 px-4 border">All enrolled students</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-iare-blue mb-3">Learning Spaces</h3>
                <p className="mb-4">
                  The Support Hub provides various learning environments to accommodate different study needs:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border p-4 rounded">
                    <h4 className="font-medium text-iare-teal mb-1">Quiet Study Zones</h4>
                    <p className="text-sm">For individual focused study with minimal distractions</p>
                  </div>
                  <div className="border p-4 rounded">
                    <h4 className="font-medium text-iare-teal mb-1">Collaborative Spaces</h4>
                    <p className="text-sm">For group projects and study sessions with whiteboards and displays</p>
                  </div>
                  <div className="border p-4 rounded">
                    <h4 className="font-medium text-iare-teal mb-1">Digital Learning Lab</h4>
                    <p className="text-sm">Computer workstations with specialized academic software</p>
                  </div>
                  <div className="border p-4 rounded">
                    <h4 className="font-medium text-iare-teal mb-1">Tutoring Rooms</h4>
                    <p className="text-sm">Private spaces for one-on-one tutoring sessions</p>
                  </div>
                  <div className="border p-4 rounded">
                    <h4 className="font-medium text-iare-teal mb-1">Workshop Spaces</h4>
                    <p className="text-sm">Seminar rooms for learning skills workshops and training</p>
                  </div>
                  <div className="border p-4 rounded">
                    <h4 className="font-medium text-iare-teal mb-1">Resource Center</h4>
                    <p className="text-sm">Access to reference materials, past papers, and study guides</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-iare-lightblue p-4 rounded-lg border border-iare-teal">
                <h3 className="text-lg font-semibold text-iare-blue mb-2">Contact Student Learning Support Hub</h3>
                <p className="mb-1"><strong>Dr. Vijaya Lakshmi</strong></p>
                <p className="mb-1">Coordinator, Student Learning Support Hub</p>
                <p className="mb-1">Email: learning.support@iare.ac.in</p>
                <p className="mb-1">Phone: +91-9876543210</p>
                <p className="mb-1">Location: Academic Block 3, Ground Floor</p>
                <p>Hours: Monday to Friday, 9:00 AM to 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SupportHub;
