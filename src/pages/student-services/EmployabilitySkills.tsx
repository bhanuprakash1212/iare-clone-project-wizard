
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';

const EmployabilitySkills = () => {
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
                <li className="flex items-center text-gray-500">Career and Employability Skills</li>
              </ol>
            </nav>
          </div>
          
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-iare-blue border-b-2 border-iare-teal pb-2 mb-4">Career and Employability Skills</h1>
            
            <div className="bg-white p-6 border rounded shadow-sm">
              <h2 className="text-xl font-semibold text-iare-maroon mb-4">Building Your Career Readiness</h2>
              
              <p className="mb-6">
                At IARE, we are committed to enhancing the employability skills of our students to prepare them for the competitive job market. Our comprehensive career development program is designed to bridge the gap between academic knowledge and industry requirements.
              </p>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-iare-blue mb-3">Key Employability Skills Development Programs</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="border rounded shadow-sm p-4">
                    <h4 className="font-semibold text-iare-teal mb-2">Technical Skills Enhancement</h4>
                    <ul className="list-disc pl-6">
                      <li className="mb-1">Advanced programming workshops</li>
                      <li className="mb-1">Industry-relevant software training</li>
                      <li className="mb-1">Hands-on technical labs</li>
                      <li className="mb-1">Technology boot camps</li>
                      <li className="mb-1">Project-based learning</li>
                    </ul>
                  </div>
                  
                  <div className="border rounded shadow-sm p-4">
                    <h4 className="font-semibold text-iare-teal mb-2">Soft Skills Development</h4>
                    <ul className="list-disc pl-6">
                      <li className="mb-1">Communication skills training</li>
                      <li className="mb-1">Team collaboration workshops</li>
                      <li className="mb-1">Leadership development</li>
                      <li className="mb-1">Problem-solving sessions</li>
                      <li className="mb-1">Critical thinking exercises</li>
                    </ul>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded shadow-sm p-4">
                    <h4 className="font-semibold text-iare-teal mb-2">Career Preparation</h4>
                    <ul className="list-disc pl-6">
                      <li className="mb-1">Resume building workshops</li>
                      <li className="mb-1">Mock interview sessions</li>
                      <li className="mb-1">Group discussion practice</li>
                      <li className="mb-1">Aptitude test training</li>
                      <li className="mb-1">Campus recruitment training</li>
                    </ul>
                  </div>
                  
                  <div className="border rounded shadow-sm p-4">
                    <h4 className="font-semibold text-iare-teal mb-2">Professional Development</h4>
                    <ul className="list-disc pl-6">
                      <li className="mb-1">Industry exposure visits</li>
                      <li className="mb-1">Guest lectures by industry experts</li>
                      <li className="mb-1">Professional networking events</li>
                      <li className="mb-1">Industry mentorship programs</li>
                      <li className="mb-1">Career counseling</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-iare-blue mb-3">Specialized Training Programs</h3>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border">
                    <thead>
                      <tr className="bg-iare-teal text-white">
                        <th className="py-2 px-4 border">Program Name</th>
                        <th className="py-2 px-4 border">Duration</th>
                        <th className="py-2 px-4 border">Target Students</th>
                        <th className="py-2 px-4 border">Key Focus Areas</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border">Pre-Placement Training</td>
                        <td className="py-2 px-4 border">60 Hours</td>
                        <td className="py-2 px-4 border">Final Year Students</td>
                        <td className="py-2 px-4 border">Aptitude, Technical, HR</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-2 px-4 border">Corporate Readiness Program</td>
                        <td className="py-2 px-4 border">45 Hours</td>
                        <td className="py-2 px-4 border">Pre-Final Year</td>
                        <td className="py-2 px-4 border">Communication, Workplace Ethics</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border">Technical Skill Boot Camps</td>
                        <td className="py-2 px-4 border">30 Hours</td>
                        <td className="py-2 px-4 border">All Students</td>
                        <td className="py-2 px-4 border">Programming, Latest Technologies</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-2 px-4 border">Leadership Development</td>
                        <td className="py-2 px-4 border">20 Hours</td>
                        <td className="py-2 px-4 border">Selected Students</td>
                        <td className="py-2 px-4 border">Leadership, Team Management</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border">Industry Certification Coaching</td>
                        <td className="py-2 px-4 border">Varies</td>
                        <td className="py-2 px-4 border">Interested Students</td>
                        <td className="py-2 px-4 border">Industry-specific Certifications</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-iare-blue mb-3">Industry Collaborations</h3>
                <p className="mb-4">
                  IARE has established strong partnerships with leading companies to enhance the employability of our students:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="border p-3 rounded text-center">TCS</div>
                  <div className="border p-3 rounded text-center">Infosys</div>
                  <div className="border p-3 rounded text-center">Wipro</div>
                  <div className="border p-3 rounded text-center">Accenture</div>
                  <div className="border p-3 rounded text-center">Cognizant</div>
                  <div className="border p-3 rounded text-center">Amazon</div>
                  <div className="border p-3 rounded text-center">Microsoft</div>
                  <div className="border p-3 rounded text-center">Google</div>
                </div>
              </div>
              
              <div className="bg-iare-lightblue p-4 rounded-lg border border-iare-teal">
                <h3 className="text-lg font-semibold text-iare-blue mb-2">Contact Career Development Cell</h3>
                <p className="mb-1"><strong>Prof. K. Raghava Rao</strong></p>
                <p className="mb-1">Head, Career Development Cell</p>
                <p className="mb-1">Email: career.development@iare.ac.in</p>
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

export default EmployabilitySkills;
