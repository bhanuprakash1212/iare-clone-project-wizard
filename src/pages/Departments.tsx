
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, Phone } from 'lucide-react';

const Departments = () => {
  const facultyMembers = [
    {
      name: "Dr. L. V. Narasimha Prasad",
      position: "Professor & Head of Department",
      qualification: "Ph.D, M.Tech, B.Tech",
      specialization: "Data Mining, Web Technologies, IoT",
      experience: "22+ years",
      image: "/placeholder.svg",
      email: "hod.cse@iare.ac.in",
      phone: "+91-9490182900"
    },
    {
      name: "Dr. M. Purnachandra Rao",
      position: "Professor",
      qualification: "Ph.D, M.Tech, B.Tech",
      specialization: "Artificial Intelligence, Machine Learning, Deep Learning",
      experience: "18+ years",
      image: "/placeholder.svg",
      email: "purnachandra.cse@iare.ac.in",
      phone: "+91-9898765432"
    },
    {
      name: "Dr. B. Padmaja Rani",
      position: "Professor",
      qualification: "Ph.D, M.Tech, B.Tech",
      specialization: "Data Science, Big Data Analytics, Cloud Computing",
      experience: "20+ years",
      image: "/placeholder.svg",
      email: "padmaja.cse@iare.ac.in",
      phone: "+91-9876543210"
    },
    {
      name: "Dr. S. Vishwanadha Raju",
      position: "Professor",
      qualification: "Ph.D, M.Tech, B.E",
      specialization: "Computer Networks, Information Security",
      experience: "19+ years",
      image: "/placeholder.svg",
      email: "vishwanadha.cse@iare.ac.in",
      phone: "+91-9876543211"
    },
    {
      name: "Dr. J. Sasi Kiran",
      position: "Associate Professor",
      qualification: "Ph.D, M.Tech, B.Tech",
      specialization: "Software Engineering, Web Services",
      experience: "14+ years",
      image: "/placeholder.svg",
      email: "sasikiran.cse@iare.ac.in",
      phone: "+91-9876543212"
    },
    {
      name: "Dr. G. Karuna",
      position: "Associate Professor",
      qualification: "Ph.D, M.Tech, B.Tech",
      specialization: "Databases, Data Warehousing",
      experience: "12+ years",
      image: "/placeholder.svg",
      email: "karuna.cse@iare.ac.in",
      phone: "+91-9876543213"
    },
    {
      name: "Mrs. T. Sumalatha",
      position: "Assistant Professor",
      qualification: "M.Tech, B.Tech",
      specialization: "Computer Graphics, Human Computer Interaction",
      experience: "10+ years",
      image: "/placeholder.svg",
      email: "sumalatha.cse@iare.ac.in",
      phone: "+91-9876543214"
    },
    {
      name: "Mr. K. Srinivas",
      position: "Assistant Professor",
      qualification: "M.Tech, B.Tech",
      specialization: "Operating Systems, Computer Architecture",
      experience: "8+ years",
      image: "/placeholder.svg",
      email: "srinivas.cse@iare.ac.in",
      phone: "+91-9876543215"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="container mx-auto my-6 px-4">
        <div className="bg-iare-gray p-2 mb-4">
          <nav className="text-sm">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <Link to="/" className="text-iare-blue hover:text-iare-teal">Home</Link>
                <span className="mx-2">/</span>
              </li>
              <li className="flex items-center text-gray-500">Departments</li>
            </ol>
          </nav>
        </div>
        
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-iare-blue border-b-2 border-iare-teal pb-2 mb-4">Department of Computer Science and Engineering</h1>
          
          <div className="bg-white p-6 border rounded shadow-sm mb-8">
            <h2 className="text-xl font-semibold text-iare-maroon mb-4">About the Department</h2>
            
            <p className="mb-4">
              The Department of Computer Science and Engineering was established in the year 2001. The department offers B.Tech program 
              in Computer Science and Engineering with an intake of 300 students, M.Tech program in Computer Science and Engineering with 
              an intake of 18 students, and Ph.D program. The department has state-of-the-art infrastructure and computing equipment supported 
              by high-speed internet connections.
            </p>
            
            <p className="mb-6">
              The department has a team of well qualified and experienced faculty members with specializations in various domains of Computer 
              Science and Engineering. The faculty members are actively engaged in research and development activities in emerging areas like 
              Artificial Intelligence, Machine Learning, Deep Learning, Data Analytics, Cloud Computing, Internet of Things, etc.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded p-4 bg-gray-50">
                <h3 className="font-semibold text-iare-blue mb-2">Vision</h3>
                <p className="text-sm">
                  To evolve into a center of excellence in Computer Science and Engineering, producing competent professionals 
                  with research and innovation capabilities to solve real-world problems.
                </p>
              </div>
              
              <div className="border rounded p-4 bg-gray-50">
                <h3 className="font-semibold text-iare-blue mb-2">Mission</h3>
                <p className="text-sm">
                  To provide quality education, research opportunities, and industry exposure to create technically competent 
                  and socially responsible computer science professionals.
                </p>
              </div>
              
              <div className="border rounded p-4 bg-gray-50">
                <h3 className="font-semibold text-iare-blue mb-2">Quick Facts</h3>
                <ul className="text-sm list-disc pl-4">
                  <li>Established: 2001</li>
                  <li>B.Tech Intake: 300</li>
                  <li>M.Tech Intake: 18</li>
                  <li>Faculty Strength: 52</li>
                  <li>Research Publications: 500+</li>
                  <li>Patents: 15</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 border rounded shadow-sm mb-8">
            <h2 className="text-xl font-semibold text-iare-maroon mb-4">Programs Offered</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border">
                <thead>
                  <tr className="bg-iare-teal text-white">
                    <th className="py-2 px-4 border">Program</th>
                    <th className="py-2 px-4 border">Duration</th>
                    <th className="py-2 px-4 border">Intake</th>
                    <th className="py-2 px-4 border">Eligibility</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border">B.Tech in Computer Science and Engineering</td>
                    <td className="py-2 px-4 border">4 Years</td>
                    <td className="py-2 px-4 border">300</td>
                    <td className="py-2 px-4 border">10+2 with Mathematics, Physics, Chemistry</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="py-2 px-4 border">M.Tech in Computer Science and Engineering</td>
                    <td className="py-2 px-4 border">2 Years</td>
                    <td className="py-2 px-4 border">18</td>
                    <td className="py-2 px-4 border">B.Tech/B.E in CSE or equivalent</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border">Ph.D in Computer Science and Engineering</td>
                    <td className="py-2 px-4 border">Min. 3 Years</td>
                    <td className="py-2 px-4 border">Variable</td>
                    <td className="py-2 px-4 border">M.Tech/M.E in relevant discipline</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-white p-6 border rounded shadow-sm mb-8">
            <h2 className="text-xl font-semibold text-iare-maroon mb-6">Faculty Members</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facultyMembers.map((faculty, index) => (
                <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
                  <div className="p-4">
                    <div className="flex items-center mb-3">
                      <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden mr-3">
                        <img src={faculty.image} alt={faculty.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-iare-blue">{faculty.name}</h3>
                        <p className="text-sm text-gray-600">{faculty.position}</p>
                      </div>
                    </div>
                    
                    <div className="text-sm">
                      <p className="mb-1"><strong>Qualification:</strong> {faculty.qualification}</p>
                      <p className="mb-1"><strong>Specialization:</strong> {faculty.specialization}</p>
                      <p className="mb-3"><strong>Experience:</strong> {faculty.experience}</p>
                      
                      <div className="flex items-center text-iare-teal mb-1">
                        <Mail size={14} className="mr-1" />
                        <a href={`mailto:${faculty.email}`} className="text-iare-teal hover:underline">{faculty.email}</a>
                      </div>
                      <div className="flex items-center text-iare-teal">
                        <Phone size={14} className="mr-1" />
                        <span>{faculty.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <Link to="#" className="inline-block bg-iare-teal text-white px-4 py-2 rounded hover:bg-iare-blue transition-colors">
                View All Faculty Members
              </Link>
            </div>
          </div>
          
          <div className="bg-white p-6 border rounded shadow-sm mb-8">
            <h2 className="text-xl font-semibold text-iare-maroon mb-4">Research Areas</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="border p-4 rounded">
                <h3 className="font-medium text-iare-teal mb-2">Artificial Intelligence & Machine Learning</h3>
                <p className="text-sm">Research on advanced algorithms, neural networks, deep learning architectures, natural language processing, and their applications in various domains.</p>
              </div>
              <div className="border p-4 rounded">
                <h3 className="font-medium text-iare-teal mb-2">Big Data Analytics</h3>
                <p className="text-sm">Research on data processing frameworks, analytics algorithms, mining techniques, and visualization for extracting insights from large datasets.</p>
              </div>
              <div className="border p-4 rounded">
                <h3 className="font-medium text-iare-teal mb-2">Internet of Things</h3>
                <p className="text-sm">Research on IoT architectures, protocols, security, edge computing, and applications in smart cities, healthcare, agriculture, etc.</p>
              </div>
              <div className="border p-4 rounded">
                <h3 className="font-medium text-iare-teal mb-2">Cybersecurity</h3>
                <p className="text-sm">Research on network security, cryptography, intrusion detection, secure computing, blockchain, and privacy-preserving techniques.</p>
              </div>
              <div className="border p-4 rounded">
                <h3 className="font-medium text-iare-teal mb-2">Cloud Computing</h3>
                <p className="text-sm">Research on virtualization, resource management, service models, distributed computing, and cloud security.</p>
              </div>
              <div className="border p-4 rounded">
                <h3 className="font-medium text-iare-teal mb-2">Software Engineering</h3>
                <p className="text-sm">Research on software development methodologies, testing, quality assurance, and software project management.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 border rounded shadow-sm">
            <h2 className="text-xl font-semibold text-iare-maroon mb-4">Laboratories</h2>
            
            <p className="mb-6">
              The department has well-equipped laboratories with the latest hardware and software resources to support teaching, 
              learning, and research activities. Each laboratory is designed to provide hands-on experience to students in various 
              domains of Computer Science and Engineering.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border p-4 rounded">
                <h3 className="font-medium text-iare-teal mb-1">Programming Lab</h3>
                <p className="text-sm">For basic and advanced programming courses in C, C++, Java, Python</p>
              </div>
              <div className="border p-4 rounded">
                <h3 className="font-medium text-iare-teal mb-1">Database Systems Lab</h3>
                <p className="text-sm">For database design, SQL, DBMS, data warehousing</p>
              </div>
              <div className="border p-4 rounded">
                <h3 className="font-medium text-iare-teal mb-1">Network Programming Lab</h3>
                <p className="text-sm">For computer networks, protocols, socket programming</p>
              </div>
              <div className="border p-4 rounded">
                <h3 className="font-medium text-iare-teal mb-1">AI & ML Lab</h3>
                <p className="text-sm">For machine learning, deep learning, NLP, computer vision</p>
              </div>
              <div className="border p-4 rounded">
                <h3 className="font-medium text-iare-teal mb-1">Web Technologies Lab</h3>
                <p className="text-sm">For web development, frameworks, full-stack development</p>
              </div>
              <div className="border p-4 rounded">
                <h3 className="font-medium text-iare-teal mb-1">IoT & Cloud Computing Lab</h3>
                <p className="text-sm">For IoT applications, cloud services, virtualization</p>
              </div>
              <div className="border p-4 rounded">
                <h3 className="font-medium text-iare-teal mb-1">Research Lab</h3>
                <p className="text-sm">Advanced computing resources for research scholars</p>
              </div>
              <div className="border p-4 rounded">
                <h3 className="font-medium text-iare-teal mb-1">Security Lab</h3>
                <p className="text-sm">For cybersecurity, cryptography, network security</p>
              </div>
              <div className="border p-4 rounded">
                <h3 className="font-medium text-iare-teal mb-1">Project Lab</h3>
                <p className="text-sm">Dedicated space for student projects and innovation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Departments;
