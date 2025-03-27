"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

export default function Contact() {
  // State Management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Send Email Request to Node.js Server
  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setSuccess(true);
        setError(false);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError(true);
        setSuccess(false);
      }
    } catch (error) {
      setError(true);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-100 dark:bg-blue-900 text-gray-800 dark:text-white min-h-screen flex items-center justify-center p-2 pt-20">
      <motion.div
        className="max-w-6xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 border border-yellow-900"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Title */}
        <h1 className="text-2xl text-center md:text-5xl font-bold ">
          Contact us
        </h1>
        <p className="text-center text-lg text-gray-600 dark:text-gray-300 mt-4">
          Have a question? Let's talk!
        </p>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Contact Form */}
          <form onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white border-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white border-none focus:ring-2 focus:ring-yellow-500"
            />
            <textarea
              name="message"
              placeholder="Tell us about your business needs..."
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white border-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>

            <div className="flex flex-col justify-center items-center space-y-4">
              {/* Submission Messages */}
              {success && (
                <p className="text-green-500 text-lg text-center">
                  Thank you! Your message is sent. We'll be in touch soon.
                </p>
              )}
              {error && (
                <p className="text-red-500 text-lg text-center">
                  Failed to send message.
                </p>
              )}

              {/* Loading Spinner */}
              {loading && (
                <div className="flex justify-center items-center h-16">
                  <div className="w-10 h-10 border-5 border-blue-600 border-solid border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-yellow-500 text-gray-900 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition disabled:opacity-50"
                disabled={loading}
              >
                {loading ? "Sending Message..." : "Send Message"}
              </button>
            </div>
            {/* Social Media Links */}
            <div className="mt-6 flex space-x-6 justify-center">
              <a
                href="https://wa.me/YOUR_WHATSAPP_NUMBER"
                className="text-green-500 hover:text-green-600 text-2xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://linkedin.com/in/YOUR_LINKEDIN"
                className="text-blue-500 hover:text-blue-600 text-2xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:your-email@example.com"
                className="text-red-500 hover:text-red-600 text-2xl"
              >
                <FaEnvelope />
              </a>
            </div>
          </form>

          {/* Office Address & Social Links */}
          <div className="bg-gray-200 dark:bg-gray-700 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <FaMapMarkerAlt className="text-yellow-500" /> Our Office
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Level 5, Survey of India Colony, Chanda Naik Nagar, Madhapur,
              Hyderabad, Telangana 500081
            </p>

            {/* Social Media Links */}
            <div className="bg-gray-200 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              {/* Contact Information */}
              <div className="mt-1">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Contact Us
                </h4>

                <div className="mt-2 space-y-3">
                  <div className="flex items-center gap-3">
                    <FaPhone className="text-blue-500 text-xl" />
                    <a
                      href="tel:+919121072818"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition"
                    >
                      +91 91 2107 281 8
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaWhatsapp className="text-green-500 text-xl" />
                    <a
                      href="https://wa.me/9121072818"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-green-500 transition"
                    >
                      +91 91 2107 281 8
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-red-500 text-xl" />
                    <a
                      href="mailto:yuzuservices@gmail.com"
                      className="text-gray-700 dark:text-gray-300 hover:text-red-500 transition"
                    >
                      yuzuservices@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="w-full max-w-3xl mx-auto p-4">
              <h2 className="text-2xl font-bold text-center mb-4">
                Our Location
              </h2>
              <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg shadow-lg">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.103680262809!2d78.3920699252221!3d17.454751000860888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f100.1!3m3!1m2!1s0x3bcb9165798ffef1%3A0x88f0cb0efed01496!2sSurvey%20of%20India%40Colony%4C%40Chanda%20Naik%20Nagar%2C%20Madhapur%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1742396750508!5m2!1sen!2sin"
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
