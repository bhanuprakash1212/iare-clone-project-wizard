
import React, { useEffect, useState } from 'react';
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
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      title: "Excellence in Research and Development",
      subtitle: "Pioneering innovations that shape the future of technology"
    },
    {
      url: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      title: "Building the Future with Technology",
      subtitle: "Developing skills that transform ideas into reality"
    },
    {
      url: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      title: "Innovation in Computer Science Education",
      subtitle: "Creating tomorrow's tech leaders today"
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
      icon: <Brain className="w-8 h-8 text-white" />,
      description: "Exploring neural networks, deep learning, natural language processing, and computer vision applications."
    },
    {
      title: "Cloud Computing & DevOps",
      icon: <Server className="w-8 h-8 text-white" />,
      description: "Learning cloud architecture, virtualization, containerization, and CI/CD pipelines."
    },
    {
      title: "Data Science & Big Data Analytics",
      icon: <Grid className="w-8 h-8 text-white" />,
      description: "Analyzing large datasets, data visualization, statistical modeling, and predictive analytics."
    },
    {
      title: "Internet of Things & Embedded Systems",
      icon: <Network className="w-8 h-8 text-white" />,
      description: "Building connected devices, sensor networks, and real-time systems for smart applications."
    },
    {
      title: "Cyber Security & Blockchain",
      icon: <Code className="w-8 h-8 text-white" />,
      description: "Implementing security protocols, ethical hacking, digital forensics, and blockchain applications."
    },
    {
      title: "Web & Mobile Development",
      icon: <Globe className="w-8 h-8 text-white" />,
      description: "Creating responsive web applications and cross-platform mobile solutions with modern frameworks."
    }
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

  // Handle indicator clicks
  const goToSlide = (index) => {
    setActiveSlide(index);
    const carousel = document.querySelector('.embla');
    if (carousel) {
      const scrollSnaps = Array.from(carousel.querySelectorAll('.embla__slide'));
      if (scrollSnaps[index]) {
        scrollSnaps[index].scrollIntoView({ behavior: 'smooth', inline: 'center' });
      }
    }
  };

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = (activeSlide + 1) % carouselImages.length;
      setActiveSlide(nextSlide);
      const buttons = document.querySelectorAll('.carousel-button-next');
      if (buttons.length > 0) {
        (buttons[0] as HTMLButtonElement).click();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeSlide]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Hero Carousel Banner */}
        <div className="relative h-[90vh] overflow-hidden">
          <Carousel className="w-full h-full embla" opts={{ loop: true }}>
            <CarouselContent className="h-full">
              {carouselImages.map((image, index) => (
                <CarouselItem key={index} className="h-full embla__slide">
                  <div className="relative w-full h-full">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 scale-110 animate-subtle-zoom"
                      style={{ 
                        backgroundImage: `url(${image.url})`,
                        animation: `subtle-zoom 20s ${index * 5}s infinite alternate ease-in-out`
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
                    </div>
                    <div className="relative h-full flex flex-col justify-center items-start text-center px-12 md:px-24 z-10 max-w-7xl mx-auto">
                      <Badge className="mb-4 bg-iare-yellow text-black px-4 py-1 text-sm font-medium">Department of CSE</Badge>
                      <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white text-left max-w-4xl leading-tight">{image.title}</h1>
                      <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mb-10 text-left">
                        {image.subtitle}
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Link 
                          to="/student-services" 
                          className="bg-white text-black font-bold px-8 py-4 rounded hover:bg-iare-yellow transition-all duration-300 flex items-center shadow-lg hover:shadow-xl"
                        >
                          Explore Programs <ArrowRight size={20} className="ml-2" />
                        </Link>
                        <Link 
                          to="/about-us"
                          className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded hover:bg-white/10 transition-all duration-300"
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
            <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-20">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    activeSlide === index ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>
        </div>

        {/* Key Highlights Section with Card Layout */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">Excellence in Computing Education</h2>
              <div className="w-20 h-1 bg-iare-yellow mx-auto my-6"></div>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Our department is committed to providing quality education and research opportunities in computer science
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cseAchievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
                >
                  <div className="p-8">
                    <div className="bg-gradient-to-r from-gray-800 to-black p-5 rounded-full inline-block mb-6 group-hover:from-iare-blue group-hover:to-blue-700 transition-all duration-300">
                      {achievement.icon}
                    </div>
                    <h3 className="text-5xl font-bold mb-3 text-gray-800">{achievement.value}</h3>
                    <p className="text-gray-600 text-lg">{achievement.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Specializations Section */}
        <div className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Areas of Specialization</h2>
              <div className="w-20 h-1 bg-iare-yellow mx-auto my-6"></div>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Our department offers specialized training and research opportunities in several cutting-edge domains
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cseSpecializations.map((spec, index) => (
                <div 
                  key={index}
                  className="bg-gray-800 rounded-lg p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/20 border border-gray-700"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-full bg-gradient-to-r from-iare-blue to-blue-700">{spec.icon}</div>
                    <h3 className="text-xl font-bold ml-4">{spec.title}</h3>
                  </div>
                  <p className="text-gray-400">{spec.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Latest News Section */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Latest News</h2>
                <div className="w-20 h-1 bg-iare-yellow my-4"></div>
              </div>
              <Link to="/news" className="text-iare-blue font-medium flex items-center hover:text-blue-700 group">
                View All News <ChevronRight size={20} className="ml-1 group-hover:ml-2 transition-all" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {news.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="p-6">
                    <div className="text-iare-yellow font-medium mb-2">{item.date}</div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.content}</p>
                    <Link to={`/news`} className="text-iare-blue font-medium flex items-center hover:text-blue-700 group">
                      Read More <ChevronRight size={18} className="ml-1 group-hover:ml-2 transition-all" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Shape Your Future?</h2>
            <div className="w-20 h-1 bg-iare-yellow mx-auto my-6"></div>
            <p className="text-xl mb-10 max-w-3xl mx-auto text-gray-300">
              Join our department and gain the skills needed to thrive in the ever-evolving field of computer science and engineering
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/about-us" className="bg-white text-black font-bold px-8 py-4 rounded hover:bg-iare-yellow transition-all duration-300">
                Learn More
              </Link>
              <Link to="/student-services" className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded hover:bg-white/10 transition-all duration-300">
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
