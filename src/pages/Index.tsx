
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight, Book, Award, Star, Grid, Code, Brain, Server, Network, Globe, Users, Laptop, GraduationCap, Briefcase } from 'lucide-react';

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
      icon: <Briefcase className="w-10 h-10 text-iare-teal" />
    },
    {
      title: "Research Publications",
      value: "120+",
      icon: <Book className="w-10 h-10 text-iare-blue" />
    },
    {
      title: "Faculty with PhD",
      value: "85%",
      icon: <GraduationCap className="w-10 h-10 text-iare-yellow" />
    },
    {
      title: "Labs & Research Centers",
      value: "15",
      icon: <Laptop className="w-10 h-10 text-iare-teal" />
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
        {/* Hero Banner - CSE Specific */}
        <div className="bg-gradient-to-r h-[60vh] flex items-center justify-center from-iare-blue to-iare-teal text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Department of Computer Science & Engineering</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">Shaping the future through innovation, research, and excellence in computing education since 2000</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/programs" className="bg-iare-yellow text-iare-blue font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition duration-300 flex items-center">
                Explore Programs <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* CSE Department Achievements */}
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-iare-blue">Department Highlights</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {cseAchievements.map((achievement, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition duration-300 flex flex-col items-center">
                  <div className="mb-4">{achievement.icon}</div>
                  <div className="text-3xl font-bold text-iare-blue mb-2">{achievement.value}</div>
                  <div className="text-gray-600">{achievement.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CSE Programs */}
        <div className="py-12 bg-iare-gray">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-iare-blue">Academic Programs</h2>

            <div className="overflow-x-auto bg-white rounded-lg shadow-md">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-iare-blue text-white">
                    <th className="py-3 px-4 text-left">Program</th>
                    <th className="py-3 px-4 text-left">Duration</th>
                    <th className="py-3 px-4 text-left">Annual Intake</th>
                  </tr>
                </thead>
                <tbody>
                  {cseCourses.map((course, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="py-3 px-4 border-b">{course.name}</td>
                      <td className="py-3 px-4 border-b">{course.duration}</td>
                      <td className="py-3 px-4 border-b">{course.intake}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* CSE Specializations */}
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-iare-blue">Areas of Specialization</h2>
            <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">The CSE department offers specialized training and research opportunities in several cutting-edge domains</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cseSpecializations.map((specialization, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300 border border-gray-100">
                  <div className="flex items-center mb-4">
                    {specialization.icon}
                    <h3 className="text-xl font-semibold ml-3 text-iare-blue">{specialization.title}</h3>
                  </div>
                  <p className="text-gray-700">{specialization.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Faculty Profiles */}
        <div className="py-12 bg-iare-lightblue">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-iare-blue">Distinguished Faculty</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cseFaculty.map((faculty, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-iare-blue text-white text-center py-3">
                    <h3 className="font-semibold">{faculty.name}</h3>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 text-sm mb-2">{faculty.position}</p>
                    <p className="text-iare-teal text-sm font-medium">{faculty.specialization}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link to="/departments" className="inline-block bg-iare-blue text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition duration-300 flex items-center mx-auto w-fit">
                View All Faculty <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Research and Placement */}
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-iare-blue flex items-center">
                  <Book className="mr-2" size={24} /> Research Areas
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Star className="text-iare-yellow mt-1 mr-2 flex-shrink-0" size={16} />
                    <span>Artificial Intelligence and Machine Learning Applications</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="text-iare-yellow mt-1 mr-2 flex-shrink-0" size={16} />
                    <span>Big Data Analytics and Data Mining</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="text-iare-yellow mt-1 mr-2 flex-shrink-0" size={16} />
                    <span>Computer Vision and Image Processing</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="text-iare-yellow mt-1 mr-2 flex-shrink-0" size={16} />
                    <span>Cloud Computing and Distributed Systems</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="text-iare-yellow mt-1 mr-2 flex-shrink-0" size={16} />
                    <span>Internet of Things and Embedded Systems</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="text-iare-yellow mt-1 mr-2 flex-shrink-0" size={16} />
                    <span>Blockchain Technology and Applications</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link to="/research" className="text-iare-teal hover:text-iare-blue font-medium flex items-center">
                    View Research Projects <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-iare-blue flex items-center">
                  <Briefcase className="mr-2" size={24} /> Placement Highlights
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-iare-gray p-4 rounded text-center">
                    <div className="text-2xl font-bold text-iare-teal">98%</div>
                    <div className="text-sm">Placement Rate</div>
                  </div>
                  <div className="bg-iare-gray p-4 rounded text-center">
                    <div className="text-2xl font-bold text-iare-teal">54 LPA</div>
                    <div className="text-sm">Highest Package</div>
                  </div>
                  <div className="bg-iare-gray p-4 rounded text-center">
                    <div className="text-2xl font-bold text-iare-teal">12.5 LPA</div>
                    <div className="text-sm">Average Package</div>
                  </div>
                  <div className="bg-iare-gray p-4 rounded text-center">
                    <div className="text-2xl font-bold text-iare-teal">120+</div>
                    <div className="text-sm">Recruiting Companies</div>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-gray-700 mb-4">Top recruiters: Microsoft, Amazon, Google, IBM, Accenture, TCS, Wipro, Infosys</p>
                  <Link to="/placements" className="text-iare-teal hover:text-iare-blue font-medium flex items-center">
                    View Placement Details <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Events and News Section */}
        <div className="py-12 bg-iare-gray">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-iare-blue border-b-2 border-iare-teal pb-2 flex items-center">
                  <Award className="mr-2" size={24} /> Upcoming Events
                </h2>

                {upcomingEvents.map((event, index) => (
                  <div key={index} className="mb-5 border-b border-gray-200 pb-5 last:border-b-0 last:pb-0">
                    <div className="text-sm text-gray-500 mb-1">{event.date}</div>
                    <h3 className="font-semibold text-lg mb-1">{event.title}</h3>
                    <p className="text-gray-600 text-sm">{event.description}</p>
                  </div>
                ))}

                <Link to="/events" className="inline-block text-iare-teal hover:text-iare-blue font-medium mt-4 flex items-center">
                  View All Events <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6 text-iare-blue border-b-2 border-iare-yellow pb-2 flex items-center">
                  <Users className="mr-2" size={24} /> Latest News
                </h2>

                {news.map((item, index) => (
                  <div key={index} className="mb-5 border-b border-gray-200 pb-5 last:border-b-0 last:pb-0">
                    <div className="text-sm text-gray-500 mb-1">{item.date}</div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.content}</p>
                  </div>
                ))}

                <Link to="/news" className="inline-block text-iare-teal hover:text-iare-blue font-medium mt-4 flex items-center">
                  View All News <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-iare-blue to-iare-teal text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our CSE Department</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Be part of a thriving community of innovators, researchers, and technology enthusiasts.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/student-services" className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-iare-blue transition duration-300 flex items-center">
                Student Services <ArrowRight size={18} className="ml-2" />
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
