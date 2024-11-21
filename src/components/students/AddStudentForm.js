// src/components/students/AddStudentForm.jsx
import React, { useState } from "react";

const AddStudentForm = () => {
  const [name, setName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [classAssigned, setClassAssigned] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, rollNumber, classAssigned });
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-2xl font-semibold text-gray-700">Add Student</h3>
      <form onSubmit={handleSubmit} className="space-y-4 mt-6">
        <div>
          <label className="block text-gray-600">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-gray-600">Roll Number</label>
          <input
            type="text"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-gray-600">Class Assigned</label>
          <input
            type="text"
            value={classAssigned}
            onChange={(e) => setClassAssigned(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Add Student
        </button>
      </form>
    </div>
  );
};

export default AddStudentForm;
