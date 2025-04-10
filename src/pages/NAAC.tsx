
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FileText, Download, ExternalLink, Award, CheckCircle, Calendar, Users, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const NAAC = () => {
  const naacCriteria = [
    {
      title: "Curricular Aspects",
      icon: <FileText className="w-6 h-6 text-iare-teal" />,
      description: "Academic flexibility, curriculum enrichment, and feedback system"
    },
    {
      title: "Teaching-Learning and Evaluation",
      icon: <Users className="w-6 h-6 text-iare-teal" />,
      description: "Student enrollment, catering to student diversity, teaching-learning process"
    },
    {
      title: "Research, Innovations and Extension",
      icon: <Award className="w-6 h-6 text-iare-teal" />,
      description: "Promotion of research and facilities, resource mobilization for research"
    },
    {
      title: "Infrastructure and Learning Resources",
      icon: <BarChart className="w-6 h-6 text-iare-teal" />,
      description: "Physical facilities, library as a learning resource, IT infrastructure"
    },
    {
      title: "Student Support and Progression",
      icon: <CheckCircle className="w-6 h-6 text-iare-teal" />,
      description: "Student support, student progression, student participation and activities"
    },
    {
      title: "Governance, Leadership and Management",
      icon: <Users className="w-6 h-6 text-iare-teal" />,
      description: "Institutional vision and leadership, strategy development and deployment"
    },
    {
      title: "Institutional Values and Best Practices",
      icon: <Calendar className="w-6 h-6 text-iare-teal" />,
      description: "Institutional values and social responsibilities, best practices"
    }
  ];

  const documents = [
    { title: "Self Study Report (SSR)", format: "PDF" },
    { title: "Annual Quality Assurance Report (AQAR)", format: "PDF" },
    { title: "NAAC Accreditation Certificate", format: "PDF" },
    { title: "SVUCE NAAC Grade Sheet", format: "PDF" },
    { title: "Institutional Information for Quality Assessment (IIQA)", format: "PDF" },
    { title: "Extended Profile and Criteria Wise Metrics (ECM)", format: "PDF" }
  ];

  const timeline = [
    { year: "2022", event: "Achieved A++ grade with CGPA of 3.71 on a 4-point scale" },
    { year: "2017", event: "Reaccredited with A grade in the 3rd Cycle" },
    { year: "2010", event: "Reaccredited with A grade in the 2nd Cycle" },
    { year: "2004", event: "First accredited with A grade" }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-iare-blue to-iare-teal text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-6">
              <h2 className="text-4xl font-bold">NAAC A+</h2>
              <p className="text-xl">National Assessment and Accreditation Council</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">NAAC Accreditation</h1>
            <p className="text-xl max-w-3xl mx-auto">
              National Assessment and Accreditation Council (NAAC) accreditation is a performance assessment to evaluate the quality of education at SVUCE
            </p>
          </div>
        </div>

        {/* NAAC Grade Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-gray-50 rounded-xl p-8 md:p-12 shadow-lg border border-gray-100 text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-iare-blue">NAAC Accreditation Status</h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
                <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 w-full md:w-auto">
                  <div className="text-5xl font-bold text-iare-teal mb-2">A+</div>
                  <div className="text-gray-600">Grade</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 w-full md:w-auto">
                  <div className="text-5xl font-bold text-iare-teal mb-2">3.71</div>
                  <div className="text-gray-600">CGPA (out of 4)</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 w-full md:w-auto">
                  <div className="text-5xl font-bold text-iare-teal mb-2">4th</div>
                  <div className="text-gray-600">Cycle</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200 w-full md:w-auto">
                  <div className="text-5xl font-bold text-iare-teal mb-2">2022</div>
                  <div className="text-gray-600">Valid Until 2029</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NAAC Criteria */}
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-iare-blue">Assessment Criteria</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                NAAC assesses and accredits institutions based on the following seven criteria
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {naacCriteria.map((criterion, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-start">
                    <div className="mr-4 bg-gray-100 p-3 rounded-full">{criterion.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-iare-blue">Criterion {index + 1}: {criterion.title}</h3>
                      <p className="text-gray-600 text-sm">{criterion.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Documents Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-iare-blue">NAAC Documents</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Access key documents related to our NAAC accreditation process
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {documents.map((document, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex items-center">
                  <div className="mr-4 text-iare-blue">
                    <FileText size={36} />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-lg mb-1">{document.title}</h3>
                    <p className="text-gray-500 text-sm">{document.format}</p>
                  </div>
                  <div>
                    <button className="p-2 text-iare-teal hover:text-iare-blue transition-colors">
                      <Download size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a href="https://www.iare.ac.in/NAAC/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center text-iare-blue font-medium hover:text-blue-700 transition-colors">
                View Complete NAAC Repository <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </div>



        {/* IQAC Section */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-iare-blue">Internal Quality Assurance Cell (IQAC)</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                The IQAC is committed to maintaining and enhancing quality in all academic and administrative aspects
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-4 text-iare-blue">IQAC Objectives</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="text-iare-teal mr-3 flex-shrink-0 mt-1" size={18} />
                  <span>Develop a system for conscious, consistent and catalytic improvement in the performance of the institution</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-iare-teal mr-3 flex-shrink-0 mt-1" size={18} />
                  <span>Promote measures for institutional functioning towards quality enhancement through internalization of quality culture</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-iare-teal mr-3 flex-shrink-0 mt-1" size={18} />
                  <span>Ensure timely, efficient and progressive performance of academic, administrative and financial tasks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-iare-teal mr-3 flex-shrink-0 mt-1" size={18} />
                  <span>Act as a nodal agency for coordinating quality-related activities, including adoption and dissemination of best practices</span>
                </li>
              </ul>

              <div className="mt-6 text-center">
                <Link to="https://www.nls.ac.in/about/internal-quality-assurance-cell-iqac/" target='blank' className="inline-flex items-center bg-iare-blue text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Visit IQAC Page <ExternalLink size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NAAC;
