import { useState, useEffect, useRef } from "react";

const ServicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <li className="relative" ref={dropdownRef}>
      {/* Button to toggle dropdown */}
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
      >
        Services
        <svg
          className="w-2.5 h-2.5 ms-3"
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
      </button>

      {/* Full-Width Dropdown Content */}
      {isOpen && (
        <div className="absolute left-0 top-full w-screen bg-white border-t border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-600">
          <div className="grid max-w-screen-xl mx-auto px-6 py-5 text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3">
            {/* First Column */}
            <ul className="space-y-4">
              <li>
                <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                  Online Stores
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                  Segmentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                  Marketing CRM
                </a>
              </li>
            </ul>

            {/* Second Column */}
            <ul className="hidden space-y-4 md:block">
              <li>
                <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                  Our Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                  License
                </a>
              </li>
            </ul>

            {/* Third Column */}
            <div>
              <h2 className="mb-2 font-semibold text-gray-900 dark:text-white">Our Brands</h2>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                At Flowbite, we have a portfolio of brands that cater to a variety of preferences.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 dark:hover:text-blue-700"
              >
                Explore our brands
                <svg
                  className="w-3 h-3 ml-2 rtl:rotate-180"
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
              </a>
            </div>
          </div>
        </div>
      )}
    </li>
  );
};

export default ServicesDropdown;
