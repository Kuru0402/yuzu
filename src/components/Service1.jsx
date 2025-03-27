import { motion } from "framer-motion";
import { FaChartLine, FaSearch, FaFileAlt, FaUsersCog, FaDatabase } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function StrategyGrowth() {
  return (
    <section className="relative  text-gray-800 dark:text-white min-h-screen p-10">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-yellow-900 to-gray-900 "></div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 bg-fixed"
        style={{ backgroundImage: "url('/images/Strength.webp')" }}
      ></div>

      {/* Content Wrapper */}
      <div className="relative z-20 max-w-6xl mx-auto text-center py-16">
        <motion.h1
          className="text-5xl font-bold "
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 1 }}
          transition={{ duration: 0.3 }}
        >
          Strategy & Business Growth
        </motion.h1>
        <p className="mt-4 text-gray-100 max-w-3xl mx-auto text-lg">
          From market research to CRM tools, we craft tailored growth strategies for startups and MSMEs.
        </p>
      </div>

      {/* Why Choose Us */}
      <motion.div
        className="relative z-10 bg-white dark:bg-blue-800 rounded-lg shadow-lg p-6 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Why Choose Our Strategy Services?</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          We leverage data-driven insights and expert guidance to create powerful growth roadmaps.
        </p>
      </motion.div>

      {/* Subservices Section */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
        {subservices.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-blue-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
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
          className="bg-yellow-400 text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-yellow-600 transition"
        >
          Let’s Build Your Growth Plan
        </Link>
      </motion.div>
    </section>
  );
}

const subservices = [
  {
    title: "Business Strategy from Scratch",
    description: "We help startups define clear business roadmaps and execution plans.",
    icon: <FaChartLine className="text-yellow-500" />,
  },
  {
    title: "Market Research",
    description: "Get in-depth industry insights and competitive analysis for growth.",
    icon: <FaSearch className="text-blue-500" />,
  },
  {
    title: "Sales & Pitch Decks",
    description: "We create high-impact pitch decks to attract investors and clients.",
    icon: <FaFileAlt className="text-green-500" />,
  },
  {
    title: "CRM & HR Tool Setup",
    description: "Streamline your business with CRM and HR automation tools.",
    icon: <FaUsersCog className="text-purple-500" />,
  },
  {
    title: "Data Analytics",
    description: "Make informed decisions with advanced data analysis and visualization.",
    icon: <FaDatabase className="text-red-500" />,
  },
];
