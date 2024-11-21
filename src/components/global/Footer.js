import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
   
  return (
    <footer className="bg-green-600 text-white p-4 mt-8">
      <div className="max-w-7xl mx-auto text-center">
        <p>&copy; 2024 SkoolSphere. All rights reserved.</p>
        <div className="mt-4">
          <ul className="flex justify-center space-x-6">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-600"
              >
                <FaFacebook size={28} />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400"
              >
                <FaTwitter size={28} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-700"
              >
                <FaLinkedin size={28} />
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <ul className="flex justify-center space-x-6">
            <li>
              <a href="/contact-us" className="text-white hover:text-gray-300">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/terms-and-conditions" className="text-white hover:text-gray-300">
                Terms and Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
