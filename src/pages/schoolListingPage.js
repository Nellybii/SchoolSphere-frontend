import React from "react";
import { useNavigate } from "react-router-dom";

const SchoolListPage = () => {
  const navigate = useNavigate();
  
  const schools = ["Green Valley High School", "Riverdale Academy", "Sunshine College"];

  const handleSchoolSelect = (school) => {
    navigate(`/role-selection/${school}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-center py-16">
      <h1 className="text-3xl font-bold mb-8">Select Your School</h1>
      <div className="space-y-4">
        {schools.map((school, index) => (
          <button
            key={index}
            onClick={() => handleSchoolSelect(school)}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
          >
            {school}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SchoolListPage;
