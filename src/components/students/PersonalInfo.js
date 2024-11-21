import React from "react";
import PropTypes from "prop-types";

const PersonalInfo = ({ student }) => {
  if (!student) {
    return <div className="text-gray-500">No student data available.</div>;
  }

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h3 className="text-2xl font-semibold text-gray-700">Personal Information</h3>
      <div className="mt-4 space-y-2">
        <p>
          <span className="font-semibold text-gray-600">Name:</span> {student.FullName || "N/A"}
        </p>
        <p>
          <span className="font-semibold text-gray-600">Email:</span> {student.email || "N/A"}
        </p>
        {student.contact && (
          <p>
            <span className="font-semibold text-gray-600">Contact:</span> {student.contact}
          </p>
        )}
        {student.className && (
          <p>
            <span className="font-semibold text-gray-600">Class:</span> {student.className}
          </p>
        )}
        {student.address && (
          <p>
            <span className="font-semibold text-gray-600">Address:</span> {student.address}
          </p>
        )}
      </div>
    </div>
  );
};

PersonalInfo.propTypes = {
  student: PropTypes.shape({
    FullName: PropTypes.string,
    email: PropTypes.string,
    contact: PropTypes.string,
    className: PropTypes.string,
    address: PropTypes.string,
  }).isRequired,
};

export default PersonalInfo;
