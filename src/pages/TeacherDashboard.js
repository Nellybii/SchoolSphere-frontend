import React from "react";
import { Link } from "react-router-dom";

const TeacherDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-semibold">Teacher Dashboard</h2>
      <div className="mt-8 space-y-4">
        <Link to="/classes" className="block text-blue-600 hover:underline">View Assigned Classes</Link>
        <Link to="/results" className="block text-blue-600 hover:underline">Upload Results</Link>
      </div>
    </div>
  );
};

export default TeacherDashboard;
