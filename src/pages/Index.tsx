
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight, Book, Award, Star, Grid, Code, Brain, Server, Network, Globe, Users, Laptop, GraduationCap, Briefcase, Calendar, ChevronRight } from 'lucide-react';

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
      icon: <Brain className="w-8 h-8 text-gray-700" />,
      description: "Exploring neural networks, deep learning, natural language processing, and computer vision applications."
    },
    {
      title: "Cloud Computing & DevOps",
      icon: <Server className="w-8 h-8 text-gray-700" />,
      description: "Learning cloud architecture, virtualization, containerization, and CI/CD pipelines."
    },
    {
      title: "Data Science & Big Data Analytics",
      icon: <Grid className="w-8 h-8 text-gray-700" />,
      description: "Analyzing large datasets, data visualization, statistical modeling, and predictive analytics."
    },
    {
      title: "Internet of Things & Embedded Systems",
      icon: <Network className="w-8 h-8 text-gray-700" />,
      description: "Building connected devices, sensor networks, and real-time systems for smart applications."
    },
    {
      title: "Cyber Security & Blockchain",
      icon: <Code className="w-8 h-8 text-gray-700" />,
      description: "Implementing security protocols, ethical hacking, digital forensics, and blockchain applications."
    },
    {
      title: "Web & Mobile Development",
      icon: <Globe className="w-8 h-8 text-gray-700" />,
      description: "Creating responsive web applications and cross-platform mobile solutions with modern frameworks."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-grow">
        {/* Hero Banner - Minimal Design */}
        <div className="bg-gray-900 text-white py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-pattern"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Department of Computer Science & Engineering</h1>
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">Transforming futures through innovation, research, and excellence in computing education</p>
            <div className="flex flex-wrap justify-center gap-5">
              <Link to="/programs" className="bg-white text-gray-900 font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition-all duration-300 flex items-center">
                Explore Programs <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/student-services" className="bg-transparent border border-white text-white font-medium px-6 py-3 rounded-md hover:bg-white/10 transition-all duration-300 flex items-center">
                Student Services <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-center mb-12">
              <div className="text-center max-w-3xl">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Excellence in Computer Science Education</h2>
                <p className="text-gray-600">Empowering students with cutting-edge knowledge and practical skills for the digital future</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cseAchievements.map((achievement, index) => (
                <div key={index} className="bg-gray-900 text-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:-translate-y-1">
                  <div className="mb-4 bg-white/10 p-3 rounded-full inline-block">{achievement.icon}</div>
                  <div className="text-3xl font-bold mb-2">{achievement.value}</div>
                  <div className="text-gray-300">{achievement.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Programs Section */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Academic Programs</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">Our comprehensive programs are designed to provide students with a strong foundation in computer science principles and practical skills</p>
            </div>
            
            <div className="overflow-hidden bg-white rounded-lg shadow-md border border-gray-100">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="py-3 px-6 text-left font-semibold">Program</th>
                    <th className="py-3 px-6 text-left font-semibold">Duration</th>
                    <th className="py-3 px-6 text-left font-semibold">Annual Intake</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {cseCourses.map((course, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-6">{course.name}</td>
                      <td className="py-3 px-6">{course.duration}</td>
                      <td className="py-3 px-6">{course.intake}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 text-center">
              <Link to="/programs" className="inline-flex items-center text-gray-900 hover:text-gray-700 font-medium">
                View detailed curriculum <ChevronRight className="ml-1" size={18} />
              </Link>
            </div>
          </div>
        </div>

        {/* Specializations Grid */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Areas of Specialization</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">Our department offers specialized training and research opportunities in several cutting-edge domains</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cseSpecializations.map((specialization, index) => (
                <div key={index} className="bg-gray-50 rounded-lg shadow-sm p-6 hover:shadow-md transition-all duration-300 border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-md bg-white border border-gray-200">{specialization.icon}</div>
                    <h3 className="text-lg font-semibold ml-4 text-gray-900">{specialization.title}</h3>
                  </div>
                  <p className="text-gray-600">{specialization.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* News & Events */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                  <Calendar className="mr-3" size={24} /> Upcoming Events
                </h2>
                
                <div className="space-y-5">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-sm p-5 border-l-3 border-gray-900 transform transition duration-300 hover:shadow-md">
                      <div className="text-gray-700 font-semibold mb-1">{event.date}</div>
                      <h3 className="font-bold text-lg mb-2">{event.title}</h3>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <Link to="/events" className="inline-flex items-center text-gray-900 hover:text-gray-700 font-medium">
                    View All Events <ChevronRight className="ml-1" size={18} />
                  </Link>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                  <Award className="mr-3" size={24} /> Latest News
                </h2>
                
                <div className="space-y-5">
                  {news.map((item, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-sm p-5 border-l-3 border-gray-900 transform transition duration-300 hover:shadow-md">
                      <div className="text-gray-700 font-semibold mb-1">{item.date}</div>
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6">
                  <Link to="/news" className="inline-flex items-center text-gray-900 hover:text-gray-700 font-medium">
                    View All News <ChevronRight className="ml-1" size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Begin Your Journey in Computer Science</h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto">Join our diverse community of innovators, researchers, and future technology leaders</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/admissions" className="bg-white text-gray-900 font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition-all duration-300 flex items-center">
                Apply Now <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/contact" className="bg-transparent border border-white text-white font-medium px-6 py-3 rounded-md hover:bg-white/10 transition-all duration-300 flex items-center">
                Contact Us <ArrowRight size={18} className="ml-2" />
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
