import React from "react";
import { useNavigate } from "react-router-dom";

const RoleSelectionPage = () => {
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    navigate(`/${role.toLowerCase()}-register`);
  };

  return (
    <div className="flex flex-col items-center bg-white py-16">
      <h1 className="text-3xl font-bold mb-8">Are You a Teacher or </h1>
      <div className="flex space-x-6">
        <button
          onClick={() => handleRoleSelection("Teacher")}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
        >
          I'm a Teacher
        </button>
        <button
          onClick={() => handleRoleSelection("Student")}
          className="bg-green-500 text-white px-6 py-3 rounded-lg shadow hover:bg-green-600 transition"
        >
          I'm a Student/Pupil
        </button>
      </div>
    </div>
  );
};

export default RoleSelectionPage;
