import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/global/Header";
import HomePage from "./pages/HomePage";
import RoleSelectionPage from "./components/global/RoleSelection";
import LoginPage from "./pages/LoginPage";
import TeacherRegister from "./pages/TeacherRegistrationPage";
import StudentRegister from "./pages/StudentRegisterPage";
import SchoolOwnerDashboard from "./pages/SchoolOwnerDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import PaymentPage from "./pages/PaymentPage";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/global/Footer";
import SchoolListPage from "./pages/schoolListingPage";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/school-list" element={<SchoolListPage />} />
            <Route path="/select-role" element={<RoleSelectionPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/teacher-register" element={<TeacherRegister />} />
            <Route path="/student-register" element={<StudentRegister />} />
            <Route path="/dashboard/school-owner" element={<SchoolOwnerDashboard />} />
            <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
            <Route path="/dashboard/student" element={<StudentDashboard />} />
            <Route path="/payments" element={<PaymentPage />} />
            <Route path="*" element={<ErrorPage />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
