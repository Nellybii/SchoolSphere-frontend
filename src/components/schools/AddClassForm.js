import React, { useState } from "react";

const AddClassForm = () => {
  const [className, setClassName] = useState("");
  const [studentsNumber, setStudentsNumber] = useState("");
  const [teacherId, setTeacherId] = useState("");
  const [streams, setStreams] = useState([""]); 
  const [subjects, setSubjects] = useState([{ subject: "", teacher: "" }]);

  // Handle updates to a specific stream
  const handleStreamChange = (index, value) => {
    const updatedStreams = [...streams];
    updatedStreams[index] = value;
    setStreams(updatedStreams);
  };

  // Add a new stream field
  const addStreamField = () => {
    setStreams([...streams, ""]);
  };

  // Handle updates to subjects
  const handleSubjectChange = (index, field, value) => {
    const updatedSubjects = [...subjects];
    updatedSubjects[index][field] = value;
    setSubjects(updatedSubjects);
  };

  // Add a new subject field
  const addSubjectField = () => {
    setSubjects([...subjects, { subject: "", teacher: "" }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      className,
      studentsNumber,
      teacherId,
      streams,
      subjects,
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h3 className="text-2xl font-semibold text-gray-700">Add New Class</h3>
      <form onSubmit={handleSubmit} className="space-y-4 mt-6">
        <div>
          <label className="block text-gray-600">Class Name</label>
          <input
            type="text"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-gray-600">Students Number</label>
          <input
            type="text"
            value={studentsNumber}
            onChange={(e) => setStudentsNumber(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-gray-600">Class Teacher</label>
          <input
            type="text"
            value={teacherId}
            onChange={(e) => setTeacherId(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-700">Class Streams</h4>
          {streams.map((stream, index) => (
            <div key={index} className="flex gap-4 mt-2">
              <input
                type="text"
                placeholder={`Stream ${index + 1}`}
                value={stream}
                onChange={(e) => handleStreamChange(index, e.target.value)}
                className="flex-1 p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addStreamField}
            className="mt-2 text-blue-600 hover:underline"
          >
            + Add Another Stream
          </button>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-700">Subjects</h4>
          {subjects.map((item, index) => (
            <div key={index} className="flex gap-4 mt-2">
              <input
                type="text"
                placeholder="Subject Name"
                value={item.subject}
                onChange={(e) =>
                  handleSubjectChange(index, "subject", e.target.value)
                }
                className="flex-1 p-2 border border-gray-300 rounded-md"
                required
              />
              <input
                type="text"
                placeholder="Teacher Name"
                value={item.teacher}
                onChange={(e) =>
                  handleSubjectChange(index, "teacher", e.target.value)
                }
                className="flex-1 p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addSubjectField}
            className="mt-2 text-blue-600 hover:underline"
          >
            + Add Another Subject
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Add Class
        </button>
      </form>
    </div>
  );
};

export default AddClassForm;
