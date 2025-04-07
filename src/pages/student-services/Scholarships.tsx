
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';

const Scholarships = () => {
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
                <li className="flex items-center text-gray-500">Scholarships</li>
              </ol>
            </nav>
          </div>
          
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-iare-blue border-b-2 border-iare-teal pb-2 mb-4">Scholarships</h1>
            
            <div className="bg-white p-6 border rounded shadow-sm">
              <h2 className="text-xl font-semibold text-iare-maroon mb-4">Available Scholarships</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-iare-blue mb-2">Merit Scholarships</h3>
                <p className="mb-4">
                  IARE offers merit scholarships to students with excellent academic performance. These scholarships can cover up to 100% of tuition fees based on the student's performance in qualifying examinations.
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border">
                    <thead>
                      <tr className="bg-iare-teal text-white">
                        <th className="py-2 px-4 border">Category</th>
                        <th className="py-2 px-4 border">Eligibility</th>
                        <th className="py-2 px-4 border">Scholarship Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border">Category A</td>
                        <td className="py-2 px-4 border">JEE Main Rank ≤ 10,000</td>
                        <td className="py-2 px-4 border">100% Tuition Fee Waiver</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-2 px-4 border">Category B</td>
                        <td className="py-2 px-4 border">JEE Main Rank 10,001 - 30,000</td>
                        <td className="py-2 px-4 border">75% Tuition Fee Waiver</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border">Category C</td>
                        <td className="py-2 px-4 border">JEE Main Rank 30,001 - 50,000</td>
                        <td className="py-2 px-4 border">50% Tuition Fee Waiver</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-2 px-4 border">Category D</td>
                        <td className="py-2 px-4 border">EAMCET Rank ≤ 5,000</td>
                        <td className="py-2 px-4 border">50% Tuition Fee Waiver</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border">Category E</td>
                        <td className="py-2 px-4 border">EAMCET Rank 5,001 - 10,000</td>
                        <td className="py-2 px-4 border">25% Tuition Fee Waiver</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-iare-blue mb-2">Government Scholarships</h3>
                <p className="mb-4">
                  Students can avail various government scholarships based on their category, income, and other criteria.
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li className="mb-2">State Government Fee Reimbursement</li>
                  <li className="mb-2">Central Sector Scholarship</li>
                  <li className="mb-2">Post-Matric Scholarships for SC/ST/OBC</li>
                  <li className="mb-2">Prime Minister's Scholarship Scheme</li>
                  <li className="mb-2">AICTE PRAGATI Scholarship for Girl Students</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-iare-blue mb-2">Continuing Education Scholarships</h3>
                <p className="mb-2">
                  Students maintaining excellent academic records throughout their course can also avail continuing scholarships:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li className="mb-2">CGPA {'>'}9.5: 25% tuition fee waiver for the next academic year</li>
                  <li className="mb-2">CGPA {'>'}9.0: 15% tuition fee waiver for the next academic year</li>
                  <li className="mb-2">CGPA {'>'}8.5: 10% tuition fee waiver for the next academic year</li>
                </ul>
              </div>
              
              <div className="bg-iare-lightblue p-4 rounded-lg border border-iare-teal">
                <h3 className="text-lg font-semibold text-iare-blue mb-2">Scholarship Application Process</h3>
                <p className="mb-2">
                  To apply for scholarships, please visit the Scholarship Section at the Administrative Block or contact:
                </p>
                <p className="mb-1"><strong>Scholarship Section</strong></p>
                <p className="mb-1">Email: scholarships@iare.ac.in</p>
                <p>Phone: +91-8888123456</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Scholarships;
