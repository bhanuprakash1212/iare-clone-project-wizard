
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Tag, ChevronRight, ArrowUpRight, Search, Filter, BookmarkPlus, Share2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const News = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All News');

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

  // Filter news based on category and search
  const filteredNews = latestNews.filter(news => 
    (activeCategory === 'All News' || news.category === activeCategory) && 
    (news.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    news.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-gray-900 to-black text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">News & Announcements</h1>
              <div className="w-24 h-1 bg-iare-yellow my-6"></div>
              <p className="text-xl text-gray-300">Stay updated with the latest happenings from our department</p>
            </div>
          </div>
        </div>
        
        {/* Search and Filter Bar */}
        <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="relative w-full md:w-1/3">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  type="text" 
                  placeholder="Search news..." 
                  className="pl-10 bg-gray-50 border-gray-200"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter size={18} className="text-gray-600" />
                <span className="text-sm text-gray-600 mr-2">Filter by:</span>
                <div className="flex flex-wrap gap-2">
                  {newsCategories.map((category, index) => (
                    <button 
                      key={index}
                      className={cn(
                        "px-3 py-1.5 rounded-md text-sm whitespace-nowrap transition-all",
                        activeCategory === category 
                          ? "bg-gray-900 text-white" 
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      )}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <Tabs defaultValue="featured" className="w-full">
            <TabsList className="w-full md:w-auto mb-6 bg-white border">
              <TabsTrigger value="featured" className="text-base">Featured</TabsTrigger>
              <TabsTrigger value="latest" className="text-base">Latest News</TabsTrigger>
              <TabsTrigger value="archive" className="text-base">Archives</TabsTrigger>
            </TabsList>
            
            {/* Featured News Tab */}
            <TabsContent value="featured" className="mt-6">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="h-80 md:h-auto">
                    <img 
                      src={featuredNews.image} 
                      alt={featuredNews.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center mb-4">
                        <Badge className="mr-2 bg-gray-900 hover:bg-gray-800">
                          {featuredNews.category}
                        </Badge>
                        <span className="text-gray-500 flex items-center text-sm">
                          <Calendar size={16} className="mr-1" /> {featuredNews.date}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold mb-4">{featuredNews.title}</h3>
                      <p className="text-gray-600 mb-6 text-lg">{featuredNews.excerpt}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <a 
                        href={featuredNews.link}
                        className="inline-flex items-center font-medium bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors"
                      >
                        Read Full Story <ArrowUpRight size={18} className="ml-2" />
                      </a>
                      <div className="flex gap-2">
                        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                          <BookmarkPlus size={18} className="text-gray-700" />
                        </button>
                        <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                          <Share2 size={18} className="text-gray-700" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Latest News Tab */}
            <TabsContent value="latest" className="mt-6">
              {searchQuery || activeCategory !== 'All News' ? (
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-600">
                    Found {filteredNews.length} results {activeCategory !== 'All News' && `in "${activeCategory}"`}
                    {searchQuery && ` for "${searchQuery}"`}
                  </h3>
                </div>
              ) : null}
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNews.length > 0 ? (
                  filteredNews.map((news, index) => (
                    <div 
                      key={index}
                      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="h-52 overflow-hidden">
                        <img 
                          src={news.image} 
                          alt={news.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-center mb-3">
                          <Badge variant="outline" className="text-xs">
                            {news.category}
                          </Badge>
                          <span className="text-gray-500 text-xs flex items-center">
                            <Calendar size={12} className="mr-1" /> {news.date}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-3 line-clamp-2">{news.title}</h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{news.excerpt}</p>
                        <div className="flex justify-between items-center">
                          <a 
                            href={news.link}
                            className="inline-flex items-center font-medium text-iare-blue hover:text-blue-700 text-sm group"
                          >
                            Read More <ChevronRight size={16} className="ml-1 group-hover:ml-2 transition-all" />
                          </a>
                          <div className="flex gap-1">
                            <button className="p-1.5 rounded-full hover:bg-gray-100">
                              <BookmarkPlus size={16} className="text-gray-500" />
                            </button>
                            <button className="p-1.5 rounded-full hover:bg-gray-100">
                              <Share2 size={16} className="text-gray-500" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-span-3 py-16 text-center">
                    <p className="text-gray-500 text-lg">No news articles match your search criteria.</p>
                    <button 
                      className="mt-4 text-iare-blue hover:underline"
                      onClick={() => {
                        setSearchQuery('');
                        setActiveCategory('All News');
                      }}
                    >
                      Clear filters
                    </button>
                  </div>
                )}
              </div>
              
              <div className="mt-10 text-center">
                <button className="bg-white border border-gray-300 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-50 shadow-sm">
                  Load More News
                </button>
              </div>
            </TabsContent>
            
            {/* Archive Tab */}
            <TabsContent value="archive" className="mt-6">
              <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
                <div className="divide-y">
                  {archiveNews.map((news, index) => (
                    <div key={index} className="p-5 hover:bg-gray-50 transition-colors">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="flex flex-col md:flex-row md:items-center">
                          <span className="text-gray-500 text-sm mr-4 mb-2 md:mb-0">
                            <Calendar size={16} className="inline mr-1" /> {news.date}
                          </span>
                          <h3 className="font-medium">{news.title}</h3>
                        </div>
                        <div className="mt-2 md:mt-0 flex items-center">
                          <Badge variant="outline" className="mr-4">
                            {news.category}
                          </Badge>
                          <a href="#" className="text-iare-blue hover:text-blue-700">
                            <ChevronRight size={20} />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-10 flex justify-between items-center">
                <button className="bg-white border border-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-50 disabled:opacity-50" disabled>
                  Previous
                </button>
                <div className="flex items-center space-x-2">
                  <button className="w-8 h-8 flex items-center justify-center rounded bg-gray-900 text-white">1</button>
                  <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100">2</button>
                  <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100">3</button>
                  <span className="px-2">...</span>
                  <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100">10</button>
                </div>
                <button className="bg-white border border-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-50">
                  Next
                </button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Newsletter Signup */}
        <div className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <div className="w-20 h-1 bg-iare-yellow mx-auto my-6"></div>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
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
              <p className="text-sm mt-2 text-gray-400">
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
