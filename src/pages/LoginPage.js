import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); 
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginResponse = await mockLogin(email, password);

    if (loginResponse.success) {
      const userRole = loginResponse.role;
      setRole(userRole);

      if (userRole === "student") {
        navigate("/student-dashboard");
      } else if (userRole === "teacher") {
        navigate("/teacher-dashboard");
      } else {
        alert("Unknown role! Please contact support.");
      }
    } else {
      alert("Login failed! Please check your credentials.");
    }
  };

  const mockLogin = (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === "student@example.com") {
          resolve({ success: true, role: "student" });
        } else if (email === "teacher@example.com") {
          resolve({ success: true, role: "teacher" });
        } else {
          resolve({ success: false });
        }
      }, 1000); // Simulate network delay
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full">
        <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Login
          </button>
          <div className="flex items-center justify-center mt-4">
            <p className="text-sm text-gray-700">
              Don’t have an account?{" "}
              <a href="/student-register" className="text-indigo-500 hover:underline">
                Register students
              </a>
              <br /> or{" "}
              <a href="/teacher-register" className="text-indigo-500 hover:underline">
                Register teachers
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
