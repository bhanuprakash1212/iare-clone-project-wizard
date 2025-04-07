
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-full bg-white">
      <div className="bg-iare-teal text-white py-3 px-4 font-semibold">
        Student Services
      </div>
      <ul className="py-2">
        <li className="py-1 px-4 hover:bg-gray-100">
          <Link to="/student-services" className="flex items-center">
            <span className="text-iare-teal mr-2">•</span> Home
          </Link>
        </li>
        <li className="py-1 px-4 hover:bg-gray-100">
          <Link to="/student-services/learning-technologies" className="flex items-center">
            <span className="text-iare-teal mr-2">•</span> Learning and Educational Technologies
          </Link>
        </li>
        <li className="py-1 px-4 hover:bg-gray-100">
          <Link to="/student-services/experiential-learning" className="flex items-center">
            <span className="text-iare-teal mr-2">•</span> Experiential Learning (ExL)
          </Link>
        </li>
        <li className="py-1 px-4 hover:bg-gray-100">
          <Link to="/student-services/self-learning" className="flex items-center">
            <span className="text-iare-teal mr-2">•</span> Self Learning
          </Link>
        </li>
        <li className="py-1 px-4 hover:bg-gray-100">
          <Link to="/student-services/career-guidance" className="flex items-center">
            <span className="text-iare-teal mr-2">•</span> Career Guidance and Counselling
          </Link>
        </li>
        <li className="py-1 px-4 hover:bg-gray-100">
          <Link to="/student-services/counselling-system" className="flex items-center">
            <span className="text-iare-teal mr-2">•</span> Student Counselling System
          </Link>
        </li>
        <li className="py-1 px-4 hover:bg-gray-100">
          <Link to="/student-services/makers-space" className="flex items-center">
            <span className="text-iare-teal mr-2">•</span> Makers Space
          </Link>
        </li>
        <li className="py-1 px-4 hover:bg-gray-100">
          <Link to="/student-services/development-program" className="flex items-center">
            <span className="text-iare-teal mr-2">•</span> Student Development Program
          </Link>
        </li>
        <li className="py-1 px-4 hover:bg-gray-100">
          <Link to="/student-services/certifications" className="flex items-center">
            <span className="text-iare-teal mr-2">•</span> Certifications
          </Link>
        </li>
        <li className="py-1 px-4 hover:bg-gray-100">
          <Link to="/student-services/co-curricular" className="flex items-center">
            <span className="text-iare-teal mr-2">•</span> Co-Curricular Activities
          </Link>
        </li>
        <li className="py-1 px-4 hover:bg-gray-100">
          <Link to="/student-services/innovation" className="flex items-center">
            <span className="text-iare-teal mr-2">•</span> Innovation Creativity Entrepreneurship
          </Link>
        </li>
        <li className="py-1 px-4 hover:bg-gray-100">
          <Link to="/student-services/projects" className="flex items-center">
            <span className="text-iare-teal mr-2">•</span> Projects | Mockups | Competitions
          </Link>
        </li>
        <li className="py-1 px-4 hover:bg-gray-100">
          <Link to="/student-services/international" className="flex items-center">
            <span className="text-iare-teal mr-2">•</span> International Exposure
          </Link>
        </li>
        <li className="py-1 px-4 hover:bg-gray-100">
          <Link to="/student-services/scholarships" className="flex items-center">
            <span className="text-iare-teal mr-2">•</span> Scholarships
          </Link>
        </li>
        <li className="py-1 px-4 hover:bg-gray-100">
          <Link to="/student-services/medical-centre" className="flex items-center">
            <span className="text-iare-teal mr-2">•</span> Medical Centre
          </Link>
        </li>
        <li className="py-1 px-4 hover:bg-gray-100">
          <Link to="/student-services/employability" className="flex items-center">
            <span className="text-iare-teal mr-2">•</span> Career and Employability Skills
          </Link>
        </li>
        <li className="py-1 px-4 hover:bg-gray-100">
          <Link to="/student-services/competency" className="flex items-center">
            <span className="text-iare-teal mr-2">•</span> Competency Building and Consultancy
          </Link>
        </li>
        <li className="py-1 px-4 hover:bg-gray-100">
          <Link to="/student-services/support-hub" className="flex items-center">
            <span className="text-iare-teal mr-2">•</span> Student Learning Support Hub
          </Link>
        </li>
      </ul>
      <div className="bg-iare-teal text-white py-3 px-4 mt-4">
        Contact Dean of Student Services
      </div>
    </div>
  );
};

export default Sidebar;
