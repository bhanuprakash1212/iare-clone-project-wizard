
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  ArrowRight, Book, Award, GraduationCap, Briefcase,
  ChevronRight, Brain, Server, Grid, Code, Network, Globe
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const Index = () => {
  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      title: "Innovation in Computer Science Education"
    },
    {
      url: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      title: "Building the Future with Technology"
    },
    {
      url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
      title: "Excellence in Research and Development"
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
      title: "Innovative Projects",
      value: "250+",
      icon: <Award className="w-10 h-10 text-white" />
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
      icon: <Network className="w-8 h-8 text-iare-blue" />,
      description: "Building connected devices, sensor networks, and real-time systems for smart applications."
    },
    {
      title: "Cyber Security & Blockchain",
      icon: <Code className="w-8 h-8 text-iare-teal" />,
      description: "Implementing security protocols, ethical hacking, digital forensics, and blockchain applications."
    },
    {
      title: "Web & Mobile Development",
      icon: <Globe className="w-8 h-8 text-iare-yellow" />,
      description: "Creating responsive web applications and cross-platform mobile solutions with modern frameworks."
    }
  ];

  const news = [
    {
      date: "April 5, 2025",
      title: "CSE Students Win  Hackathon",
      content: "A team of 3 CSE students won the first prize at the Coding Hackathon held in Tiruvantapuram."
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

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      const buttons = document.querySelectorAll('.carousel-button-next');
      if (buttons.length > 0) {
        (buttons[0] as HTMLButtonElement).click();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Hero Carousel Banner - Minimalist Design */}
        <div className="relative h-[80vh] overflow-hidden">
          <Carousel className="w-full h-[80vh]" opts={{ loop: true }}>
            <CarouselContent className="h-full">
              {carouselImages.map((image, index) => (
                <CarouselItem key={index} className="h-full">
                  <div className="relative w-full h-[80vh]">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${image.url})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
                    </div>
                    <div className="relative h-full flex flex-col justify-center items-start text-left px-8 md:px-16 lg:px-24 z-10 max-w-5xl">
                      <div className="bg-iare-blue/20 backdrop-blur-sm px-6 py-4 rounded-lg inline-block mb-6">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white leading-tight">{image.title}</h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-2xl">
                          Department of Computer Science & Engineering
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-4">
                        <Link
                          to="/student-services"
                          className="bg-iare-blue text-white font-medium px-8 py-3 rounded-md hover:bg-blue-700 transition-all duration-300 flex items-center"
                        >
                          Explore Programs <ArrowRight size={18} className="ml-2" />
                        </Link>
                        <Link
                          to="/about-us"
                          className="bg-white/10 backdrop-blur-sm text-white border border-white/30 font-medium px-8 py-3 rounded-md hover:bg-white/20 transition-all duration-300"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden">
              <CarouselPrevious className="carousel-button-prev" />
              <CarouselNext className="carousel-button-next" />
            </div>
            <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  className="w-3 h-3 rounded-full bg-white/30 hover:bg-white/80 transition-all duration-300"
                  onClick={() => {
                    // Implementation for direct slide navigation
                  }}
                />
              ))}
            </div>
          </Carousel>
        </div>

        {/* Key Highlights Section - More Minimal Design */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="bg-blue-50 text-iare-blue px-4 py-1 rounded-full text-sm font-medium mb-3 inline-block">EXCELLENCE METRICS</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Department at a Glance</h2>
              <div className="w-20 h-1 bg-iare-blue mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Setting new standards in computing education with outstanding outcomes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cseAchievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1 border border-gray-100 p-6 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-br from-iare-blue to-blue-600 p-4 rounded-xl inline-block mb-4 group-hover:scale-110 transition-transform duration-300">
                      {achievement.icon}
                    </div>
                  </div>
                  <h3 className="text-4xl font-bold mb-2 text-gray-900">{achievement.value}</h3>
                  <p className="text-gray-600">{achievement.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Specializations Section - Clean Cards */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="bg-blue-50 text-iare-blue px-4 py-1 rounded-full text-sm font-medium mb-3 inline-block">FOCUS AREAS</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Areas of Specialization</h2>
              <div className="w-20 h-1 bg-iare-blue mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Cutting-edge domains where our faculty and students excel in research and innovation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cseSpecializations.map((spec, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1 border border-gray-100 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                      {spec.icon}
                    </div>
                    <h3 className="text-xl font-bold ml-4 group-hover:text-iare-blue transition-colors">{spec.title}</h3>
                  </div>
                  <p className="text-gray-600">{spec.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Latest News Section - Clean Design */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <div>
                <span className="bg-blue-50 text-iare-blue px-4 py-1 rounded-full text-sm font-medium mb-3 inline-block">LATEST UPDATES</span>
                <h2 className="text-3xl font-bold text-gray-900">Department News</h2>
              </div>
              <Link to="/news" className="text-iare-blue font-medium flex items-center hover:text-blue-700 group">
                View All News <ChevronRight size={20} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {news.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1 group"
                >
                  <div className="p-6">
                    <div className="text-iare-yellow font-medium mb-2">{item.date}</div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-iare-blue transition-colors">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.content}</p>
                    <Link to={`/news`} className="text-iare-blue font-medium flex items-center hover:text-blue-700 group">
                      Read More <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action - Simplified */}
        <div className="py-20 bg-gradient-to-r from-iare-blue to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <span className="bg-white/10 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-medium mb-6 inline-block">JOIN US</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Shape Your Future?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">Join our department and gain the skills needed to thrive in the ever-evolving field of computer science</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/about-us" className="bg-white text-iare-blue font-bold px-8 py-3 rounded-md hover:bg-iare-yellow hover:text-white transition-all duration-300">
                Learn More
              </Link>
              <Link to="/student-services" className="bg-transparent border-2 border-white text-white font-bold px-8 py-3 rounded-md hover:bg-white hover:text-iare-blue transition-all duration-300">
                Student Resources
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
