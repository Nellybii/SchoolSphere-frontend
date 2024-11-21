// src/components/teachers/TeacherList.jsx
import React from "react";

const TeacherList = ({ teachers }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-2xl font-semibold text-gray-700">Teachers List</h3>
      <div className="mt-4 space-y-4">
        {teachers.map((teacher) => (
          <div key={teacher.id} className="flex justify-between">
            <span>{teacher.name}</span>
            <span>{teacher.subject}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherList;
