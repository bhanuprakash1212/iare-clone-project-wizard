
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';

const Certifications = () => {
  const certificationPrograms = [
    { 
      category: "Technical",
      programs: [
        { name: "Microsoft Azure Fundamentals", provider: "Microsoft", duration: "4 weeks" },
        { name: "AWS Solutions Architect", provider: "Amazon Web Services", duration: "8 weeks" },
        { name: "Google Cloud Associate Engineer", provider: "Google", duration: "6 weeks" },
        { name: "Cisco Certified Network Associate", provider: "Cisco", duration: "10 weeks" },
        { name: "Oracle Database SQL Certified Associate", provider: "Oracle", duration: "6 weeks" }
      ]
    },
    {
      category: "Professional",
      programs: [
        { name: "Project Management Professional (PMP)", provider: "PMI", duration: "12 weeks" },
        { name: "Six Sigma Green Belt", provider: "IASSC", duration: "8 weeks" },
        { name: "Certified Ethical Hacker", provider: "EC-Council", duration: "6 weeks" },
        { name: "ITIL Foundation", provider: "Axelos", duration: "4 weeks" },
        { name: "Scrum Master Certification", provider: "Scrum Alliance", duration: "4 weeks" }
      ]
    },
    {
      category: "Domain-Specific",
      programs: [
        { name: "TensorFlow Developer Certificate", provider: "Google", duration: "8 weeks" },
        { name: "Certified Data Scientist", provider: "IBM", duration: "12 weeks" },
        { name: "Full Stack Web Developer", provider: "Udacity", duration: "16 weeks" },
        { name: "Automotive SPICE Professional", provider: "intacs", duration: "6 weeks" },
        { name: "Certified Blockchain Developer", provider: "Blockchain Council", duration: "10 weeks" }
      ]
    }
  ];

  const successStories = [
    { 
      student: "Rahul Sharma", 
      batch: "CSE 2025", 
      certification: "AWS Solutions Architect", 
      outcome: "Secured internship at Amazon with 60,000 per month stipend."
    },
    { 
      student: "Priya Patel", 
      batch: "IT 2024", 
      certification: "Microsoft Azure Developer", 
      outcome: "Received pre-placement offer from Microsoft with 25 LPA package."
    },
    { 
      student: "Karthik Reddy", 
      batch: "CSE 2023", 
      certification: "TensorFlow Developer", 
      outcome: "Selected for AI research position at Google India."
    },
    { 
      student: "Ananya Singh", 
      batch: "ECE 2024", 
      certification: "CCNA & CCNP", 
      outcome: "Placed at Cisco with 18 LPA package."
    }
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
                <li className="flex items-center text-gray-500">Certifications</li>
              </ol>
            </nav>
          </div>
          
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-iare-blue border-b-2 border-iare-teal pb-2 mb-4">Certifications</h1>
            
            <div className="bg-white p-6 shadow-md rounded mb-6">
              <h2 className="text-xl font-semibold text-iare-maroon mb-4">About Certification Programs</h2>
              
              <p className="mb-4">
                IARE offers a wide range of certification programs to enhance students' technical skills and industry 
                readiness. These certifications are recognized globally and add significant value to students' profiles, 
                improving their employability and career prospects.
              </p>
              
              <p className="mb-4">
                The institute has partnered with leading organizations and certification providers to offer special rates, 
                training, and support for students pursuing these certifications. Many of these certification programs 
                are integrated with the curriculum to ensure that students can manage them alongside their regular studies.
              </p>
              
              <div className="bg-iare-lightblue p-4 rounded mb-6">
                <h3 className="font-semibold text-iare-blue mb-2">Benefits of Certifications</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Industry-recognized validation of skills</li>
                  <li>Increased job opportunities and higher placement rates</li>
                  <li>Competitive edge over peers in placement interviews</li>
                  <li>Practical knowledge beyond academic curriculum</li>
                  <li>Higher salary packages and faster career growth</li>
                </ul>
              </div>
              
              <h2 className="text-xl font-semibold text-iare-maroon mb-4 mt-6">Available Certification Programs</h2>
              
              {certificationPrograms.map((category, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-lg font-semibold text-iare-blue bg-gray-100 p-2 rounded mb-3">
                    {category.category} Certifications
                  </h3>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full border rounded">
                      <thead>
                        <tr className="bg-iare-teal text-white">
                          <th className="py-2 px-4 text-left">Certification Name</th>
                          <th className="py-2 px-4 text-left">Provider</th>
                          <th className="py-2 px-4 text-left">Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.programs.map((program, idx) => (
                          <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            <td className="py-2 px-4 border-b">{program.name}</td>
                            <td className="py-2 px-4 border-b">{program.provider}</td>
                            <td className="py-2 px-4 border-b">{program.duration}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
              
              <h2 className="text-xl font-semibold text-iare-maroon mb-4">Certification Process</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mb-6">
                <div className="bg-iare-gray p-3 rounded text-center">
                  <div className="bg-iare-blue text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">1</div>
                  <h3 className="font-semibold text-sm mb-1">Selection</h3>
                  <p className="text-xs">Choose a certification that aligns with your career goals</p>
                </div>
                
                <div className="bg-iare-gray p-3 rounded text-center">
                  <div className="bg-iare-blue text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">2</div>
                  <h3 className="font-semibold text-sm mb-1">Registration</h3>
                  <p className="text-xs">Register through the certification portal with faculty recommendation</p>
                </div>
                
                <div className="bg-iare-gray p-3 rounded text-center">
                  <div className="bg-iare-blue text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">3</div>
                  <h3 className="font-semibold text-sm mb-1">Training</h3>
                  <p className="text-xs">Complete the required training through guided sessions</p>
                </div>
                
                <div className="bg-iare-gray p-3 rounded text-center">
                  <div className="bg-iare-blue text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">4</div>
                  <h3 className="font-semibold text-sm mb-1">Examination</h3>
                  <p className="text-xs">Take the certification exam at the designated center</p>
                </div>
              </div>
              
              <h2 className="text-xl font-semibold text-iare-maroon mb-4">Student Success Stories</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {successStories.map((story, index) => (
                  <div key={index} className="bg-iare-lightblue p-4 rounded shadow-sm">
                    <h3 className="font-semibold text-iare-blue mb-1">{story.student}</h3>
                    <p className="text-sm mb-1"><strong>Batch:</strong> {story.batch}</p>
                    <p className="text-sm mb-1"><strong>Certification:</strong> {story.certification}</p>
                    <p className="text-sm"><strong>Outcome:</strong> {story.outcome}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-iare-lightblue p-4 rounded-lg border border-iare-teal">
                <h3 className="text-lg font-semibold text-iare-blue mb-2">Contact Certification Cell</h3>
                <p className="mb-1"><strong>Dr. Rajesh Kumar</strong></p>
                <p className="mb-1">Coordinator, Professional Certifications</p>
                <p className="mb-1">Email: certifications@iare.ac.in</p>
                <p>Phone: +91-9876543250</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Certifications;
