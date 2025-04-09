
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Tag, ChevronRight, ArrowUpRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const News = () => {
  const newsCategories = [
    "All News", "Academic", "Research", "Events", 
    "Achievements", "Placements", "Faculty", "Students"
  ];

  const featuredNews = {
    title: "Department of CSE Hosts National AI & ML Symposium",
    date: "April 10, 2025",
    category: "Events",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    excerpt: "The Department of Computer Science & Engineering hosted a two-day national symposium on Artificial Intelligence and Machine Learning with over 30 speakers from industry and academia presenting cutting-edge research and innovations.",
    link: "/news/ai-ml-symposium"
  };

  const latestNews = [
    {
      title: "CSE Students Win International Hackathon Competition",
      date: "April 5, 2025",
      category: "Achievements",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      excerpt: "A team of five CSE students secured the first position at the International Coding Hackathon held in Singapore, competing against teams from 25 countries.",
      link: "/news/international-hackathon-win"
    },
    {
      title: "Department Receives Major Research Grant for AI Research",
      date: "March 30, 2025",
      category: "Research",
      image: "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      excerpt: "The CSE department has been awarded a research grant of ₹1.2 crore for advanced AI research in healthcare applications.",
      link: "/news/research-grant"
    },
    {
      title: "New AI & ML Laboratory Inaugurated",
      date: "March 25, 2025",
      category: "Academic",
      image: "https://images.unsplash.com/photo-1573164574511-73c773193279?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      excerpt: "State-of-the-art AI and ML laboratory inaugurated with NVIDIA GPU infrastructure and research facilities for students and faculty.",
      link: "/news/ai-ml-lab-inauguration"
    },
    {
      title: "Department Signs MoU with Microsoft for Training Programs",
      date: "March 20, 2025",
      category: "Academic",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      excerpt: "The Department of CSE has signed a Memorandum of Understanding with Microsoft for specialized training programs in cloud computing and AI.",
      link: "/news/microsoft-mou"
    },
    {
      title: "Faculty Research Paper Published in Leading International Journal",
      date: "March 15, 2025",
      category: "Research",
      image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      excerpt: "Dr. Suresh Kumar's research paper on 'Efficient Deep Learning Models for Edge Computing' has been published in IEEE Transactions on Neural Networks.",
      link: "/news/faculty-research-paper"
    },
    {
      title: "CSE Department Organizes Industry Conclave",
      date: "March 10, 2025",
      category: "Events",
      image: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      excerpt: "The department organized an Industry Conclave with representatives from 15+ tech companies to discuss industry-academia collaboration.",
      link: "/news/industry-conclave"
    }
  ];

  const archiveNews = [
    { title: "CSE Department Hosts Annual Technical Fest", date: "February 25, 2025", category: "Events" },
    { title: "Students Create Smart Campus App", date: "February 15, 2025", category: "Students" },
    { title: "Faculty Development Program on Blockchain", date: "February 10, 2025", category: "Faculty" },
    { title: "Amazon Recruits 45 Students in Campus Drive", date: "February 5, 2025", category: "Placements" },
    { title: "New Curriculum Focused on Industry 4.0 Launched", date: "January 30, 2025", category: "Academic" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-iare-blue to-blue-700 text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">News & Announcements</h1>
            <p className="text-xl">Stay updated with the latest happenings from our department</p>
          </div>
        </div>
        
        {/* Categories Filter */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4 overflow-x-auto">
            <div className="flex space-x-4">
              {newsCategories.map((category, index) => (
                <button 
                  key={index}
                  className={`px-4 py-2 rounded-md whitespace-nowrap ${
                    index === 0 ? 'bg-iare-blue text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Featured News */}
        <div className="py-10 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Featured News</h2>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredNews.image} 
                    alt={featuredNews.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-2">
                      <span className="bg-iare-blue text-white text-sm px-3 py-1 rounded-full mr-2">
                        {featuredNews.category}
                      </span>
                      <span className="text-gray-500 flex items-center text-sm">
                        <Calendar size={16} className="mr-1" /> {featuredNews.date}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{featuredNews.title}</h3>
                    <p className="text-gray-600 mb-6">{featuredNews.excerpt}</p>
                  </div>
                  <a 
                    href={featuredNews.link}
                    className="inline-flex items-center font-medium text-iare-blue hover:text-blue-700"
                  >
                    Read Full Story <ArrowUpRight size={18} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Latest News Grid */}
        <div className="py-10 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestNews.map((news, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded mr-2">
                        {news.category}
                      </span>
                      <span className="text-gray-500 text-xs flex items-center">
                        <Calendar size={12} className="mr-1" /> {news.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{news.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{news.excerpt}</p>
                    <a 
                      href={news.link}
                      className="inline-flex items-center font-medium text-iare-blue hover:text-blue-700 text-sm"
                    >
                      Continue Reading <ChevronRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* News Archive */}
        <div className="py-10 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">News Archive</h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="divide-y">
                {archiveNews.map((news, index) => (
                  <div key={index} className="p-4 hover:bg-gray-50">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex flex-col md:flex-row md:items-center">
                        <span className="text-gray-500 text-sm mr-4 mb-2 md:mb-0">
                          <Calendar size={16} className="inline mr-1" /> {news.date}
                        </span>
                        <h3 className="font-medium">{news.title}</h3>
                      </div>
                      <div className="mt-2 md:mt-0 flex items-center">
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded mr-4">
                          {news.category}
                        </span>
                        <a href="#" className="text-iare-blue hover:text-blue-700">
                          <ChevronRight size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 text-center">
              <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50">
                Load More News
              </button>
            </div>
          </div>
        </div>
        
        {/* Newsletter Signup */}
        <div className="py-16 bg-gradient-to-r from-iare-blue to-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest news and updates from our department
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-l-md text-gray-900 focus:outline-none"
                />
                <button className="bg-iare-yellow text-gray-900 font-bold px-6 py-3 rounded-r-md hover:bg-yellow-500 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-sm mt-2 text-gray-200">
                We respect your privacy. Your information is safe with us.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default News;
