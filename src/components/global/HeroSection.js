import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate("/select-role");
    };
    return (
        <section className="bg-gray-100 text-center py-16 mb-30">
            <div className="">
                <h1 className="text-4xl font-extrabold text-black pt-6 pb-6 mb-8">
                    Welcome to SkoolSphere
                </h1>
            </div>
            <div className="flex items-center justify-between px-8 mb-16">
                <div className="w-1/2 text-left">
                    <p className="mt-4 text-lg text-black py-8">
                        SkoolSphere is an innovative platform designed to streamline school management. From tracking student performance to managing payments and communication, we provide an all-in-one solution that helps educators, school owners, and students to succeed.
                    </p>
                </div>

                <div className="w-1/2">
                    <img
                        src="https://images.unsplash.com/photo-1503676382389-4809596d5290?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2Nob29sJTIwJTIwbWFnYW1lbnR8ZW58MHx8MHx8fDA%3D/500x200"
                        alt="SkoolSphere platform"
                        className="w-full h-auto"
                    />
                </div>
            </div>

            <div className="flex justify-center items-center mt-8 mb-12">
                <button
                    onClick={handleGetStarted}
                    className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-500 transition duration-300 ease-in-out"
                >
                    Get Started
                </button>
            </div>

            <div className="py-16 mt-8">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-black pt-6 pb-6">
                        We Ensure Smooth Academic Management
                    </h1>
                    <p className="mt-4 text-lg text-gray-700">
                        At SkoolSphere, we believe in empowering students with the skills they need to succeed in the classroom and in life.
                        Our approach is based on our universally acclaimed 3D learning model, which integrates activity and reflection techniques.
                        This model ensures that students not only learn but also develop essential soft skills that will serve them throughout their careers and beyond.
                    </p>
                </div>

                <div className="flex justify-center space-x-12">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-64">
                        <h3 className="text-xl font-semibold text-green-600">
                            Can You easily register your school and manage it easily?
                        </h3>
                        <p className="mt-4 text-gray-700">
                            SkoolSphere is designed to make school registration and management simple and efficient. With an intuitive user interface, you can easily register your school, manage student records, track payments, and communicate with staff and parents—all in one place.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg w-64">
                        <h3 className="text-xl font-semibold text-green-600">
                            Can You easily upload your students' results and allow them access anywhere?
                        </h3>
                        <p className="mt-4 text-gray-700">
                            With SkoolSphere, you can easily upload student results and provide them with secure, remote access. The platform allows students to view their results from any location, ensuring that they stay informed and up-to-date on their academic progress.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg w-64">
                        <h3 className="text-xl font-semibold text-green-600">
                            Can you easily access your performance and finance report as a student?
                        </h3>
                        <p className="mt-4 text-gray-700">
                            SkoolSphere provides students with easy access to both their academic performance and finance reports. Students can view their grades, progress, and financial status at any time, making it simple to stay informed and manage their academic journey effectively.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
