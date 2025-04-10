import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Tag, ChevronRight, ArrowUpRight, Search, Youtube, Play, ExternalLink } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const News = () => {
  const [activeCategory, setActiveCategory] = useState("All News");

  const newsCategories = [
    "All News", "Academic", "Events",
    "Achievements", "Faculty", "Students", "Videos"
  ];

  const featuredNews = {
    title: "Department of CSE Hosts National Level Symposium",
    date: "April 10, 2025",
    category: "Events",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    excerpt: "The Department of Computer Science & Engineering hosted a two-day national-level Tech Fest featuring a vibrant mix of technical and non-technical events, celebrating innovation, creativity, and collaboration across various domains of technology",
    link: "/news/ai-ml-symposium"
  };

  const youtubeVideos = [
    {
      title: "SVUCE College Annual Day Celebrations",
      date: "March 15, 2023",
      videoId: "CPItn6A_PV8",
      thumbnail: `https://img.youtube.com/vi/CPItn6A_PV8/maxresdefault.jpg`,
      description: "Highlights from the Annual Day celebrations at Sri Venkateswara University College of Engineering"
    },
    {
      title: "SVUCE CSE Department Activities",
      date: "February 10, 2023",
      videoId: "GFCS2R53bJM",
      thumbnail: `https://img.youtube.com/vi/GFCS2R53bJM/maxresdefault.jpg`,
      description: "Overview of activities and achievements in the Computer Science department"
    },
    {
      title: "Latest Campus Tour - SVUCE",
      date: "January 25, 2023",
      videoId: "q-5RVsGRnQ0",
      thumbnail: `https://img.youtube.com/vi/q-5RVsGRnQ0/maxresdefault.jpg`,
      description: "Take a virtual tour of our beautiful campus and state-of-the-art facilities"
    },
    {
      title: "SVUCE Placements Overview 2023",
      date: "December 5, 2023",
      videoId: "lHQdwRaOGvc",
      thumbnail: `https://img.youtube.com/vi/lHQdwRaOGvc/maxresdefault.jpg`,
      description: "Details about placement statistics and top recruiters at SVUCE"
    }
  ];

  const allNews = [
    {
      title: "CSE Students Launch Startup NxtJob",
      date: "February 15, 2024",
      category: "Startups",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEdzi8PrqIbpc13aY3JrryoN6ZhLMhDjAyuPiriHazeOdU780i25N3bu6Zbs1Rccaw3zE&usqp=CAU",
      excerpt: "Shaik Asif Ali from the CSE department launched a startup called NxtJob, contributing to AI integration and extensive testing using modern frameworks.",
      link: "/news/nxtjob-startup"
    },
    {
      title: "Student Bags Onsite Internship at Amazon",
      date: "January 30, 2024",
      category: "Achievements",
      image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      excerpt: "Shaik Asma Naaz, a student from CSE, secured a prestigious onsite internship at Amazon, Chennai.",
      link: "/news/amazon-internship"
    },
    {
      title: "Tech Fest Showcases Innovation and Talent",
      date: "February 3, 2024",
      category: "Events",
      image: "https://media.istockphoto.com/id/1390307475/vector/vector-modern-poster-tech-fest-unique-silver-alphabet-letters-and-numbers-set.jpg?s=612x612&w=0&k=20&c=dInBWq3UABY834WyxCDnhvW5-4mU25dXVB-hr8GrJAs=",
      excerpt: "The department hosted a national-level Tech Fest with a wide array of technical and non-technical events, drawing participation from across the country.",
      link: "/news/tech-fest-2024"
    },
    {
      title: "Faculty Honored with State Teaching Award",
      date: "December 5, 2023",
      category: "Faculty",
      image: "https://images.unsplash.com/photo-1587614203976-365c74645e83?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      excerpt: "Prof. M Humera Khanam received the State Award for University Teachers from the Department of Higher Education, Andhra Pradesh.",
      link: "/news/faculty-state-award"
    },
    {
      title: "CSE Department Conducts Skill Development Seminars",
      date: "November 15, 2023",
      category: "Events",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      excerpt: "The department organized multiple seminars on skill development and digital learning, including sessions on AI, machine learning, and education technologies.",
      link: "/news/skill-development-seminars"
    },
    {
      title: "Prof. Ch D V Subba Rao Appointed as ISRO Expert Panel Member",
      date: "December 1, 2023",
      category: "Faculty",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcW23lFQWso3j_ut0FNY-XpipCsZ4R4ATcug&s",
      excerpt: "Prof. Ch D V Subba Rao has been serving as an External Expert for the Departmental Promotion Committees at ISRO since 2017.",
      link: "/news/isro-panel-member"
    },
    {
      title: "CSE Alumni Achieve Big in Global Tech Industry",
      date: "October 25, 2023",
      category: "Alumni",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      excerpt: "Notable alumni include Jitendar Reddy Mitta (SDE @Amazon, 48 LPA), Trived Chinchula (CEO, Tekie’s Zen), and Jayasree Kurmannagari (SDE @Walmart, 35 LPA).",
      link: "/news/alumni-success"
    },
    {
      title: "National Seminar on Skill Development Conducted",
      date: "November 14, 2021",
      category: "Events",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzWWDCC3xXd8hfcuS6PqbuELwb2vmDyFBFgg&s",
      excerpt: "Prof. Ch D V Subba Rao organized a national seminar on ‘Advancing Skill Development’ featuring Prof. K N Satyanarayana, Director of IIT Tirupati.",
      link: "/news/skill-development-seminar-2021"
    },
    {
      title: "Microsoft Upskilling Program Reaches 5000 Students",
      date: "June 30, 2022",
      category: "Achievements",
      image: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/RWCZER-Legal-IP-Trademarks-CP-MS-logo-740x417-1?wid=406&hei=230&fit=crop",
      excerpt: "An online upskilling program in collaboration with Microsoft was conducted by Prof. Humera Khanam under APSCHE, benefitting 5000+ students.",
      link: "/news/microsoft-upskilling"
    },
    {
      title: "Students Crack GATE, CAT & Enter Premier Institutes",
      date: "March 10, 2024",
      category: "Achievements",
      image: "https://ijkenggacademy.in/wp-content/uploads/2022/11/gate.jpeg",
      excerpt: "CSE students secured admissions into IIT Madras, IISC Bangalore, IIM Lucknow, and more through GATE & CAT with top scores.",
      link: "/news/gate-cat-success"
    }
  ];

  const archiveNews = [
    { title: "CSE Department Hosts Annual Technical Fest", date: "February 25, 2025", category: "Events" },
    { title: "Students Create Smart Campus App", date: "February 15, 2025", category: "Students" },
    { title: "Faculty Development Program on Blockchain", date: "February 10, 2025", category: "Faculty" },
    { title: "Amazon Recruits 45 Students in Campus Drive", date: "February 5, 2025", category: "Placements" },
    { title: "New Curriculum Focused on Industry 4.0 Launched", date: "January 30, 2025", category: "Academic" }
  ];

  const filteredNews = activeCategory === "All News"
    ? allNews
    : allNews.filter(news => news.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <div className="bg-gradient-to-r from-iare-blue to-blue-700 text-white py-10">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-2">News & Announcements</h1>
            <p className="text-xl">Stay updated with the latest happenings from our department</p>
          </div>
        </div>

        <div className="sticky top-0 z-10 bg-white border-b shadow-sm">
          <div className="container mx-auto px-4 py-3">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-semibold">Browse by Category</h2>
              <div className="relative w-48">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="Search news..."
                  className="pl-10 pr-4 py-2 border rounded-full w-full text-sm focus:outline-none focus:ring-1 focus:ring-iare-blue"
                />
              </div>
            </div>
            <Tabs defaultValue="All News" value={activeCategory} onValueChange={setActiveCategory}>
              <TabsList className="flex space-x-2 overflow-x-auto py-1 bg-transparent">
                {newsCategories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="px-4 py-2 rounded-md whitespace-nowrap data-[state=active]:bg-iare-blue data-[state=active]:text-white data-[state=inactive]:bg-gray-100 data-[state=inactive]:text-gray-700 data-[state=inactive]:hover:bg-gray-200"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          <div className="bg-blue-50 rounded-lg p-3 mb-6 flex items-center">
            <span className="text-iare-blue font-medium">Currently viewing: </span>
            <span className="ml-2 bg-iare-blue text-white px-3 py-1 rounded-full text-sm">{activeCategory}</span>
            {activeCategory === "Videos" ? (
              <span className="ml-auto text-sm text-gray-500">
                {youtubeVideos.length} {youtubeVideos.length === 1 ? 'result' : 'results'} found
              </span>
            ) : (
              <span className="ml-auto text-sm text-gray-500">
                {filteredNews.length} {filteredNews.length === 1 ? 'result' : 'results'} found
              </span>
            )}
          </div>
        </div>

        {activeCategory === "Videos" ? (
          <div className="py-8 bg-white">
            <div className="container mx-auto px-4">
              <div className="flex items-center mb-6">
                <Youtube className="text-red-600 mr-2" size={24} />
                <h2 className="text-2xl font-bold">SVUCE YouTube Channel</h2>
                <a
                  href="https://www.youtube.com/@svucestudentversion5669"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto text-iare-blue hover:text-blue-700 flex items-center text-sm font-medium"
                >
                  Visit Channel <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {youtubeVideos.map((video, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                    <div className="relative h-56 overflow-hidden group">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <a
                        href={`https://www.youtube.com/watch?v=${video.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="bg-red-600 text-white p-4 rounded-full opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                          <Play size={24} fill="white" />
                        </div>
                      </a>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center mb-2">
                        <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded mr-2">
                          YouTube
                        </span>
                        <span className="text-gray-500 text-xs flex items-center">
                          <Calendar size={12} className="mr-1" /> {video.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{video.description}</p>
                      <a
                        href={`https://www.youtube.com/watch?v=${video.videoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center font-medium text-red-600 hover:text-red-700 text-sm"
                      >
                        Watch Video <ChevronRight size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="py-6 bg-gray-50">
              <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-4">Featured News</h2>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <img
                        src={featuredNews.image}
                        alt={featuredNews.title}
                        className="h-64 md:h-full w-full object-cover"
                      />
                    </div>
                    <div className="md:w-3/5 p-6 flex flex-col justify-between">
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

            <div className="py-8 bg-white">
              <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-6">Latest News</h2>
                {filteredNews.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredNews.map((news, index) => (
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
                ) : (
                  <div className="bg-gray-50 rounded-lg p-12 text-center">
                    <p className="text-gray-500 mb-4">No news found in the "{activeCategory}" category.</p>
                    <button
                      onClick={() => setActiveCategory("All News")}
                      className="bg-iare-blue text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      View All News
                    </button>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

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

        <div className="py-12 bg-gradient-to-r from-iare-blue to-blue-700 text-white">
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
