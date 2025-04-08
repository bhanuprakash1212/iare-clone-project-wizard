
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Award, BookOpen, BookText, Building, Clock, Glasses, GraduationCap, Heart, Server, Target, Users, BookCheck, Coffee, Cpu, Database, Globe, Code } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const AboutUs = () => {
  const coreValues = [
    {
      icon: <Heart className="h-10 w-10 text-iare-maroon" />,
      title: "Excellence",
      description: "Commitment to excellence in all academic and professional pursuits."
    },
    {
      icon: <BookOpen className="h-10 w-10 text-iare-maroon" />,
      title: "Innovation",
      description: "Fostering creativity and promoting innovation in engineering education."
    },
    {
      icon: <Users className="h-10 w-10 text-iare-maroon" />,
      title: "Integrity",
      description: "Maintaining ethical standards and promoting academic integrity."
    },
    {
      icon: <Award className="h-10 w-10 text-iare-maroon" />,
      title: "Inclusivity",
      description: "Embracing diversity and providing equal opportunities for all."
    },
    {
      icon: <Target className="h-10 w-10 text-iare-maroon" />,
      title: "Social Responsibility",
      description: "Encouraging community service and sustainable practices."
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-iare-maroon" />,
      title: "Student-Centered",
      description: "Prioritizing student welfare and holistic development."
    }
  ];

  const milestones = [
    { year: "1985", event: "Establishment of the Institute of Advanced Computing Studies." },
    { year: "1995", event: "Upgraded to a fully-fledged engineering college." },
    { year: "2001", event: "Introduction of Computer Science & Engineering program." },
    { year: "2006", event: "Achieved Autonomous Status from UGC." },
    { year: "2012", event: "Accredited by NAAC with 'A' Grade." },
    { year: "2016", event: "Ranked among Top 100 Engineering Institutions by NIRF." },
    { year: "2019", event: "Established Center for Advanced Research and Innovation." },
    { year: "2022", event: "Secured NAAC A++ accreditation with 3.65 CGPA." },
    { year: "2024", event: "Celebrated 25 years of academic excellence." }
  ];

  const departmentFeatures = [
    {
      icon: <Cpu className="h-8 w-8 text-iare-teal" />,
      title: "Modern Curriculum",
      description: "Regularly updated curriculum focusing on cutting-edge technologies including AI, ML, and Cloud Computing."
    },
    {
      icon: <Database className="h-8 w-8 text-iare-teal" />,
      title: "Research Labs",
      description: "State-of-the-art research laboratories for Big Data Analytics, IoT, and Cybersecurity."
    },
    {
      icon: <Globe className="h-8 w-8 text-iare-teal" />,
      title: "Industry Connections",
      description: "Strong partnerships with leading tech companies for internships and placements."
    },
    {
      icon: <Code className="h-8 w-8 text-iare-teal" />,
      title: "Coding Culture",
      description: "Regular hackathons, coding competitions, and tech workshops."
    },
    {
      icon: <Server className="h-8 w-8 text-iare-teal" />,
      title: "Supercomputing Facility",
      description: "Access to high-performance computing resources for research and projects."
    },
    {
      icon: <BookCheck className="h-8 w-8 text-iare-teal" />,
      title: "Publications",
      description: "Over 200 research papers published in international journals and conferences annually."
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
              <li className="flex items-center text-gray-500">About Us</li>
            </ol>
          </nav>
        </div>
        
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-iare-blue border-b-2 border-iare-teal pb-2 mb-4">About The University</h1>
          
          {/* Hero Section */}
          <div className="bg-white p-6 border rounded shadow-sm mb-8 overflow-hidden">
            <div className="md:flex items-center">
              <div className="md:w-1/2 p-4">
                <h2 className="text-xl font-semibold text-iare-maroon mb-4">Welcome to SVUCE</h2>
                <p className="mb-4 text-gray-700">
                  SVUCE, established in 1985, is one of the premier technical institutions in India. 
                  We are committed to imparting quality education in engineering and technology and 
                  producing competent professionals with strong ethical values.
                </p>
                <p className="mb-4 text-gray-700">
                  With state-of-the-art infrastructure, dedicated faculty, and innovative teaching 
                  methodologies, we strive to create an environment that nurtures creativity, research, 
                  and entrepreneurship among students.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <Building className="w-5 h-5 text-iare-teal mr-2" />
                    <span className="text-sm font-medium">Established: 1985</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-iare-teal mr-2" />
                    <span className="text-sm font-medium">Students: 5000+</span>
                  </div>
                  <div className="flex items-center">
                    <BookText className="w-5 h-5 text-iare-teal mr-2" />
                    <span className="text-sm font-medium">Programs: 12</span>
                  </div>
                  <div className="flex items-center">
                    <Glasses className="w-5 h-5 text-iare-teal mr-2" />
                    <span className="text-sm font-medium">Faculty: 350+</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-4">
                <img 
                  src="/campus-hero.jpg" 
                  alt="SVUCE Campus" 
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder.svg';
                  }}
                />
              </div>
            </div>
          </div>
          
          {/* Department Overview - New Section */}
          <div className="bg-white p-6 border rounded shadow-sm mb-8">
            <h2 className="text-xl font-semibold text-iare-maroon mb-6">Department of Computer Science & Engineering</h2>
            
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="programs">Programs</TabsTrigger>
                <TabsTrigger value="research">Research Areas</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="pt-6">
                <div className="md:flex gap-8">
                  <div className="md:w-2/3">
                    <p className="mb-4 text-gray-700">
                      The Department of Computer Science and Engineering at SVUCE was established in 2001 with a vision to produce technically competent and socially responsible computer engineers. Over the years, the department has evolved into a center of excellence for computer science education and research.
                    </p>
                    <p className="mb-4 text-gray-700">
                      The department offers undergraduate, postgraduate, and doctoral programs in Computer Science and Engineering. Our curriculum is designed to provide a strong foundation in computer science fundamentals while exposing students to cutting-edge technologies such as Artificial Intelligence, Machine Learning, Big Data Analytics, and Cloud Computing.
                    </p>
                    <p className="text-gray-700">
                      With a team of highly qualified faculty members with diverse research interests, state-of-the-art laboratories, and strong industry connections, the department ensures that students receive a holistic education that prepares them for successful careers in academia and industry.
                    </p>
                  </div>
                  <div className="md:w-1/3 mt-4 md:mt-0">
                    <div className="bg-gray-50 p-4 rounded-lg border">
                      <h3 className="font-medium text-iare-blue mb-3">Quick Facts</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <Users className="w-4 h-4 text-iare-teal mr-2" />
                          <span>30+ Faculty Members</span>
                        </li>
                        <li className="flex items-center">
                          <GraduationCap className="w-4 h-4 text-iare-teal mr-2" />
                          <span>800+ Students</span>
                        </li>
                        <li className="flex items-center">
                          <Server className="w-4 h-4 text-iare-teal mr-2" />
                          <span>10 Specialized Labs</span>
                        </li>
                        <li className="flex items-center">
                          <Award className="w-4 h-4 text-iare-teal mr-2" />
                          <span>NBA Accredited Programs</span>
                        </li>
                        <li className="flex items-center">
                          <Globe className="w-4 h-4 text-iare-teal mr-2" />
                          <span>International Collaborations</span>
                        </li>
                        <li className="flex items-center">
                          <BookOpen className="w-4 h-4 text-iare-teal mr-2" />
                          <span>Digital Library Access</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
                  {departmentFeatures.map((feature, index) => (
                    <div key={index} className="border p-4 rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex items-start">
                        <div className="mr-4 p-2 bg-gray-50 rounded-full">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="font-medium text-iare-blue mb-1">{feature.title}</h3>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="programs" className="pt-6">
                <div className="space-y-6">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-iare-blue/10 px-4 py-3">
                      <h3 className="font-medium text-iare-blue">B.Tech in Computer Science and Engineering</h3>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600 mb-3">
                        A four-year undergraduate program that provides a strong foundation in computer science fundamentals, programming, data structures, algorithms, and software engineering.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <h4 className="text-sm font-medium text-iare-teal mb-2">Key Courses</h4>
                          <ul className="text-sm list-disc pl-5 space-y-1">
                            <li>Data Structures and Algorithms</li>
                            <li>Operating Systems</li>
                            <li>Database Management Systems</li>
                            <li>Computer Networks</li>
                            <li>Web Technologies</li>
                            <li>Artificial Intelligence</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-iare-teal mb-2">Career Opportunities</h4>
                          <ul className="text-sm list-disc pl-5 space-y-1">
                            <li>Software Developer</li>
                            <li>Systems Analyst</li>
                            <li>Web Developer</li>
                            <li>Database Administrator</li>
                            <li>Network Administrator</li>
                            <li>Software Tester</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-iare-blue/10 px-4 py-3">
                      <h3 className="font-medium text-iare-blue">M.Tech in Computer Science and Engineering</h3>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600 mb-3">
                        A two-year postgraduate program that offers specialized knowledge in advanced computer science topics and research methodologies.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <h4 className="text-sm font-medium text-iare-teal mb-2">Specializations</h4>
                          <ul className="text-sm list-disc pl-5 space-y-1">
                            <li>Artificial Intelligence & Machine Learning</li>
                            <li>Data Science</li>
                            <li>Cloud Computing</li>
                            <li>Cybersecurity</li>
                            <li>Software Engineering</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-iare-teal mb-2">Career Opportunities</h4>
                          <ul className="text-sm list-disc pl-5 space-y-1">
                            <li>Data Scientist</li>
                            <li>Machine Learning Engineer</li>
                            <li>Research Scientist</li>
                            <li>Solution Architect</li>
                            <li>Information Security Analyst</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-iare-blue/10 px-4 py-3">
                      <h3 className="font-medium text-iare-blue">Ph.D. in Computer Science and Engineering</h3>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600 mb-3">
                        A research-oriented doctoral program for those interested in pursuing academic or research careers in computer science.
                      </p>
                      <div className="mt-4">
                        <h4 className="text-sm font-medium text-iare-teal mb-2">Research Areas</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                          <div className="bg-gray-50 p-2 rounded text-sm">Artificial Intelligence</div>
                          <div className="bg-gray-50 p-2 rounded text-sm">Machine Learning</div>
                          <div className="bg-gray-50 p-2 rounded text-sm">Computer Vision</div>
                          <div className="bg-gray-50 p-2 rounded text-sm">Natural Language Processing</div>
                          <div className="bg-gray-50 p-2 rounded text-sm">Big Data Analytics</div>
                          <div className="bg-gray-50 p-2 rounded text-sm">Internet of Things</div>
                          <div className="bg-gray-50 p-2 rounded text-sm">Cybersecurity</div>
                          <div className="bg-gray-50 p-2 rounded text-sm">Cloud Computing</div>
                          <div className="bg-gray-50 p-2 rounded text-sm">Blockchain</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="research" className="pt-6">
                <div className="space-y-6">
                  <p className="text-gray-700">
                    The department is actively involved in cutting-edge research across various domains of computer science. Our faculty members and research scholars publish regularly in prestigious international journals and conferences.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-iare-teal/10 px-4 py-3">
                        <h3 className="font-medium text-iare-teal">Artificial Intelligence & Machine Learning</h3>
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-gray-600 mb-3">
                          Research in AI/ML focuses on developing intelligent systems that can learn from data and make decisions autonomously.
                        </p>
                        <ul className="text-sm list-disc pl-5 space-y-1">
                          <li>Deep Learning for Computer Vision</li>
                          <li>Natural Language Processing</li>
                          <li>Reinforcement Learning</li>
                          <li>Neural Network Architectures</li>
                          <li>Explainable AI</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-iare-teal/10 px-4 py-3">
                        <h3 className="font-medium text-iare-teal">Big Data Analytics</h3>
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-gray-600 mb-3">
                          Research in Big Data focuses on developing methods and tools to analyze and extract insights from large volumes of data.
                        </p>
                        <ul className="text-sm list-disc pl-5 space-y-1">
                          <li>Distributed Computing Frameworks</li>
                          <li>Data Mining Algorithms</li>
                          <li>Real-time Analytics</li>
                          <li>Data Visualization</li>
                          <li>Predictive Analytics</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-iare-teal/10 px-4 py-3">
                        <h3 className="font-medium text-iare-teal">Cybersecurity</h3>
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-gray-600 mb-3">
                          Research in Cybersecurity focuses on protecting systems, networks, and data from digital attacks.
                        </p>
                        <ul className="text-sm list-disc pl-5 space-y-1">
                          <li>Network Security</li>
                          <li>Cryptography</li>
                          <li>Intrusion Detection Systems</li>
                          <li>Secure Software Development</li>
                          <li>Blockchain Security</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-iare-teal/10 px-4 py-3">
                        <h3 className="font-medium text-iare-teal">Internet of Things</h3>
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-gray-600 mb-3">
                          Research in IoT focuses on connecting physical devices to the internet and enabling them to communicate and share data.
                        </p>
                        <ul className="text-sm list-disc pl-5 space-y-1">
                          <li>Sensor Networks</li>
                          <li>Edge Computing</li>
                          <li>IoT Security</li>
                          <li>Smart Systems</li>
                          <li>Embedded Systems</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border">
                    <h3 className="font-medium text-iare-blue mb-3">Research Infrastructure</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      The department has established several specialized research laboratories to support cutting-edge research:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-sm">
                      <div className="bg-white p-3 rounded border">AI & ML Research Lab</div>
                      <div className="bg-white p-3 rounded border">Big Data Analytics Lab</div>
                      <div className="bg-white p-3 rounded border">Cybersecurity Research Center</div>
                      <div className="bg-white p-3 rounded border">IoT Innovation Lab</div>
                      <div className="bg-white p-3 rounded border">Cloud Computing Lab</div>
                      <div className="bg-white p-3 rounded border">High-Performance Computing Center</div>
                      <div className="bg-white p-3 rounded border">Software Engineering Lab</div>
                      <div className="bg-white p-3 rounded border">Virtual Reality Lab</div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 border rounded shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-iare-teal p-3 rounded-full mr-4">
                  <Glasses className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-iare-maroon">Our Vision</h2>
              </div>
              <p className="text-gray-700">
                To evolve into a premier engineering institution that produces globally competent 
                graduates with strong technical knowledge, professional skills, and ethical values, 
                capable of addressing complex challenges and contributing to sustainable development.
              </p>
            </div>
            
            <div className="bg-white p-6 border rounded shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-iare-teal p-3 rounded-full mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-iare-maroon">Our Mission</h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Provide quality education through innovative teaching-learning methods.</li>
                <li>Foster research, innovation, and entrepreneurship among faculty and students.</li>
                <li>Establish strong industry-academia partnerships for practical exposure.</li>
                <li>Promote ethical values, professional attitudes, and leadership qualities.</li>
                <li>Create a vibrant campus culture that nurtures holistic development.</li>
              </ul>
            </div>
          </div>
          
          {/* Core Values */}
          <div className="bg-white p-6 border rounded shadow-sm mb-8">
            <h2 className="text-xl font-semibold text-iare-maroon mb-6 text-center">Core Values</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {coreValues.map((value, index) => (
                <div key={index} className="border rounded p-4 hover:shadow-md transition-shadow">
                  <div className="flex flex-col items-center text-center">
                    {value.icon}
                    <h3 className="font-semibold text-iare-blue mt-3 mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Milestones */}
          <div className="bg-white p-6 border rounded shadow-sm mb-8">
            <h2 className="text-xl font-semibold text-iare-maroon mb-6">Our Journey</h2>
            
            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-1/2 -ml-0.5 w-1 h-full bg-iare-teal"></div>
              
              {/* Events */}
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative ${index % 2 === 0 ? 'text-right pr-12 md:pr-16' : 'pl-12 md:pl-16'}`}>
                    <div className={`flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                      <div className={`${index % 2 === 0 ? 'order-2 ml-4' : 'order-1 mr-4'}`}>
                        <div className="absolute top-1/2 transform -translate-y-1/2 left-1/2 -ml-3 w-6 h-6 rounded-full bg-white border-4 border-iare-teal z-10"></div>
                        <div className={`bg-white p-4 rounded shadow-sm max-w-md ${index % 2 === 0 ? 'ml-auto' : ''}`}>
                          <div className="font-bold text-iare-teal">{milestone.year}</div>
                          <p className="text-gray-700">{milestone.event}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Leadership */}
          <div className="bg-white p-6 border rounded shadow-sm mb-8">
            <h2 className="text-xl font-semibold text-iare-maroon mb-6">University Leadership</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border rounded-lg overflow-hidden shadow-sm">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <img 
                    src="/placeholder.svg" 
                    alt="Vice Chancellor" 
                    className="w-36 h-36 object-cover rounded-full border-4 border-white"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-iare-blue">Prof. Ramachandra Rao</h3>
                  <p className="text-gray-600 text-sm mb-2">Vice Chancellor</p>
                  <p className="text-sm text-gray-700">
                    Ph.D. in Computer Science<br />
                    30+ years of academic experience
                  </p>
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden shadow-sm">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <img 
                    src="/placeholder.svg" 
                    alt="Pro Vice Chancellor" 
                    className="w-36 h-36 object-cover rounded-full border-4 border-white"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-iare-blue">Prof. Sunita Sharma</h3>
                  <p className="text-gray-600 text-sm mb-2">Pro Vice Chancellor</p>
                  <p className="text-sm text-gray-700">
                    Ph.D. in Electronics Engineering<br />
                    25+ years of research experience
                  </p>
                </div>
              </div>
              
              <div className="border rounded-lg overflow-hidden shadow-sm">
                <div className="bg-gray-200 h-48 flex items-center justify-center">
                  <img 
                    src="/placeholder.svg" 
                    alt="Registrar" 
                    className="w-36 h-36 object-cover rounded-full border-4 border-white"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-iare-blue">Dr. Vijay Kumar</h3>
                  <p className="text-gray-600 text-sm mb-2">Registrar</p>
                  <p className="text-sm text-gray-700">
                    Ph.D. in Administrative Sciences<br />
                    20+ years of administrative experience
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Link to="/about-us/leadership" className="inline-block bg-iare-teal text-white px-4 py-2 rounded hover:bg-iare-blue transition-colors">
                View Full Leadership Team
              </Link>
            </div>
          </div>
          
          {/* Accreditations */}
          <div className="bg-white p-6 border rounded shadow-sm">
            <h2 className="text-xl font-semibold text-iare-maroon mb-6">Accreditations & Rankings</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border p-4 rounded">
                <h3 className="font-medium text-iare-teal mb-3">Accreditations</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded mr-3">
                      <img src="/placeholder.svg" alt="NAAC" className="w-12 h-12 object-contain" />
                    </div>
                    <div>
                      <p className="font-medium">NAAC A++ Grade</p>
                      <p className="text-sm text-gray-600">CGPA: 3.65/4.00</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded mr-3">
                      <img src="/placeholder.svg" alt="NBA" className="w-12 h-12 object-contain" />
                    </div>
                    <div>
                      <p className="font-medium">NBA Accreditation</p>
                      <p className="text-sm text-gray-600">All eligible programs accredited</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded mr-3">
                      <img src="/placeholder.svg" alt="UGC" className="w-12 h-12 object-contain" />
                    </div>
                    <div>
                      <p className="font-medium">UGC Autonomous Status</p>
                      <p className="text-sm text-gray-600">Extended until 2029</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="border p-4 rounded">
                <h3 className="font-medium text-iare-teal mb-3">Rankings & Recognitions</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded mr-3">
                      <img src="/placeholder.svg" alt="NIRF" className="w-12 h-12 object-contain" />
                    </div>
                    <div>
                      <p className="font-medium">NIRF Ranking 2023</p>
                      <p className="text-sm text-gray-600">Ranked 47th in Engineering Category</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded mr-3">
                      <img src="/placeholder.svg" alt="THE Impact Rankings" className="w-12 h-12 object-contain" />
                    </div>
                    <div>
                      <p className="font-medium">THE Impact Rankings</p>
                      <p className="text-sm text-gray-600">Top 300 globally for SDG 4: Quality Education</p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-gray-100 p-2 rounded mr-3">
                      <img src="/placeholder.svg" alt="QS Stars" className="w-12 h-12 object-contain" />
                    </div>
                    <div>
                      <p className="font-medium">QS 5-Star Rating</p>
                      <p className="text-sm text-gray-600">For Teaching, Employability, and Facilities</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
