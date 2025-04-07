
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CampusLife = () => {
  const campusFeatures = [
    {
      title: "Student Clubs & Organizations",
      description: "Numerous student-run clubs covering technical, cultural, literary, and sports interests.",
      image: "/placeholder.svg",
      link: "/campus-life/clubs"
    },
    {
      title: "Events & Festivals",
      description: "Annual technical fest, cultural celebrations, departmental events, and inter-college competitions.",
      image: "/placeholder.svg",
      link: "/campus-life/events"
    },
    {
      title: "Sports & Recreation",
      description: "State-of-the-art sports facilities, regular tournaments, and fitness activities for students.",
      image: "/placeholder.svg",
      link: "/campus-life/sports"
    },
    {
      title: "Accommodation",
      description: "Modern, comfortable hostels for boys and girls with all essential amenities and security.",
      image: "/placeholder.svg",
      link: "/campus-life/accommodation"
    },
    {
      title: "Dining & Cafeterias",
      description: "Multiple dining options serving nutritious meals, cafes, and food courts across campus.",
      image: "/placeholder.svg",
      link: "/campus-life/dining"
    },
    {
      title: "Transportation",
      description: "College bus services connecting all major points in the city for convenient commuting.",
      image: "/placeholder.svg",
      link: "/campus-life/transportation"
    },
    {
      title: "Infrastructure",
      description: "Modern classrooms, labs, library, auditoriums, and specialized facilities for learning and research.",
      image: "/placeholder.svg",
      link: "/campus-life/infrastructure"
    },
    {
      title: "Green Initiatives",
      description: "Eco-friendly campus with rainwater harvesting, solar energy, and waste management systems.",
      image: "/placeholder.svg",
      link: "/campus-life/green-initiatives"
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
              <li className="flex items-center text-gray-500">Campus Life</li>
            </ol>
          </nav>
        </div>
        
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-iare-blue border-b-2 border-iare-teal pb-2 mb-4">Campus Life</h1>
          
          <div className="bg-white p-6 border rounded shadow-sm mb-8">
            <h2 className="text-xl font-semibold text-iare-maroon mb-4">Experience IARE</h2>
            
            <div className="mb-6 relative h-64 md:h-96 overflow-hidden rounded-lg">
              <img 
                src="/placeholder.svg" 
                alt="IARE Campus" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-iare-blue/70 to-transparent flex items-center">
                <div className="text-white p-6 md:p-12 max-w-lg">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Live, Learn, Thrive</h3>
                  <p className="text-sm md:text-base">
                    Experience a vibrant campus life at IARE where academic excellence meets personal growth and meaningful experiences.
                  </p>
                </div>
              </div>
            </div>
            
            <p className="mb-6">
              At IARE, campus life extends beyond academics to provide a holistic development environment. Our campus 
              is a thriving community where students engage in various extracurricular activities, develop leadership 
              skills, form lifelong friendships, and create memories that last a lifetime.
            </p>
            
            <p className="mb-6">
              We believe that learning happens both inside and outside the classroom. Our well-planned campus features 
              modern infrastructure, comfortable accommodation, diverse dining options, extensive sports facilities, and 
              spaces that foster creativity, innovation, and collaboration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {campusFeatures.map((feature, index) => (
              <div key={index} className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-40 overflow-hidden">
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-iare-blue mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{feature.description}</p>
                  <Link 
                    to={feature.link} 
                    className="inline-block text-sm text-iare-teal hover:text-iare-blue transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-white p-6 border rounded shadow-sm mb-8">
            <h2 className="text-xl font-semibold text-iare-maroon mb-4">Student Clubs & Organizations</h2>
            
            <p className="mb-6">
              Student clubs and organizations play a vital role in campus life at IARE. They provide opportunities for students 
              to pursue their interests, develop leadership skills, and build networks. Our diverse range of clubs caters to various 
              interests including technical, cultural, literary, and social service.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="border p-4 rounded bg-gray-50">
                <h3 className="font-medium text-iare-teal mb-2">Technical Clubs</h3>
                <ul className="list-disc pl-5 text-sm">
                  <li>Coding Club</li>
                  <li>IEEE Student Branch</li>
                  <li>AI & Robotics Club</li>
                  <li>Cybersecurity Club</li>
                  <li>IoT Innovation Club</li>
                </ul>
              </div>
              <div className="border p-4 rounded bg-gray-50">
                <h3 className="font-medium text-iare-teal mb-2">Cultural Clubs</h3>
                <ul className="list-disc pl-5 text-sm">
                  <li>Music Club</li>
                  <li>Dance Club</li>
                  <li>Drama & Theatre Club</li>
                  <li>Fine Arts Club</li>
                  <li>Photography Club</li>
                </ul>
              </div>
              <div className="border p-4 rounded bg-gray-50">
                <h3 className="font-medium text-iare-teal mb-2">Other Clubs</h3>
                <ul className="list-disc pl-5 text-sm">
                  <li>Literary Club</li>
                  <li>Social Service Club</li>
                  <li>Entrepreneurship Club</li>
                  <li>Environmental Club</li>
                  <li>Career Development Club</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-4">
              <Link to="/campus-life/clubs" className="inline-block bg-iare-teal text-white px-4 py-2 rounded hover:bg-iare-blue transition-colors">
                Explore All Clubs
              </Link>
            </div>
          </div>
          
          <div className="bg-white p-6 border rounded shadow-sm mb-8">
            <h2 className="text-xl font-semibold text-iare-maroon mb-4">Events & Celebrations</h2>
            
            <p className="mb-6">
              The campus comes alive with numerous events and celebrations throughout the academic year. From technical fests 
              to cultural extravaganzas, these events provide platforms for students to showcase their talents, collaborate, 
              compete, and create memorable experiences.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded overflow-hidden">
                <div className="h-48 bg-gray-200">
                  <img src="/placeholder.svg" alt="Technical Fest" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-iare-blue mb-1">TECHNOVANZA</h3>
                  <p className="text-sm text-gray-600 mb-2">Annual Technical Festival</p>
                  <p className="text-sm">
                    A three-day technical extravaganza featuring coding competitions, hackathons, project exhibitions, 
                    technical workshops, guest lectures by industry experts, and more.
                  </p>
                </div>
              </div>
              
              <div className="border rounded overflow-hidden">
                <div className="h-48 bg-gray-200">
                  <img src="/placeholder.svg" alt="Cultural Fest" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-iare-blue mb-1">RHYTHM</h3>
                  <p className="text-sm text-gray-600 mb-2">Annual Cultural Festival</p>
                  <p className="text-sm">
                    A vibrant celebration of arts and culture featuring music performances, dance competitions, 
                    theatrical plays, art exhibitions, literary events, and celebrity performances.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="font-semibold text-iare-blue mb-3">Other Major Events</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                <div className="border p-3 rounded">Freshers' Day</div>
                <div className="border p-3 rounded">Engineers' Day</div>
                <div className="border p-3 rounded">Sports Meet</div>
                <div className="border p-3 rounded">Alumni Meet</div>
                <div className="border p-3 rounded">Graduation Day</div>
                <div className="border p-3 rounded">National Festivals</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 border rounded shadow-sm">
            <h2 className="text-xl font-semibold text-iare-maroon mb-4">Campus Facilities</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="font-semibold text-iare-blue mb-3">Accommodation</h3>
                <p className="text-sm mb-4">
                  IARE provides comfortable and secure hostel facilities for both boys and girls. The hostels are equipped 
                  with modern amenities including furnished rooms, attached bathrooms, Wi-Fi connectivity, recreation areas, 
                  study rooms, and dining facilities.
                </p>
                <ul className="list-disc pl-5 text-sm">
                  <li>Separate hostels for boys and girls</li>
                  <li>24/7 security with CCTV surveillance</li>
                  <li>Regular maintenance and housekeeping</li>
                  <li>Indoor games and recreation facilities</li>
                  <li>High-speed internet connectivity</li>
                  <li>Laundry services</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-iare-blue mb-3">Sports & Recreation</h3>
                <p className="text-sm mb-4">
                  IARE boasts excellent sports and recreation facilities that encourage students to maintain physical 
                  fitness and pursue their sporting interests. Regular tournaments and competitions are organized to 
                  promote sportsmanship and team spirit.
                </p>
                <ul className="list-disc pl-5 text-sm">
                  <li>Olympic-sized swimming pool</li>
                  <li>Indoor sports complex for badminton, table tennis, etc.</li>
                  <li>Cricket ground with pavilion</li>
                  <li>Football and hockey fields</li>
                  <li>Basketball and volleyball courts</li>
                  <li>Fully equipped gymnasium</li>
                  <li>Yoga and meditation center</li>
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-iare-blue mb-3">Dining Options</h3>
                <p className="text-sm mb-4">
                  Multiple dining options are available on campus to cater to diverse tastes and preferences. The college 
                  ensures that hygienic and nutritious food is served at all dining facilities.
                </p>
                <ul className="list-disc pl-5 text-sm">
                  <li>Centralized mess facility serving vegetarian and non-vegetarian meals</li>
                  <li>Food court with multiple cuisines</li>
                  <li>Cafeterias and snack corners</li>
                  <li>Juice bars and ice cream parlors</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-iare-blue mb-3">Other Facilities</h3>
                <p className="text-sm mb-4">
                  IARE campus is equipped with numerous other facilities to ensure a comfortable and productive environment for students.
                </p>
                <ul className="list-disc pl-5 text-sm">
                  <li>Central library with digital resources</li>
                  <li>Wi-Fi enabled campus</li>
                  <li>ATM and banking services</li>
                  <li>Stationery store and printing center</li>
                  <li>Medical center with ambulance service</li>
                  <li>Post office and courier services</li>
                  <li>Transportation facilities</li>
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

export default CampusLife;
