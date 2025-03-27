import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import logo from "../assets/Images/brandlogo.svg";
import { Link } from "react-router-dom";
import ChatComponent from "./ChatComponent";


export default function Footer() {

  

  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
        {/* Left Section - Branding with Yuzu Logo */}
        <div className="flex flex-col items-center md:items-start">
          <a href="/" className="flex items-center gap-2">
            <img
              src={logo}
              className="h-16 w-auto shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105"
              alt="Yuzu Logo"
            />
            <span className="text-3xl font-bold whitespace-nowrap -ml-4 tracking-wide bg-gradient-to-r from-yellow-500 to-blue-500 bg-clip-text text-transparent">
              YUZU
            </span>
          </a>
        </div>

        {/* Center Section - Quick Links */}
        <nav>
          <ul className="flex flex-col md:flex-row gap-4 text-gray-300 text-lg pt-6">
            <li className="relative">
              <Link
                href="#"
                className="hover:text-yellow-400 transition"
              >
                Services
              </Link>
              <span className="hidden md:inline border-l border-gray-400 h-4 mx-2"></span>
            </li>
            <li className="relative">
              <Link to="/About" className="hover:text-yellow-400 transition">
                About
              </Link>
              <span className="hidden md:inline border-l border-gray-400 h-4 mx-2"></span>
            </li>
            <li>
              <Link to="/Contact" className="hover:text-yellow-400 transition">
                Contact
              </Link>
            </li>
          </ul>

          {/* Social Media Icons - Centered Below Quick Links */}
          <div className="flex justify-center gap-4 mt-2">
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-400 transition"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-400 transition"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-400 transition"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-400 transition"
            >
              <FaInstagram size={18} />
            </a>
          </div>
        </nav>

        {/* Right Section - Call to Action */}
        <div className="flex flex-col items-center md:items-end">
          <a
             onClick={() =>setIsOpen(true)}
            className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition"
          >
            Let’s Talk Growth
          </a>
        </div>
      </div>
     
      {/* Bottom Section */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Yuzu. All rights reserved.
      </div>
    </footer>
  );
}
