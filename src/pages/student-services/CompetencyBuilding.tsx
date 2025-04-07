
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';

const CompetencyBuilding = () => {
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
                <li className="flex items-center text-gray-500">Competency Building and Consultancy</li>
              </ol>
            </nav>
          </div>
          
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-iare-blue border-b-2 border-iare-teal pb-2 mb-4">Competency Building and Consultancy</h1>
            
            <div className="bg-white p-6 border rounded shadow-sm">
              <h2 className="text-xl font-semibold text-iare-maroon mb-4">Developing Industry-Ready Professionals</h2>
              
              <p className="mb-6">
                The Competency Building and Consultancy division at IARE is dedicated to developing core professional competencies 
                in students and providing consultancy services to the industry. We focus on bridging the gap between academic 
                knowledge and practical application through specialized training programs, workshops, and industry projects.
              </p>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-iare-blue mb-3">Core Competency Development Programs</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="border rounded shadow-sm p-4">
                    <h4 className="font-semibold text-iare-teal mb-2">Technical Competencies</h4>
                    <ul className="list-disc pl-6">
                      <li className="mb-1">Domain-specific technical skills development</li>
                      <li className="mb-1">Software development methodologies</li>
                      <li className="mb-1">Data analytics and machine learning</li>
                      <li className="mb-1">Cloud computing and DevOps</li>
                      <li className="mb-1">Cybersecurity fundamentals</li>
                    </ul>
                  </div>
                  
                  <div className="border rounded shadow-sm p-4">
                    <h4 className="font-semibold text-iare-teal mb-2">Functional Competencies</h4>
                    <ul className="list-disc pl-6">
                      <li className="mb-1">Project management</li>
                      <li className="mb-1">Business analysis and requirements gathering</li>
                      <li className="mb-1">Quality assurance and testing</li>
                      <li className="mb-1">Documentation and reporting</li>
                      <li className="mb-1">Product development lifecycle</li>
                    </ul>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded shadow-sm p-4">
                    <h4 className="font-semibold text-iare-teal mb-2">Behavioral Competencies</h4>
                    <ul className="list-disc pl-6">
                      <li className="mb-1">Leadership and team management</li>
                      <li className="mb-1">Negotiation and conflict resolution</li>
                      <li className="mb-1">Effective communication</li>
                      <li className="mb-1">Time management and organization</li>
                      <li className="mb-1">Problem-solving and critical thinking</li>
                    </ul>
                  </div>
                  
                  <div className="border rounded shadow-sm p-4">
                    <h4 className="font-semibold text-iare-teal mb-2">Consultancy Skills</h4>
                    <ul className="list-disc pl-6">
                      <li className="mb-1">Client requirement analysis</li>
                      <li className="mb-1">Solution design and proposal development</li>
                      <li className="mb-1">Stakeholder management</li>
                      <li className="mb-1">Professional presentation skills</li>
                      <li className="mb-1">Business etiquette and ethics</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-iare-blue mb-3">Consultancy Projects</h3>
                <p className="mb-4">
                  Our institute provides consultancy services to various organizations through faculty-student teams. This gives students 
                  real-world experience while contributing to industry solutions.
                </p>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border">
                    <thead>
                      <tr className="bg-iare-teal text-white">
                        <th className="py-2 px-4 border">Project Type</th>
                        <th className="py-2 px-4 border">Description</th>
                        <th className="py-2 px-4 border">Student Involvement</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border">Software Development</td>
                        <td className="py-2 px-4 border">Custom software solutions for business needs</td>
                        <td className="py-2 px-4 border">Development, testing, and documentation</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-2 px-4 border">Process Optimization</td>
                        <td className="py-2 px-4 border">Analysis and improvement of business processes</td>
                        <td className="py-2 px-4 border">Data collection, analysis, and process modeling</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border">Technical Feasibility Studies</td>
                        <td className="py-2 px-4 border">Evaluation of technical implementations</td>
                        <td className="py-2 px-4 border">Research, testing, and reporting</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-2 px-4 border">Industry Training</td>
                        <td className="py-2 px-4 border">Customized training programs for organizations</td>
                        <td className="py-2 px-4 border">Content creation and training assistance</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border">Research Projects</td>
                        <td className="py-2 px-4 border">Specialized research for industry problems</td>
                        <td className="py-2 px-4 border">Research tasks and implementation</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-iare-blue mb-3">Industry-Academia Partnerships</h3>
                <p className="mb-4">
                  We have established strategic partnerships with various organizations to facilitate knowledge exchange and provide 
                  students with exposure to real-world challenges:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border p-4 rounded">
                    <h4 className="font-medium text-iare-teal mb-1">Industry Projects</h4>
                    <p className="text-sm">Collaborative projects with industry partners to solve real business challenges</p>
                  </div>
                  <div className="border p-4 rounded">
                    <h4 className="font-medium text-iare-teal mb-1">Faculty Exchange</h4>
                    <p className="text-sm">Industry experts teach specialized modules and faculty undertake industry sabbaticals</p>
                  </div>
                  <div className="border p-4 rounded">
                    <h4 className="font-medium text-iare-teal mb-1">Joint Research</h4>
                    <p className="text-sm">Collaborative research initiatives with industry partners on emerging technologies</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-iare-lightblue p-4 rounded-lg border border-iare-teal">
                <h3 className="text-lg font-semibold text-iare-blue mb-2">Contact Competency Building & Consultancy Center</h3>
                <p className="mb-1"><strong>Dr. P. Bhaskara Reddy</strong></p>
                <p className="mb-1">Director, Competency Building & Consultancy</p>
                <p className="mb-1">Email: competency.center@iare.ac.in</p>
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

export default CompetencyBuilding;
