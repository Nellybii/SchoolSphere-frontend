import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-green-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">SkoolSphere</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
            <li><Link to="/login" className="hover:text-gray-200">Login</Link></li>
            <li><Link to="/teacher-register" className="hover:text-gray-200">Register a Teacher</Link></li>
            <li><Link to="/student-register" className="hover:text-gray-200">Register a Student</Link></li>
            <li><Link to="/dashboard/school-owner" className="hover:text-gray-200">Manage School</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
