
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '../../components/ui/table';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '../../components/ui/tabs';

const Scholarships = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="container mx-auto flex flex-col md:flex-row my-6 px-4">
        <div className="w-full md:w-1/4 mb-6 md:mb-0 md:pr-6">
          <Sidebar />
        </div>

        <div className="w-full md:w-3/4">
          <div className="bg-iare-gray p-2 mb-4">
            <nav className="text-sm">
              <ol className="list-none p-0 inline-flex">
                <li className="flex items-center">
                  <Link to="/" className="text-iare-blue hover:text-iare-teal">Home</Link>
                  <span className="mx-2">/</span>
                </li>
                <li className="flex items-center">
                  <Link to="/student-services" className="text-iare-blue hover:text-iare-teal">Student Services</Link>
                  <span className="mx-2">/</span>
                </li>
                <li className="flex items-center text-gray-500">Scholarships</li>
              </ol>
            </nav>
          </div>

          <div className="mb-6">
            <h1 className="text-2xl font-bold text-iare-blue border-b-2 border-iare-teal pb-2 mb-4">Scholarships</h1>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="government">Government Scholarships</TabsTrigger>
                <TabsTrigger value="institutional">Institutional Scholarships</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="bg-white p-6 border rounded shadow-sm">
                <h2 className="text-xl font-semibold text-iare-maroon mb-4">Scholarship Facilities</h2>
                <p className="mb-4">
                  Institute of Aeronautical Engineering has been facilitating numerous scholarships for the students in all branches. We make sure all students who are eligible for various scholarships from the government will get their allotted scholarships on time through our dedicated scholarship section.
                </p>
                <p className="mb-6">
                  The institute believes in honoring merit and has been offering merit scholarships to both UG and PG admitted students and continuing students.
                </p>

                <div className="bg-iare-lightblue p-4 rounded-lg border border-iare-teal">
                  <h3 className="text-lg font-semibold text-iare-blue mb-2">Scholarship Application Process</h3>
                  <p className="mb-2">
                    To apply for scholarships, please visit the Scholarship Section at the Administrative Block or contact:
                  </p>
                  <p className="mb-1"><strong>Scholarship Section</strong></p>
                  <p className="mb-1">Email: scholarships@iare.ac.in</p>
                  <p>Phone: +91-8888123456</p>
                </div>
              </TabsContent>
              
              <TabsContent value="government" className="bg-white p-6 border rounded shadow-sm">
                <h2 className="text-xl font-semibold text-iare-maroon mb-4">Government Scholarships</h2>
                
                <p className="mb-4">
                  Students belonging to SC, ST, BC, EBC, Disabled, Minorities can avail scholarships offered by both Central and State Governments.
                </p>
                
                <h3 className="text-lg font-semibold text-iare-blue mb-2">Current Schemes</h3>
                
                <Table className="mb-6">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="bg-iare-darkblue text-white">Scheme Name</TableHead>
                      <TableHead className="bg-iare-darkblue text-white">Eligibility</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">State Government Fee Reimbursement</TableCell>
                      <TableCell>Students with parental income less than Rs.2.0 lakhs per annum</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Post-Matric Scholarships</TableCell>
                      <TableCell>For SC/ST/OBC students</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Central Sector Scholarship</TableCell>
                      <TableCell>Top 20 percentile students from economically weaker sections</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Prime Minister's Scholarship Scheme</TableCell>
                      <TableCell>For wards of ex-servicemen/ex-para-military personnel</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Minority Scholarships</TableCell>
                      <TableCell>For students from minority communities</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Pragati Scholarship (AICTE)</TableCell>
                      <TableCell>For girl students in technical education</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                
                <div className="bg-iare-gray p-4 rounded-md mb-6">
                  <h4 className="font-semibold mb-2">Required Documents</h4>
                  <ul className="list-disc pl-6">
                    <li>Income certificate</li>
                    <li>Caste certificate</li>
                    <li>Aadhaar card</li>
                    <li>Previous educational certificates</li>
                    <li>Bank account details (with Aadhaar linkage)</li>
                    <li>Recent passport-sized photographs</li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="institutional" className="bg-white p-6 border rounded shadow-sm">
                <h2 className="text-xl font-semibold text-iare-maroon mb-4">Institutional Scholarships</h2>
                
                <p className="mb-4">
                  IARE offers various institutional scholarships to encourage academic excellence and support deserving students.
                </p>
                
                <h3 className="text-lg font-semibold text-iare-blue mb-2">Merit-Based Tuition Fee Waivers</h3>
                
                <Table className="mb-6">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="bg-iare-darkblue text-white">Academic Performance</TableHead>
                      <TableHead className="bg-iare-darkblue text-white">Scholarship Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">CGPA above 9.5</TableCell>
                      <TableCell>25% tuition fee waiver for the next academic year</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">CGPA above 9.0</TableCell>
                      <TableCell>15% tuition fee waiver for the next academic year</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">CGPA above 8.5</TableCell>
                      <TableCell>10% tuition fee waiver for the next academic year</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                
                <h3 className="text-lg font-semibold text-iare-blue mb-2">Special Category Scholarships</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="border p-4 rounded shadow-sm">
                    <h4 className="font-medium text-iare-maroon mb-2">Sports Excellence Scholarship</h4>
                    <p className="text-sm">For students representing at state/national/international levels in sports</p>
                    <p className="text-xs mt-2 font-bold">Scholarship amount: Up to 50% tuition fee waiver</p>
                  </div>
                  <div className="border p-4 rounded shadow-sm">
                    <h4 className="font-medium text-iare-maroon mb-2">Research Scholarship</h4>
                    <p className="text-sm">For students publishing research papers in reputed journals</p>
                    <p className="text-xs mt-2 font-bold">Scholarship amount: Up to 20% tuition fee waiver</p>
                  </div>
                  <div className="border p-4 rounded shadow-sm">
                    <h4 className="font-medium text-iare-maroon mb-2">Innovation Scholarship</h4>
                    <p className="text-sm">For students with patents or innovative projects</p>
                    <p className="text-xs mt-2 font-bold">Scholarship amount: Up to 30% tuition fee waiver</p>
                  </div>
                  <div className="border p-4 rounded shadow-sm">
                    <h4 className="font-medium text-iare-maroon mb-2">Sibling Scholarship</h4>
                    <p className="text-sm">For siblings studying concurrently at IARE</p>
                    <p className="text-xs mt-2 font-bold">Scholarship amount: 10% tuition fee waiver for the younger sibling</p>
                  </div>
                </div>
                
                <div className="bg-iare-lightblue p-4 rounded-lg border border-iare-teal">
                  <h3 className="text-lg font-semibold text-iare-blue mb-2">How to Apply for Institutional Scholarships</h3>
                  <p className="mb-2">
                    Applications for institutional scholarships are accepted at the beginning of each academic year.
                  </p>
                  <p className="mb-1">
                    <strong>Contact:</strong> Dean, Student Affairs
                  </p>
                  <p>
                    <strong>Email:</strong> dean.studentaffairs@iare.ac.in
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Scholarships;
