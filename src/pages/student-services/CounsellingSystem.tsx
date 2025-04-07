
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

const CounsellingSystem = () => {
  const counsellorData = [
    { name: "Dr. Anitha Rani", department: "Computer Science & Engineering", email: "anitha.r@iare.ac.in", phone: "+91-9876543211" },
    { name: "Dr. Srinivas Reddy", department: "Information Technology", email: "srinivas.r@iare.ac.in", phone: "+91-9876543212" },
    { name: "Dr. Padmaja Rani", department: "Electronics & Communication", email: "padmaja.r@iare.ac.in", phone: "+91-9876543213" },
    { name: "Dr. Venkatesh Kumar", department: "Mechanical Engineering", email: "venkatesh.k@iare.ac.in", phone: "+91-9876543214" },
    { name: "Dr. Sudha Rani", department: "Aeronautical Engineering", email: "sudha.r@iare.ac.in", phone: "+91-9876543215" },
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
                <li className="flex items-center">
                  <Link to="/student-services" className="text-iare-blue hover:text-iare-teal">Student Services</Link>
                  <span className="mx-2">/</span>
                </li>
                <li className="flex items-center text-gray-500">Student Counselling System</li>
              </ol>
            </nav>
          </div>
          
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-iare-blue border-b-2 border-iare-teal pb-2 mb-4">Student Counselling System</h1>
            
            <div className="bg-white p-6 shadow-md rounded mb-6">
              <h2 className="text-xl font-semibold text-iare-maroon mb-4">About the Counselling System</h2>
              
              <p className="mb-4">
                The Student Counselling System at IARE is a comprehensive support structure designed to address the academic, 
                personal, and emotional needs of students. Each student is assigned a faculty counsellor who serves as a mentor 
                and guide throughout their academic journey.
              </p>
              
              <p className="mb-4">
                The system aims to provide a supportive environment where students can discuss their concerns, seek guidance on 
                academic matters, and receive help in dealing with personal challenges that may affect their academic performance.
              </p>
              
              <h2 className="text-xl font-semibold text-iare-maroon mb-4 mt-6">Objectives</h2>
              
              <ul className="list-disc pl-5 mb-6 space-y-2">
                <li>Monitor and support students' academic progress</li>
                <li>Identify and address learning difficulties and barriers</li>
                <li>Provide guidance on course selection and career planning</li>
                <li>Offer emotional support and help with personal issues</li>
                <li>Facilitate communication between students, faculty, and administration</li>
                <li>Promote overall student well-being and development</li>
              </ul>
              
              <h2 className="text-xl font-semibold text-iare-maroon mb-4">Counselling Process</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-iare-gray p-4 rounded text-center">
                  <div className="bg-iare-teal text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">1</div>
                  <h3 className="font-semibold mb-2">Counsellor Assignment</h3>
                  <p className="text-sm">
                    Each student is assigned a faculty counsellor at the beginning of the academic year.
                  </p>
                </div>
                
                <div className="bg-iare-gray p-4 rounded text-center">
                  <div className="bg-iare-teal text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">2</div>
                  <h3 className="font-semibold mb-2">Regular Meetings</h3>
                  <p className="text-sm">
                    Scheduled counselling sessions are conducted at least twice a month.
                  </p>
                </div>
                
                <div className="bg-iare-gray p-4 rounded text-center">
                  <div className="bg-iare-teal text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">3</div>
                  <h3 className="font-semibold mb-2">Progress Monitoring</h3>
                  <p className="text-sm">
                    Academic performance and attendance are monitored and discussed.
                  </p>
                </div>
                
                <div className="bg-iare-gray p-4 rounded text-center">
                  <div className="bg-iare-teal text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">4</div>
                  <h3 className="font-semibold mb-2">Issue Identification</h3>
                  <p className="text-sm">
                    Academic or personal issues affecting performance are identified.
                  </p>
                </div>
                
                <div className="bg-iare-gray p-4 rounded text-center">
                  <div className="bg-iare-teal text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">5</div>
                  <h3 className="font-semibold mb-2">Intervention Planning</h3>
                  <p className="text-sm">
                    Strategies to address issues are developed collaboratively.
                  </p>
                </div>
                
                <div className="bg-iare-gray p-4 rounded text-center">
                  <div className="bg-iare-teal text-white rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">6</div>
                  <h3 className="font-semibold mb-2">Follow-up</h3>
                  <p className="text-sm">
                    Implementation of strategies is monitored and adjusted as needed.
                  </p>
                </div>
              </div>
              
              <h2 className="text-xl font-semibold text-iare-maroon mb-4">Department Counsellors</h2>
              
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border rounded">
                  <thead>
                    <tr className="bg-iare-blue text-white">
                      <th className="py-2 px-4 text-left">Counsellor Name</th>
                      <th className="py-2 px-4 text-left">Department</th>
                      <th className="py-2 px-4 text-left">Email</th>
                      <th className="py-2 px-4 text-left">Phone</th>
                    </tr>
                  </thead>
                  <tbody>
                    {counsellorData.map((counsellor, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="py-2 px-4 border-b">{counsellor.name}</td>
                        <td className="py-2 px-4 border-b">{counsellor.department}</td>
                        <td className="py-2 px-4 border-b">{counsellor.email}</td>
                        <td className="py-2 px-4 border-b">{counsellor.phone}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="bg-iare-lightblue p-4 rounded-lg border border-iare-teal">
                <h3 className="text-lg font-semibold text-iare-blue mb-2">Contact Counselling Coordinator</h3>
                <p className="mb-1"><strong>Dr. Rajasekhar Reddy</strong></p>
                <p className="mb-1">Coordinator, Student Counselling System</p>
                <p className="mb-1">Email: counselling@iare.ac.in</p>
                <p>Phone: +91-9876543220</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CounsellingSystem;
