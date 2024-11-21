import React, { useState } from "react";

const AddSchoolForm = () => {
  const [formData, setFormData] = useState({
    schoolName: "",
    schoolEmail: "",
    schoolPhoneNumber: "",
    schoolAddress: "",
    location: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (Object.values(formData).some((field) => !field.trim())) {
      setError("All fields are required.");
      return;
    }

    console.log("School added:", formData);

    setFormData({
      schoolName: "",
      schoolEmail: "",
      schoolPhoneNumber: "",
      schoolAddress: "",
      location: "",
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h3 className="text-2xl font-semibold text-gray-700 mb-4">Add New School</h3>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { label: "School Name", name: "schoolName", type: "text" },
          { label: "School Email", name: "schoolEmail", type: "email" },
          { label: "School Phone Number", name: "schoolPhoneNumber", type: "tel" },
          { label: "School Address", name: "schoolAddress", type: "text" },
          { label: "Location", name: "location", type: "text" },
        ].map((field) => (
          <div key={field.name}>
            <label className="block text-gray-600">{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-green-700"
        >
          Add School
        </button>
      </form>
    </div>
  );
};

export default AddSchoolForm;
