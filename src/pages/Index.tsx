
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight, Book, Award, Star, Grid, Code, Brain, Server, Network, Globe, Users, Laptop, GraduationCap, Briefcase, Calendar, Trophy, ChevronRight } from 'lucide-react';

const Index = () => {
  const upcomingEvents = [
    {
      date: "April 15, 2025",
      title: "CSE Technical Symposium",
      description: "A two-day symposium featuring speakers from leading tech companies and workshops on emerging technologies."
    },
    {
      date: "April 20, 2025",
      title: "Campus Recruitment Drive - Microsoft",
      description: "Microsoft will be conducting recruitment for 2025 passing out CSE students."
    },
    {
      date: "May 5, 2025",
      title: "International Conference on AI & ML",
      description: "Annual conference featuring research papers, workshops, and expert talks on artificial intelligence and machine learning."
    }
  ];

  const cseCourses = [
    { name: "B.Tech in Computer Science & Engineering", duration: "4 Years", intake: 300 },
    { name: "M.Tech in Computer Science & Engineering", duration: "2 Years", intake: 30 },
    { name: "Ph.D in Computer Science & Engineering", duration: "3-5 Years", intake: 10 }
  ];

  const news = [
    {
      date: "April 5, 2025",
      title: "CSE Students Win International Hackathon",
      content: "A team of 5 CSE students won the first prize at the International Coding Hackathon held in Singapore."
    },
    {
      date: "March 30, 2025",
      title: "CSE Department Receives Research Grant",
      content: "The CSE department has been awarded a research grant of ₹1.2 crore for advanced AI research."
    },
    {
      date: "March 25, 2025",
      title: "New AI & ML Lab Inauguration",
      content: "State-of-the-art AI and ML laboratory inaugurated with NVIDIA GPU infrastructure and research facilities."
    }
  ];

  const cseAchievements = [
    {
      title: "Placement Rate",
      value: "98%",
      icon: <Briefcase className="w-10 h-10 text-white" />
    },
    {
      title: "Research Publications",
      value: "120+",
      icon: <Book className="w-10 h-10 text-white" />
    },
    {
      title: "Faculty with PhD",
      value: "85%",
      icon: <GraduationCap className="w-10 h-10 text-white" />
    },
    {
      title: "Labs & Research Centers",
      value: "15",
      icon: <Laptop className="w-10 h-10 text-white" />
    }
  ];

  const cseSpecializations = [
    {
      title: "Artificial Intelligence & Machine Learning",
      icon: <Brain className="w-8 h-8 text-iare-blue" />,
      description: "Exploring neural networks, deep learning, natural language processing, and computer vision applications."
    },
    {
      title: "Cloud Computing & DevOps",
      icon: <Server className="w-8 h-8 text-iare-teal" />,
      description: "Learning cloud architecture, virtualization, containerization, and CI/CD pipelines."
    },
    {
      title: "Data Science & Big Data Analytics",
      icon: <Grid className="w-8 h-8 text-iare-yellow" />,
      description: "Analyzing large datasets, data visualization, statistical modeling, and predictive analytics."
    },
    {
      title: "Internet of Things & Embedded Systems",
      icon: <Network className="w-8 h-8 text-iare-maroon" />,
      description: "Building connected devices, sensor networks, and real-time systems for smart applications."
    },
    {
      title: "Cyber Security & Blockchain",
      icon: <Code className="w-8 h-8 text-iare-blue" />,
      description: "Implementing security protocols, ethical hacking, digital forensics, and blockchain applications."
    },
    {
      title: "Web & Mobile Development",
      icon: <Globe className="w-8 h-8 text-iare-teal" />,
      description: "Creating responsive web applications and cross-platform mobile solutions with modern frameworks."
    }
  ];

  const cseFaculty = [
    { name: "Dr. L V Narasimha Prasad", position: "Professor & Head of Department", specialization: "Artificial Intelligence" },
    { name: "Dr. Suresh Kumar", position: "Professor", specialization: "Data Science & Analytics" },
    { name: "Dr. Rajasekhar Reddy", position: "Associate Professor", specialization: "Cloud Computing & Virtualization" },
    { name: "Dr. Padmaja Rani", position: "Associate Professor", specialization: "Machine Learning & Pattern Recognition" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Hero Banner - Modern Design */}
        <div className="bg-gradient-to-r from-iare-blue via-blue-700 to-iare-teal text-white h-[75vh] flex items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
          <div className="container mx-auto px-4 text-center relative z-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Department of Computer Science & Engineering</h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-light">Transforming futures through innovation, research, and excellence in computing education</p>
            <div className="flex flex-wrap justify-center gap-5">
              <Link to="/programs" className="bg-white text-iare-blue font-semibold px-8 py-4 rounded-lg hover:bg-iare-yellow transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center">
                Explore Programs <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link to="/student-services" className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-iare-blue transition-all duration-300 flex items-center">
                Student Services <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="py-16 bg-gradient-to-b from-gray-100 to-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-center mb-16">
              <div className="text-center max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-iare-blue">Excellence in Computer Science Education</h2>
                <p className="text-gray-600 text-lg">Empowering students with cutting-edge knowledge and practical skills for the digital future</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cseAchievements.map((achievement, index) => (
                <div key={index} className="bg-gradient-to-br from-iare-blue to-blue-700 text-white rounded-xl shadow-xl p-8 transform transition-all duration-300 hover:scale-105">
                  <div className="mb-4 bg-white/10 p-4 rounded-full inline-block">{achievement.icon}</div>
                  <div className="text-4xl font-bold mb-2">{achievement.value}</div>
                  <div className="text-gray-200">{achievement.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Programs Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-iare-blue">Academic Programs</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">Our comprehensive programs are designed to provide students with a strong foundation in computer science principles and practical skills</p>
            </div>
            
            <div className="overflow-hidden bg-white rounded-xl shadow-xl border border-gray-100">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gradient-to-r from-iare-blue to-blue-700 text-white">
                    <th className="py-4 px-6 text-left font-semibold text-lg">Program</th>
                    <th className="py-4 px-6 text-left font-semibold text-lg">Duration</th>
                    <th className="py-4 px-6 text-left font-semibold text-lg">Annual Intake</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {cseCourses.map((course, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6">{course.name}</td>
                      <td className="py-4 px-6">{course.duration}</td>
                      <td className="py-4 px-6">{course.intake}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 text-center">
              <Link to="/programs" className="inline-flex items-center text-iare-blue hover:text-blue-700 font-medium">
                View detailed curriculum <ChevronRight className="ml-1" size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Specializations Grid */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-iare-blue">Areas of Specialization</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">Our department offers specialized training and research opportunities in several cutting-edge domains</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cseSpecializations.map((specialization, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-gray-100">{specialization.icon}</div>
                    <h3 className="text-xl font-semibold ml-4 text-iare-blue">{specialization.title}</h3>
                  </div>
                  <p className="text-gray-600">{specialization.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Faculty Showcase */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-iare-blue">Distinguished Faculty</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">Learn from experts with extensive academic and industry experience</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cseFaculty.map((faculty, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
                  <div className="bg-gradient-to-r from-iare-blue to-blue-700 text-white p-4 text-center">
                    <h3 className="font-semibold text-lg">{faculty.name}</h3>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-600 mb-2">{faculty.position}</p>
                    <p className="text-iare-teal font-medium">{faculty.specialization}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link to="/departments" className="bg-iare-blue text-white font-medium px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center">
                View All Faculty <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* News & Events */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-iare-blue flex items-center">
                  <Calendar className="mr-3" size={28} /> Upcoming Events
                </h2>
                
                <div className="space-y-6">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-md p-6 border-l-4 border-iare-teal transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="text-iare-teal font-semibold mb-1">{event.date}</div>
                      <h3 className="font-bold text-xl mb-2">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <Link to="/events" className="inline-flex items-center text-iare-blue hover:text-blue-700 font-medium">
                    View All Events <ChevronRight className="ml-1" size={18} />
                  </Link>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-iare-blue flex items-center">
                  <Trophy className="mr-3" size={28} /> Latest News
                </h2>
                
                <div className="space-y-6">
                  {news.map((item, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-md p-6 border-l-4 border-iare-yellow transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
                      <div className="text-iare-yellow font-semibold mb-1">{item.date}</div>
                      <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <Link to="/news" className="inline-flex items-center text-iare-blue hover:text-blue-700 font-medium">
                    View All News <ChevronRight className="ml-1" size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-iare-blue via-blue-700 to-iare-teal text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin Your Journey in Computer Science</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">Join our diverse community of innovators, researchers, and future technology leaders</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/admissions" className="bg-white text-iare-blue font-semibold px-8 py-4 rounded-lg hover:bg-iare-yellow transition-all duration-300 shadow-lg flex items-center">
                Apply Now <ArrowRight size={20} className="ml-2" />
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-iare-blue transition-all duration-300 flex items-center">
                Contact Us <ArrowRight size={20} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
