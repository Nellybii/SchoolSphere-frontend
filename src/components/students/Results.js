// src/components/students/Results.jsx
import React from "react";

const Results = ({ results }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-2xl font-semibold text-gray-700">My Results</h3>
      <table className="w-full mt-4">
        <thead>
          <tr>
            <th className="border-b py-2">Subject</th>
            <th className="border-b py-2">Grade</th>
            <th className="border-b py-2">Remarks</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={result.id}>
              <td className="border-b py-2">{result.subject}</td>
              <td className="border-b py-2">{result.grade}</td>
              <td className="border-b py-2">{result.remarks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
