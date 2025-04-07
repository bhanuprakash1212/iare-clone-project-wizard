
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';
import { Clock, Phone, Mail, MapPin } from 'lucide-react';

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
            
            <div className="bg-white p-6 border rounded shadow-sm mb-6">
              <h2 className="text-xl font-semibold text-iare-maroon mb-4">Healthcare Services</h2>
              
              <p className="mb-4">
                IARE Medical Centre is committed to providing comprehensive healthcare services to students, faculty, and staff. The centre is equipped with modern medical facilities and staffed by qualified healthcare professionals.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="border rounded p-4 bg-gray-50">
                  <h3 className="text-lg font-semibold text-iare-blue mb-2">Primary Healthcare Services</h3>
                  <ul className="list-disc pl-6">
                    <li className="mb-1">General medical consultations</li>
                    <li className="mb-1">First aid and emergency care</li>
                    <li className="mb-1">Basic diagnostic services</li>
                    <li className="mb-1">Health counseling</li>
                    <li className="mb-1">Referrals to specialists when needed</li>
                  </ul>
                </div>
                
                <div className="border rounded p-4 bg-gray-50">
                  <h3 className="text-lg font-semibold text-iare-blue mb-2">Preventive Healthcare</h3>
                  <ul className="list-disc pl-6">
                    <li className="mb-1">Regular health check-ups</li>
                    <li className="mb-1">Immunization programs</li>
                    <li className="mb-1">Health awareness campaigns</li>
                    <li className="mb-1">Fitness and wellness programs</li>
                    <li className="mb-1">Mental health support</li>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-iare-blue mb-2">Medical Staff</h3>
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="border rounded p-4 flex-1 bg-gray-50">
                  <p className="font-semibold mb-1">Dr. Suresh Kumar</p>
                  <p className="text-sm text-gray-600 mb-1">Chief Medical Officer</p>
                  <p className="text-sm mb-1">MBBS, MD (General Medicine)</p>
                  <p className="text-sm">Available: Monday to Friday</p>
                </div>
                
                <div className="border rounded p-4 flex-1 bg-gray-50">
                  <p className="font-semibold mb-1">Dr. Meena Sharma</p>
                  <p className="text-sm text-gray-600 mb-1">Medical Officer</p>
                  <p className="text-sm mb-1">MBBS</p>
                  <p className="text-sm">Available: Monday to Saturday</p>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-iare-blue mb-2">Facilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="border rounded p-3 bg-gray-50 text-center">
                  <p className="font-medium">Observation Room</p>
                </div>
                <div className="border rounded p-3 bg-gray-50 text-center">
                  <p className="font-medium">First Aid Station</p>
                </div>
                <div className="border rounded p-3 bg-gray-50 text-center">
                  <p className="font-medium">Pharmacy</p>
                </div>
                <div className="border rounded p-3 bg-gray-50 text-center">
                  <p className="font-medium">Ambulance Service</p>
                </div>
                <div className="border rounded p-3 bg-gray-50 text-center">
                  <p className="font-medium">Lab Collection Centre</p>
                </div>
                <div className="border rounded p-3 bg-gray-50 text-center">
                  <p className="font-medium">Isolation Room</p>
                </div>
              </div>
              
              <div className="bg-iare-lightblue p-4 rounded-lg border border-iare-teal">
                <h3 className="text-lg font-semibold text-iare-blue mb-3">Medical Centre Contact Information</h3>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center">
                    <Clock className="text-iare-teal mr-2" size={18} />
                    <p>Operating Hours: 8:00 AM to 6:00 PM (Monday to Saturday)</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-iare-teal mr-2" size={18} />
                    <p>Emergency Contact: +91-9876543210</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="text-iare-teal mr-2" size={18} />
                    <p>Email: medical.centre@iare.ac.in</p>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-iare-teal mr-2" size={18} />
                    <p>Location: Ground Floor, Administrative Block</p>
                  </div>
                </div>
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
