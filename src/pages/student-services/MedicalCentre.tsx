
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';

const MedicalCentre = () => {
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
                <li className="flex items-center text-gray-500">Medical Centre</li>
              </ol>
            </nav>
          </div>
          
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-iare-blue border-b-2 border-iare-teal pb-2 mb-4">Medical Centre</h1>
            
            <div className="bg-white p-6 border rounded shadow-sm">
              <h2 className="text-xl font-semibold text-iare-maroon mb-4">Healthcare Services for Students</h2>
              
              <div className="mb-6">
                <img 
                  src="/placeholder.svg" 
                  alt="IARE Medical Centre" 
                  className="w-full h-64 object-cover rounded-lg mb-4" 
                />
                
                <p className="mb-4">
                  The IARE Medical Centre provides comprehensive healthcare services to students, faculty, and staff. Our 
                  well-equipped facility offers preventive, curative, and emergency medical services.
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-iare-blue mb-2">Medical Services</h3>
                <ul className="list-disc pl-6 mb-4">
                  <li className="mb-2">General outpatient services</li>
                  <li className="mb-2">First aid for emergencies</li>
                  <li className="mb-2">Basic laboratory services</li>
                  <li className="mb-2">Health education and promotion</li>
                  <li className="mb-2">Mental health counseling</li>
                  <li className="mb-2">Referral services to specialty care</li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-iare-blue mb-2">Facilities Available</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="border p-4 rounded">
                    <h4 className="font-medium mb-2">Consultation Room</h4>
                    <p className="text-sm">Well-equipped examination room for consultations and check-ups.</p>
                  </div>
                  <div className="border p-4 rounded">
                    <h4 className="font-medium mb-2">Observation Ward</h4>
                    <p className="text-sm">Short-term observation facility with beds for students requiring monitoring.</p>
                  </div>
                  <div className="border p-4 rounded">
                    <h4 className="font-medium mb-2">Pharmacy</h4>
                    <p className="text-sm">Essential medicines available for common illnesses and emergencies.</p>
                  </div>
                  <div className="border p-4 rounded">
                    <h4 className="font-medium mb-2">Ambulance Service</h4>
                    <p className="text-sm">24/7 ambulance service for medical emergencies and transfers.</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-iare-blue mb-2">Medical Staff</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div className="flex items-start">
                    <div className="h-20 w-20 bg-gray-200 rounded-full overflow-hidden mr-4">
                      <img src="/placeholder.svg" alt="Dr. Suresh Kumar" className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-medium text-iare-blue">Dr. Suresh Kumar</h4>
                      <p className="text-sm text-gray-600 mb-1">Chief Medical Officer</p>
                      <p className="text-sm">MBBS, MD (General Medicine)</p>
                      <p className="text-sm">Available: Mon-Fri (9:00 AM - 4:00 PM)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-20 w-20 bg-gray-200 rounded-full overflow-hidden mr-4">
                      <img src="/placeholder.svg" alt="Dr. Priya Sharma" className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-medium text-iare-blue">Dr. Priya Sharma</h4>
                      <p className="text-sm text-gray-600 mb-1">Medical Officer</p>
                      <p className="text-sm">MBBS</p>
                      <p className="text-sm">Available: Mon-Sat (10:00 AM - 6:00 PM)</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-20 w-20 bg-gray-200 rounded-full overflow-hidden mr-4">
                    <img src="/placeholder.svg" alt="Nurse Lakshmi" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-medium text-iare-blue">Ms. Lakshmi</h4>
                    <p className="text-sm text-gray-600 mb-1">Staff Nurse</p>
                    <p className="text-sm">B.Sc Nursing</p>
                    <p className="text-sm">Available: 24/7 (Shift basis)</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-iare-blue mb-2">Health Insurance</h3>
                <p className="mb-4">
                  All students enrolled at IARE are covered under the Student Health Insurance Program. This comprehensive 
                  insurance plan covers hospitalization, accident-related expenses, and outpatient care up to the specified limits.
                </p>
                <div className="bg-iare-lightblue p-4 rounded">
                  <h4 className="font-medium mb-2">Insurance Coverage Highlights:</h4>
                  <ul className="list-disc pl-6">
                    <li>Hospitalization coverage up to Rs. 1,00,000</li>
                    <li>Accident coverage up to Rs. 50,000</li>
                    <li>Cashless treatment at network hospitals</li>
                    <li>Coverage for pre-existing diseases after waiting period</li>
                    <li>Ambulance charges covered</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-iare-lightblue p-4 rounded-lg border border-iare-teal">
                <h3 className="text-lg font-semibold text-iare-blue mb-2">Contact Medical Centre</h3>
                <p className="mb-1"><strong>Location:</strong> Ground Floor, Main Building</p>
                <p className="mb-1"><strong>Email:</strong> medical.centre@iare.ac.in</p>
                <p className="mb-1"><strong>Emergency Contact:</strong> +91-9876543210</p>
                <p><strong>Working Hours:</strong> 24/7 (Emergency Services)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default MedicalCentre;
