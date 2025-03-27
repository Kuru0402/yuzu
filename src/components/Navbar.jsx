import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Images/brandlogo.svg"; // Ensure correct path
import { Link, useLocation } from "react-router-dom";
import TopBar from "./TopBar";
import { IoSend } from "react-icons/io5";
import ChatComponent from "./ChatComponent";

const Navbar = () => {
  const [isTopBarVisible, setIsTopBarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsTopBarVisible(false);
      } else {
        setIsTopBarVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    setDropdownOpen(false);
  };
  const closeMenus = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };
  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log("Clicked element:", event.target); // Debugging
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav
        className={`w-full shadow-md backdrop-blur-sm  border-b fixed border-gray-900 dark:border-gray-300 h-18 transition-all duration-500 ease-in-out z-50 ${
          isTopBarVisible ? "sm:top-0 top-0" : "top-0"
        }`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between  mx-auto  px-0 py-0 ">
          {/* Logo */}
          <Link to="/Home" className="flex items-center gap-2 z-50">
            <img
              src={logo}
              className="h-16 w-auto shadow-lg hover:shadow-2xl transition duration-300 hover:scale-105"
              alt="Yuzu Logo"
            />
            <span className="text-3xl font-bold whitespace-nowrap -ml-4 tracking-wide bg-gradient-to-r from-yellow-500 to-white bg-clip-text text-transparent">
              YUZU
            </span>
          </Link>

          {/* Menu Items */}

          <ul className="hidden md:flex md:space-x-10" id="mega-menu-full-cta">
            {[
              { name: "Home", path: "/Home" },
              { name: "About", path: "/About" },
              { name: "Contact", path: "/Contact" },
            ].map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`relative text-lg z-50 transition-colors duration-300 after:content-[''] 
              after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-red-700 
              after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 
              after:mt-10 ${
                isActive(item.path)
                  ? "text-red-500 font-semibold after:scale-x-100 "
                  : "hover:text-yellow-500 hover:font-semibold dark:text-yellow-400 "
              }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <li ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                type="button"
                className={`relative flex items-center justify-between w-full py-2 px-3 rounded-sm md:w-auto 
            text-lg dark:text-yellow-400 hover:text-red-500 hover:font-semibold transition-colors duration-300 
            z-50 md:hover:bg-transparent md:border-0 md:p-0 dark:hover:text-red-500 
             ${isActive("/Services") ? "text-red-500 font-semibold" : ""}`}
              >
                Services
                <svg
                  className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
                {/* Underline effect */}
                <span
                  className={`absolute left-0 bottom-0 w-full h-[3px] bg-red-900 transition-transform duration-300 ${
                    isActive("/Services")
                      ? "scale-x-100"
                      : "scale-x-0 hover:scale-x-100"
                  }`}
                ></span>
              </button>
            </li>
          </ul>

          {/* Action Buttons */}
          <div className="flex space-x-4">
            <motion.button
              type="button"
              className={`text-black font-bold bg-yellow-500 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-small rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-yellow-600 dark:hover:bg-yellow-800 dark:focus:ring-blue-600 transition duration-300 ${isOpen ? "opacity-0 invisible" : "opacity-100 visible"}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsOpen(true); // Open chat or perform action
              }}
            >
              Call to Action
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="inline-flex items-center p-2 w-12 h-12 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-900 dark:focus:ring-gray-600"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 shadow-md p-4">
            <ul className="space-y-4">
              <li>
                <Link
                  to="#"
                  className="block text-gray-900 text-lg hover:text-blue-700 dark:text-white"
                  onClick={closeMenus}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/About"
                  className="block text-gray-900 text-lg hover:text-yellow-500 dark:text-white"
                  onClick={closeMenus}
                >
                  About
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                  className="flex justify-between w-full text-gray-900 text-lg hover:text-blue-700 dark:text-white"
                >
                  Servics
                  <svg
                    className={`w-2.5 h-2.5 ml-2 transition-transform ${
                      isDropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
              </li>
              <li>
                <Link
                  to="/Contact"
                  className="block text-gray-900 text-lg hover:text-blue-700 dark:text-white"
                  onClick={closeMenus}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}

        {isDropdownOpen && (
          <div className="mt-4 m-3 rounded-lg border-gray-200 shadow-xs bg-black md:bg-white border dark:bg-black dark:border-yellow-700">
            <div className=" max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6">
              <ul
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 "
                ref={dropdownRef}
              >
                <li>
                  <Link
                    to="/Service1"
                    ref={dropdownRef}
                    className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={closeMenus}
                  >
                    <div className="font-semibold text-lg">
                      {" "}
                      Strategy & Business Growth
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      From market research to CRM tools, we craft tailored
                      growth strategies for startups and MSMEs.
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Service2"
                    className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={closeMenus}
                  >
                    <div className="font-semibold text-lg">
                      Design & Digital Presence
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      We create impactful digital identities and experiences
                      with strategic design and web solutions.
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Service3"
                    className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 "
                    onClick={closeMenus}
                  >
                    <div className="font-semibold text-lg">
                      Content & Brand Storytelling
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      We help brands craft compelling narratives that connect
                      with their audience.
                    </span>
                  </Link>
                </li>

                <li>
                  <a
                    href="#"
                    className="p-5 bg-gray-700/80 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken flex flex-col justify-between"
                    onClick={closeMenus}
                  >
                    <p className="max-w-xl mb-5 font-bold leading-tight tracking-tight text-white">
                      Dashboard navigation.
                    </p>
                    <button
                      type="button"
                      class="w-fit inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700"
                      onClick={closeMenus}
                    >
                      Get started
                      <svg
                        className="w-3 h-3 ms-2 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed bottom-5 right-5 z-[100]">
            <ChatComponent setIsOpen={setIsOpen} />
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
