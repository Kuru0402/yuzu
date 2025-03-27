import { motion } from "framer-motion";
import { FaPalette, FaGlobe, FaShareAlt, FaEnvelope, FaAndroid } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function DigitalPresence() {
  return (
    <section className="relative  text-gray-800 dark:text-white min-h-screen p-10">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-yellow-900 to-gray-900 "></div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 bg-fixed"
        style={{ backgroundImage: "url('/images/digital.webp')" }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto text-center py-16">
        <motion.h1
          className="text-5xl font-bold "
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Design & Digital Presence
        </motion.h1>
        <p className="mt-2 text-gray-100 max-w-3xl mx-auto text-lg">
          We create impactful digital identities and experiences with strategic design and web solutions.
        </p>
      </div>

      {/* Why Choose Us */}
      <motion.div
        className="relative z-10 bg-white dark:bg-blue-800 rounded-lg shadow-lg p-6 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Why Choose Our Digital Services?</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          We blend creativity with strategy to help brands stand out in the digital world.
        </p>
      </motion.div>

      {/* Subservices Section */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
        {subservices.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-blue-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-100 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-4xl mb-3">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        className="relative z-10 mt-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          to="/Contact"
          className="bg-yellow-500 text-black py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition"
        >
          Elevate Your Digital Presence
        </Link>
      </motion.div>
    </section>
  );
}

const subservices = [
  {
    title: "Logo Design",
    description: "Craft a unique and memorable brand identity with professional logos.",
    icon: <FaPalette className="text-yellow-500" />,
  },
  {
    title: "Website Development & Content",
    description: "Get a fully optimized and visually stunning website for your business.",
    icon: <FaGlobe className="text-blue-500" />,
  },
  {
    title: "Social Media Management",
    description: "Boost your online presence with strategic social media marketing.",
    icon: <FaShareAlt className="text-green-500" />,
  },
  {
    title: "Email Marketing",
    description: "Engage customers with powerful and personalized email campaigns.",
    icon: <FaEnvelope className="text-purple-500" />,
  },
  {
    title: "Android App Development",
    description: "Transform your ideas into functional and user-friendly mobile apps.",
    icon: <FaAndroid className="text-red-500" />,
  },
];
