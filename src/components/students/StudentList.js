// src/components/students/StudentList.jsx
import React from "react";

const StudentList = ({ students }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-2xl font-semibold text-gray-700">Student List</h3>
      <table className="w-full mt-4">
        <thead>
          <tr>
            <th className="border-b py-2">ID</th>
            <th className="border-b py-2">Name</th>
            <th className="border-b py-2">Email</th>
            <th className="border-b py-2">Contact</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td className="border-b py-2">{student.id}</td>
              <td className="border-b py-2">{student.name}</td>
              <td className="border-b py-2">{student.email}</td>
              <td className="border-b py-2">{student.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
