
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';

const SupportHub = () => {
  const supportServices = [
    {
      title: "Academic Support",
      description: "Personalized academic assistance including tutoring, supplementary lectures, and concept clarification sessions.",
      features: [
        "One-on-one tutoring with faculty members",
        "Peer-assisted learning programs",
        "Remedial classes for challenging subjects",
        "Study skill workshops",
        "Academic progress monitoring and intervention"
      ]
    },
    {
      title: "Learning Resources",
      description: "Comprehensive learning resources to support independent and guided learning experiences.",
      features: [
        "Digital library with e-books and journals",
        "Video lectures and learning modules",
        "Interactive learning materials",
        "Practice problem sets and solutions",
        "Self-assessment tools and practice tests"
      ]
    },
    {
      title: "Special Needs Support",
      description: "Tailored support services for students with learning difficulties or special educational needs.",
      features: [
        "Individual education plans",
        "Assistive technology resources",
        "Specialized learning materials",
        "Modified assessment methods when appropriate",
        "Accessibility services and accommodations"
      ]
    },
    {
      title: "Language Support",
      description: "English language proficiency development for academic and professional communication.",
      features: [
        "English language enhancement courses",
        "Communication skills workshops",
        "Technical writing support",
        "Presentation skills development",
        "Language proficiency assessment and feedback"
      ]
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
                <li className="flex items-center text-gray-500">Student Learning Support Hub</li>
              </ol>
            </nav>
          </div>

          <div className="mb-6">
            <h1 className="text-2xl font-bold text-iare-blue border-b-2 border-iare-teal pb-2 mb-4">Student Learning Support Hub</h1>

            <div className="bg-white p-6 border rounded shadow-sm">
              <h2 className="text-xl font-semibold text-iare-maroon mb-4">Empowering Academic Success</h2>

              <div className="mb-6">
                <div className="relative h-64 overflow-hidden rounded-lg mb-6">
                  <img
                    src="/placeholder.svg"
                    alt="Student Learning Support Hub"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-iare-blue/70 to-transparent flex items-center">
                    <div className="text-white p-6 md:p-12 max-w-lg">
                      <h3 className="text-2xl font-bold mb-2">Your Success, Our Mission</h3>
                      <p className="text-sm md:text-base">
                        The Student Learning Support Hub provides comprehensive academic support services to help you achieve
                        your full potential and excel in your studies at IARE.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mb-4">
                  The Student Learning Support Hub at Sri Venkateswara University College of Engineering serves as a centralized academic resource center dedicated to supporting students throughout their learning journey. Our goal is to provide personalized guidance, resources, and interventions tailored to meet individual academic needs and challenges.
                </p>

                <p className="mb-4">
                  Whether students need help with difficult subjects, want to improve study strategies, or require special learning accommodations, the Support Hub is committed to helping every student achieve academic success and reach their full potential.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-iare-blue mb-4">Our Support Services</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {supportServices.map((service, index) => (
                    <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
                      <div className="bg-iare-teal text-white p-4">
                        <h4 className="font-medium">{service.title}</h4>
                      </div>
                      <div className="p-4">
                        <p className="text-sm mb-3">{service.description}</p>
                        <h5 className="font-medium text-sm mb-2">Key Features:</h5>
                        <ul className="list-disc pl-5 text-sm">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="mb-1">{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-iare-blue mb-4">How It Works</h3>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                  <div className="border rounded p-4">
                    <div className="w-12 h-12 bg-iare-teal text-white rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="font-bold">1</span>
                    </div>
                    <h4 className="font-medium text-iare-blue mb-2">Assessment</h4>
                    <p className="text-sm">Initial assessment to identify learning needs and challenges</p>
                  </div>

                  <div className="border rounded p-4">
                    <div className="w-12 h-12 bg-iare-teal text-white rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="font-bold">2</span>
                    </div>
                    <h4 className="font-medium text-iare-blue mb-2">Planning</h4>
                    <p className="text-sm">Development of personalized learning support plan</p>
                  </div>

                  <div className="border rounded p-4">
                    <div className="w-12 h-12 bg-iare-teal text-white rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="font-bold">3</span>
                    </div>
                    <h4 className="font-medium text-iare-blue mb-2">Intervention</h4>
                    <p className="text-sm">Implementation of support services and resources</p>
                  </div>

                  <div className="border rounded p-4">
                    <div className="w-12 h-12 bg-iare-teal text-white rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="font-bold">4</span>
                    </div>
                    <h4 className="font-medium text-iare-blue mb-2">Monitoring</h4>
                    <p className="text-sm">Continuous progress tracking and plan adjustment</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-iare-blue mb-4">Support Hub Schedule</h3>

                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border">
                    <thead>
                      <tr className="bg-iare-teal text-white">
                        <th className="py-2 px-4 border">Day</th>
                        <th className="py-2 px-4 border">Morning Session (9:00 AM - 12:00 PM)</th>
                        <th className="py-2 px-4 border">Afternoon Session (1:00 PM - 5:00 PM)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border font-medium">Monday</td>
                        <td className="py-2 px-4 border">Mathematics, Physics, Chemistry</td>
                        <td className="py-2 px-4 border">Programming Languages, Data Structures</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-2 px-4 border font-medium">Tuesday</td>
                        <td className="py-2 px-4 border">Electronics, Electrical Engineering</td>
                        <td className="py-2 px-4 border">Computer Networks, Operating Systems</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border font-medium">Wednesday</td>
                        <td className="py-2 px-4 border">Study Skills Workshop, Language Support</td>
                        <td className="py-2 px-4 border">Database Systems, Web Technologies</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-2 px-4 border font-medium">Thursday</td>
                        <td className="py-2 px-4 border">Mechanical Systems, Thermodynamics</td>
                        <td className="py-2 px-4 border">AI/ML, Data Science, Cloud Computing</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border font-medium">Friday</td>
                        <td className="py-2 px-4 border">Control Systems, Digital Logic</td>
                        <td className="py-2 px-4 border">Mobile App Development, Software Engineering</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="py-2 px-4 border font-medium">Saturday</td>
                        <td colSpan={2} className="py-2 px-4 border text-center">Special Sessions & Appointments Only</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-center mt-2">Schedule is subject to change. Please check the Support Hub notice board for updates.</p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-iare-blue mb-4">Success Stories</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[...Array(3)].map((_, index) => (
                    <div key={index} className="border p-4 rounded bg-gray-50">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-3">
                          <img src="/placeholder.svg" alt={`Student ${index + 1}`} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h4 className="font-medium text-iare-blue">Student Name</h4>
                          <p className="text-xs text-gray-500">BTech CSE</p>
                        </div>
                      </div>
                      <p className="text-sm italic">
                        "The Support Hub's assistance helped me overcome my challenges in advanced mathematics.
                        The personalized tutoring sessions and resources transformed my understanding and performance."
                      </p>
                    </div>
                  ))}
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

export default SupportHub;
