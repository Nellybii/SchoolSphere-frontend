import React from "react";
import { Link } from "react-router-dom";
import PersonalInfo from "../components/students/PersonalInfo";
import Results from "../components/students/Results";
import FinancialInfo from "../components/students/FinancialInfo";
import StudentList from "../components/students/StudentList";

const StudentDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-semibold">Student Dashboard</h2>
      <div className="mt-8 space-y-4">
        <Link to="/personal-info" className="block text-blue-600 hover:underline">
          <PersonalInfo />
        </Link>
        <Link to="/results" className="block text-blue-600 hover:underline">
          <Results />
        </Link>
        <Link to="/financial-info" className="block text-blue-600 hover:underline">
          <FinancialInfo />
        </Link>
        <Link to="studentslist">
          <StudentList />
        </Link>
      </div>
    </div>
  );
};

export default StudentDashboard;
