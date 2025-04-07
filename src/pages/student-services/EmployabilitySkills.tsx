
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';

const EmployabilitySkills = () => {
  const skillsOffered = [
    {
      category: "Technical Skills",
      skills: [
        "Advanced Programming (Python, Java, C++)",
        "Full Stack Web Development",
        "Mobile App Development",
        "Cloud Computing Technologies",
        "Data Science and Analytics",
        "Artificial Intelligence and Machine Learning",
        "DevOps and CI/CD Pipelines",
        "Cybersecurity Fundamentals"
      ]
    },
    {
      category: "Soft Skills",
      skills: [
        "Communication Skills",
        "Team Collaboration",
        "Problem-Solving",
        "Critical Thinking",
        "Time Management",
        "Emotional Intelligence",
        "Leadership and Management",
        "Conflict Resolution"
      ]
    },
    {
      category: "Career Readiness",
      skills: [
        "Resume Building",
        "Interview Preparation",
        "Professional Networking",
        "Personal Branding",
        "Business Communication",
        "Presentation Skills",
        "Workplace Ethics",
        "Industry Knowledge"
      ]
    }
  ];

  const programStructure = [
    {
      title: "Career Assessment",
      description: "Personalized assessment to identify strengths, weaknesses, and career alignment."
    },
    {
      title: "Skill Development Workshops",
      description: "Intensive training sessions focusing on industry-relevant technical and soft skills."
    },
    {
      title: "Industry Interaction Sessions",
      description: "Regular interactions with industry experts providing insights into current industry trends and expectations."
    },
    {
      title: "Mock Interviews",
      description: "Simulated interview sessions with feedback from industry professionals and career counselors."
    },
    {
      title: "Internship Opportunities",
      description: "Facilitation of internships with partner companies to gain practical industry experience."
    },
    {
      title: "Placement Preparation",
      description: "Comprehensive preparation for campus placements including aptitude tests, group discussions, and interviews."
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
                <li className="flex items-center text-gray-500">Career and Employability Skills</li>
              </ol>
            </nav>
          </div>
          
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-iare-blue border-b-2 border-iare-teal pb-2 mb-4">Career and Employability Skills</h1>
            
            <div className="bg-white p-6 border rounded shadow-sm">
              <h2 className="text-xl font-semibold text-iare-maroon mb-4">Bridging the Gap Between Academia and Industry</h2>
              
              <div className="mb-6">
                <p className="mb-4">
                  IARE's Career and Employability Skills program is designed to prepare students for successful professional careers 
                  by developing industry-relevant skills, knowledge, and attitudes. This comprehensive program bridges the gap between 
                  academic learning and industry requirements, making our students job-ready from day one.
                </p>
                
                <div className="bg-iare-lightblue p-4 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-iare-blue mb-2">Program Highlights</h3>
                  <ul className="list-disc pl-6">
                    <li className="mb-1">Industry-aligned curriculum developed in collaboration with leading companies</li>
                    <li className="mb-1">Hands-on training with real-world projects and case studies</li>
                    <li className="mb-1">Personalized career guidance and mentorship</li>
                    <li className="mb-1">Certification courses for enhanced employability</li>
                    <li className="mb-1">Internship opportunities with partner organizations</li>
                    <li className="mb-1">Regular industry talks and workshops by professionals</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-iare-blue mb-4">Skills Development Offerings</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {skillsOffered.map((skillCategory, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
                      <div className="bg-iare-teal text-white p-3">
                        <h4 className="font-medium">{skillCategory.category}</h4>
                      </div>
                      <div className="p-4">
                        <ul className="list-disc pl-5">
                          {skillCategory.skills.map((skill, idx) => (
                            <li key={idx} className="text-sm mb-1">{skill}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-iare-blue mb-4">Program Structure</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {programStructure.map((item, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded border">
                      <h4 className="font-medium text-iare-blue mb-2">{item.title}</h4>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-iare-blue mb-4">Industry Partners</h3>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                  {[...Array(6)].map((_, index) => (
                    <div key={index} className="bg-white p-3 border rounded flex items-center justify-center h-20">
                      <img src="/placeholder.svg" alt={`Partner ${index + 1}`} className="max-h-full max-w-full" />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-center mt-2">Our industry partners contribute to curriculum development, provide internships, and participate in campus placements.</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-iare-blue mb-4">Success Stories</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[...Array(3)].map((_, index) => (
                    <div key={index} className="bg-white border rounded-lg overflow-hidden shadow-sm">
                      <div className="h-48 bg-gray-200">
                        <img src="/placeholder.svg" alt={`Student ${index + 1}`} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-4">
                        <h4 className="font-medium text-iare-blue mb-1">Student Name</h4>
                        <p className="text-sm text-gray-500 mb-2">BTech CSE, Batch 2022</p>
                        <p className="text-sm mb-2">Currently at: Google</p>
                        <p className="text-sm italic">
                          "The Career and Employability Skills program at IARE played a crucial role in preparing me for my dream job. 
                          The mock interviews and industry exposure were particularly helpful."
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-iare-lightblue p-4 rounded-lg border border-iare-teal">
                <h3 className="text-lg font-semibold text-iare-blue mb-2">Join Our Career Development Program</h3>
                <p className="mb-4">
                  Students can enroll in our Career and Employability Skills program starting from their second year of studies. 
                  The program is designed to provide continuous skill development throughout your academic journey at IARE.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div>
                    <p className="mb-1"><strong>Contact:</strong> Career Development Cell</p>
                    <p className="mb-1"><strong>Email:</strong> career.development@iare.ac.in</p>
                    <p><strong>Phone:</strong> +91-9876543210</p>
                  </div>
                  <button className="mt-4 md:mt-0 bg-iare-blue text-white px-4 py-2 rounded hover:bg-iare-darkblue transition-colors">
                    Register Now
                  </button>
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

export default EmployabilitySkills;
