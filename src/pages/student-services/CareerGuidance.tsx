
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

const CareerGuidance = () => {
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
                <li className="flex items-center text-gray-500">Career Guidance and Counselling</li>
              </ol>
            </nav>
          </div>
          
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-iare-blue border-b-2 border-iare-teal pb-2 mb-4">Career Guidance and Counselling</h1>
            
            <div className="bg-white p-6 shadow-md rounded mb-6">
              <h2 className="text-xl font-semibold text-iare-maroon mb-4">Overview</h2>
              
              <p className="mb-4">
                The Career Guidance and Counselling Cell at IARE is dedicated to providing students with the necessary guidance, 
                counselling, and resources to help them make informed career decisions. The cell offers a wide range of services 
                including career assessment, career counselling, psychometric testing, job search assistance, and more.
              </p>
              
              <p className="mb-4">
                Our professional counsellors are available to discuss career options, help with resume building, conduct mock 
                interviews, and provide industry insights to prepare students for successful careers.
              </p>
              
              <h2 className="text-xl font-semibold text-iare-maroon mb-4 mt-6">Key Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-iare-gray p-4 rounded">
                  <h3 className="font-semibold mb-2">Career Assessment</h3>
                  <p className="text-sm">
                    Identify your strengths, interests, values, and skills to find the right career path.
                  </p>
                </div>
                
                <div className="bg-iare-gray p-4 rounded">
                  <h3 className="font-semibold mb-2">Individual Counselling</h3>
                  <p className="text-sm">
                    One-on-one sessions with experienced counsellors to discuss career plans and concerns.
                  </p>
                </div>
                
                <div className="bg-iare-gray p-4 rounded">
                  <h3 className="font-semibold mb-2">Resume Building</h3>
                  <p className="text-sm">
                    Assistance in creating professional resumes and cover letters for job applications.
                  </p>
                </div>
                
                <div className="bg-iare-gray p-4 rounded">
                  <h3 className="font-semibold mb-2">Interview Preparation</h3>
                  <p className="text-sm">
                    Mock interviews and feedback to help students prepare for real interviews.
                  </p>
                </div>
                
                <div className="bg-iare-gray p-4 rounded">
                  <h3 className="font-semibold mb-2">Industry Connect</h3>
                  <p className="text-sm">
                    Networking opportunities with industry professionals and alumni.
                  </p>
                </div>
                
                <div className="bg-iare-gray p-4 rounded">
                  <h3 className="font-semibold mb-2">Higher Education Guidance</h3>
                  <p className="text-sm">
                    Information and guidance on higher education options in India and abroad.
                  </p>
                </div>
              </div>
              
              <h2 className="text-xl font-semibold text-iare-maroon mb-4">Career Resources</h2>
              
              <ul className="list-disc pl-5 mb-6 space-y-2">
                <li>Career assessment tools and psychometric tests</li>
                <li>Career library with books, journals, and digital resources</li>
                <li>Online job portals and career websites access</li>
                <li>Industry reports and market trends analysis</li>
                <li>Professional development workshops and seminars</li>
                <li>Internship and placement opportunities</li>
              </ul>
              
              <h2 className="text-xl font-semibold text-iare-maroon mb-4">Upcoming Events</h2>
              
              <div className="border rounded overflow-hidden mb-6">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-iare-blue text-white">
                      <th className="py-2 px-4 text-left">Date</th>
                      <th className="py-2 px-4 text-left">Event</th>
                      <th className="py-2 px-4 text-left">Venue</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 px-4">May 20, 2025</td>
                      <td className="py-2 px-4">Career in Artificial Intelligence</td>
                      <td className="py-2 px-4">Seminar Hall - 1</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-2 px-4">May 25, 2025</td>
                      <td className="py-2 px-4">Resume Building Workshop</td>
                      <td className="py-2 px-4">Computer Lab - 3</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-4">June 5, 2025</td>
                      <td className="py-2 px-4">Mock Interview Day</td>
                      <td className="py-2 px-4">Interview Panel Rooms</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-2 px-4">June 15, 2025</td>
                      <td className="py-2 px-4">Higher Education Abroad Seminar</td>
                      <td className="py-2 px-4">Auditorium</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="bg-iare-lightblue p-4 rounded-lg border border-iare-teal">
                <h3 className="text-lg font-semibold text-iare-blue mb-2">Contact Career Guidance Cell</h3>
                <p className="mb-1"><strong>Prof. Ramya Sree</strong></p>
                <p className="mb-1">Coordinator, Career Guidance and Counselling</p>
                <p className="mb-1">Email: careers@iare.ac.in</p>
                <p>Phone: +91-9876543210</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CareerGuidance;
