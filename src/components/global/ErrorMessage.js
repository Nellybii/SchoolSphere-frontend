import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <div className="bg-red-500 text-white p-4 rounded-md">
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
