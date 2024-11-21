// src/components/teachers/AssignedClasses.jsx
import React from "react";

const AssignedClasses = ({ classes }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-2xl font-semibold text-gray-700">Assigned Classes</h3>
      <ul className="mt-4">
        {classes.map((classItem) => (
          <li key={classItem.id} className="border-b py-2">
            {classItem.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssignedClasses;
