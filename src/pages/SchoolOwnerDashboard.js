import React from "react";
import { Link } from "react-router-dom";
import AddSchoolForm from "../components/schools/AddSchoolForm";
import AddClassForm from "../components/schools/AddClassForm";
import ClassList from "../components/schools/ClassList";
import SchoolListPage from "./schoolListingPage";

const SchoolOwnerDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-semibold">School Owner Dashboard</h2>
      <div className="mt-8 space-y-4">
        <Link to="/schools" className="block text-blue-600 hover:underline">
          <AddSchoolForm />
        </Link>
        <Link to="/classes" className="block text-blue-600 hover:underline">
          <AddClassForm />
        </Link>
        <Link to="/teachers" className="block text-blue-600 hover:underline">
          <SchoolListPage />
        </Link>
        <Link to="/students" className="block text-blue-600 hover:underline">
          <ClassList />
        </Link>
      </div>
    </div>
  );
};

export default SchoolOwnerDashboard;
