// src/components/schools/SchoolList.jsx
import React from "react";

const SchoolList = ({ schools, onSelect }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-2xl font-semibold text-gray-700">Schools</h3>
      <ul className="mt-4">
        {schools.map((school) => (
          <li
            key={school.id}
            className="border-b py-2 cursor-pointer hover:bg-gray-100"
            onClick={() => onSelect(school)}
          >
            <div className="flex justify-between">
              <span className="text-gray-700">{school.name}</span>
              <span className="text-sm text-gray-500">{school.location}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SchoolList;
