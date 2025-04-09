
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Placements = () => {
  const placementStats = [
    { year: "2024", companies: 382, offers: 3814, highestPackage: "₹54.0 LPA", averagePackage: "₹8.5 LPA" },
    { year: "2023", companies: 347, offers: 3569, highestPackage: "₹52.0 LPA", averagePackage: "₹7.9 LPA" },
    { year: "2022", companies: 312, offers: 3205, highestPackage: "₹48.5 LPA", averagePackage: "₹7.2 LPA" },
    { year: "2021", companies: 286, offers: 2918, highestPackage: "₹45.0 LPA", averagePackage: "₹6.8 LPA" },
  ];

  const topRecruiters = [
    "Microsoft", "Amazon", "Google", "TCS", "Accenture", "Infosys", "Wipro", "Cognizant",
    "Capgemini", "IBM", "Deloitte", "HCL", "Tech Mahindra", "Oracle", "Adobe", "Intel",
    "Cisco", "Goldman Sachs", "Morgan Stanley", "JP Morgan Chase"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="bg-iare-gray p-2 mb-6">
          <nav className="text-sm">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <Link to="/" className="text-iare-blue hover:text-iare-teal">Home</Link>
                <span className="mx-2">/</span>
              </li>
              <li className="flex items-center text-gray-500">Placements</li>
            </ol>
          </nav>
        </div>

        <h1 className="text-3xl font-bold text-iare-blue border-b-2 border-iare-teal pb-2 mb-6">Placements</h1>

        <div className="mb-12">
          <div className="bg-white shadow-md rounded overflow-hidden">
            <div className="bg-iare-blue text-white p-4">
              <h2 className="text-xl font-bold">Placement Highlights</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-iare-gray p-4 rounded shadow-sm flex flex-col items-center">
                  <div className="text-3xl font-bold text-iare-teal mb-2">95%+</div>
                  <div className="text-center">Placement Rate</div>
                </div>
                <div className="bg-iare-gray p-4 rounded shadow-sm flex flex-col items-center">
                  <div className="text-3xl font-bold text-iare-teal mb-2">380+</div>
                  <div className="text-center">Recruiting Companies</div>
                </div>
                <div className="bg-iare-gray p-4 rounded shadow-sm flex flex-col items-center">
                  <div className="text-3xl font-bold text-iare-teal mb-2">₹54 LPA</div>
                  <div className="text-center">Highest Package</div>
                </div>
                <div className="bg-iare-gray p-4 rounded shadow-sm flex flex-col items-center">
                  <div className="text-3xl font-bold text-iare-teal mb-2">₹8.5 LPA</div>
                  <div className="text-center">Average Package</div>
                </div>
                <div className="bg-iare-gray p-4 rounded shadow-sm flex flex-col items-center">
                  <div className="text-3xl font-bold text-iare-teal mb-2">3800+</div>
                  <div className="text-center">Offers in 2024</div>
                </div>
                <div className="bg-iare-gray p-4 rounded shadow-sm flex flex-col items-center">
                  <div className="text-3xl font-bold text-iare-teal mb-2">50+</div>
                  <div className="text-center">Pre-Placement Offers</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-iare-blue border-b-2 border-iare-teal pb-2 mb-6">Year-wise Placement Statistics</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-iare-darkblue text-white">
                  <th className="py-3 px-4 text-left">Year</th>
                  <th className="py-3 px-4 text-left">Companies Visited</th>
                  <th className="py-3 px-4 text-left">Offers Made</th>
                  <th className="py-3 px-4 text-left">Highest Package</th>
                  <th className="py-3 px-4 text-left">Average Package</th>
                </tr>
              </thead>
              <tbody>
                {placementStats.map((stat, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-3 px-4 border-b">{stat.year}</td>
                    <td className="py-3 px-4 border-b">{stat.companies}</td>
                    <td className="py-3 px-4 border-b">{stat.offers}</td>
                    <td className="py-3 px-4 border-b">{stat.highestPackage}</td>
                    <td className="py-3 px-4 border-b">{stat.averagePackage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-iare-blue border-b-2 border-iare-teal pb-2 mb-6">Placement Process</h2>
            <div className="bg-white shadow-md rounded p-6">
              <ol className="list-decimal pl-5 space-y-4">
                <li>
                  <strong>Pre-Placement Training:</strong> Rigorous training sessions on aptitude, technical skills, and soft skills.
                </li>
                <li>
                  <strong>Resume Building:</strong> Professional resume creation workshops and personalized guidance.
                </li>
                <li>
                  <strong>Mock Interviews:</strong> Practice sessions with industry experts to prepare students.
                </li>
                <li>
                  <strong>Company Visit:</strong> Companies visit campus for presentations and interviews.
                </li>
                <li>
                  <strong>Aptitude Test:</strong> Online or offline test to assess analytical skills.
                </li>
                <li>
                  <strong>Technical Interviews:</strong> Subject knowledge and problem-solving assessment.
                </li>
                <li>
                  <strong>HR Interviews:</strong> Final round to assess communication and cultural fit.
                </li>
                <li>
                  <strong>Offer Letters:</strong> Selected students receive offer letters with package details.
                </li>
              </ol>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-iare-blue border-b-2 border-iare-teal pb-2 mb-6">Placement Support</h2>
            <div className="bg-white shadow-md rounded p-6">
              <ul className="list-disc pl-5 space-y-4">
                <li>
                  <strong>Career Counseling:</strong> One-on-one sessions to help students identify career paths.
                </li>
                <li>
                  <strong>Industry Workshops:</strong> Regular workshops conducted by industry professionals.
                </li>
                <li>
                  <strong>Certification Programs:</strong> Technical certification courses to enhance employability.
                </li>
                <li>
                  <strong>Internship Opportunities:</strong> Summer and winter internship placements.
                </li>
                <li>
                  <strong>Alumni Connect:</strong> Networking events with successful alumni.
                </li>
                <li>
                  <strong>Pre-Placement Offers:</strong> Support for converting internships to full-time offers.
                </li>
                <li>
                  <strong>Industry Visits:</strong> Organized visits to companies for practical exposure.
                </li>
                <li>
                  <strong>Specialized Training:</strong> Targeted training for specific roles and companies.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-iare-blue border-b-2 border-iare-teal pb-2 mb-6">Top Recruiters</h2>
          <div className="bg-white shadow-md rounded p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {topRecruiters.map((company, index) => (
                <div
                  key={index}
                  className="bg-iare-gray p-3 rounded text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-iare-blue border-b-2 border-iare-teal pb-2 mb-6">Contact Placement Office</h2>
          <div className="bg-white shadow-md rounded p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Training and Placement Officer</h3>
                <p className="mb-2"><strong>Prof. M. SriMurali</strong></p>
                <p className="mb-2">Email: msrimurali@yahoo.co.in</p>
                <p>Phone: +91-9603078920</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Placement Office</h3>
                <p className="mb-2">Sri venkateswara university</p>
                <p className="mb-2">Main Building, II floor</p>
                <p className="mb-2">Tirupati - 517202</p>
                <p className="mb-2">Andhra Pradesh, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Placements;
