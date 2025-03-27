import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex space-x-4">
      {/* Call to Action Button */}
      <motion.button
        type="button"
        className="text-black font-bold bg-yellow-500 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-small rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-yellow-600 dark:hover:bg-yellow-800 dark:focus:ring-blue-600"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
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

      {/* Modal Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg w-96"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-lg font-bold mb-4">Contact Us</h2>
              <form>
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input type="text" className="w-full px-3 py-2 border rounded-lg" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" className="w-full px-3 py-2 border rounded-lg" placeholder="Your Email" />
                </div>
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea className="w-full px-3 py-2 border rounded-lg" rows="3" placeholder="Your Message"></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 rounded-lg"
                >
                  Submit
                </button>
              </form>
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
