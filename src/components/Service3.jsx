import { motion } from "framer-motion";
import { FaPenNib, FaBookOpen, FaBullhorn, FaAlignLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ContentBrandStorytelling() {
  return (
    <section className="  dark:text-white min-h-screen p-10 relative">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-yellow-900 to-gray-900 "></div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 z-0 bg-fixed"
        style={{ backgroundImage: "url('/images/content.webp')" }}
      ></div>

      <motion.div
        className="max-w-6xl mx-auto text-center py-16 relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl font-bold ">
          Content & Brand Storytelling
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          We help brands craft compelling narratives that connect with their audience.
        </p>
      </motion.div>

      {/* Why Choose Us */}
      <motion.div
        className="bg-white dark:bg-blue-800 rounded-lg shadow-lg p-6 text-center max-w-4xl mx-auto relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold">Why Brand Storytelling Matters?</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          A compelling story builds trust, engagement, and brand recognition.
        </p>
      </motion.div>

      {/* Subservices Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto relative z-10">
        {subservices.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-blue-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-100"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4">
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {service.title}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        className="mt-16 text-center relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          to="/Contact"
          className="bg-yellow-500 text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-yellow-600 transition"
        >
          Tell Your Brand’s Story
        </Link>
      </motion.div>
    </section>
  );
}

const subservices = [
  {
    title: "Content Strategy & Writing",
    description: "Create compelling content that aligns with your brand’s vision.",
    icon: <FaPenNib className="text-yellow-500 text-3xl" />,
  },
  {
    title: "Business Storytelling",
    description: "Craft narratives that resonate with your audience and stakeholders.",
    icon: <FaBookOpen className="text-blue-500 text-3xl" />,
  },
  {
    title: "Digital Brand Positioning",
    description: "Establish a strong brand presence across digital platforms.",
    icon: <FaBullhorn className="text-green-500 text-3xl" />,
  },
  {
    title: "Marketing Copywriting",
    description: "Write persuasive and conversion-driven marketing content.",
    icon: <FaAlignLeft className="text-purple-500 text-3xl" />,
  },
];
