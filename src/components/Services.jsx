"use client";
import { motion } from "framer-motion";
import { FaChartLine, FaPaintBrush, FaPenNib } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Strategy & Business Growth",
    icon: <FaChartLine className="text-yellow-500 text-4xl" />,
    description:
      "From market research to CRM tools, we craft tailored growth strategies for startups and MSMEs.",
    subservices: [
      "Business strategy from scratch",
      "Market research",
      "Sales & pitch decks",
      "CRM & HR tool setup",
      "Data analytics",
    ],
    cta: "Let’s Build Your Growth Plan",
  },
  {
    id: 2,
    title: "Design & Digital Presence",
    icon: <FaPaintBrush className="text-blue-500 text-4xl" />,
    description:
      "We create impactful digital identities and experiences with strategic design and web solutions.",
    subservices: [
      "Logo design",
      "Website development & content",
      "Social media management",
      "Email marketing",
      "Android app development",
    ],
    cta: "Elevate Your Digital Presence",
  },
  {
    id: 3,
    title: "Content & Brand Storytelling",
    icon: <FaPenNib className="text-red-500 text-4xl" />,
    description:
      "We help brands craft compelling narratives that connect with their audience.",
    subservices: [
      "Content strategy & writing",
      "Business storytelling",
      "Digital brand positioning",
      "Marketing copywriting",
    ],
    cta: "Tell Your Brand’s Story",
  },
];

export default function Services() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-500 to-blue-500 bg-clip-text text-transparent">
          Our Services
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Solutions tailored to elevate your business.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Service Icon & Title */}
            <div className="flex items-center gap-4">
              {service.icon}
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {service.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 mt-2">{service.description}</p>

            {/* Subservices */}
            <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-400">
              {service.subservices.map((sub, index) => (
                <li key={index} className="flex items-center gap-2">
                  ✅ {sub}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a
              href="#contact"
              className="block bg-yellow-500 text-gray-900 py-2 px-4 rounded-lg font-semibold mt-4 text-center hover:bg-yellow-600 transition"
            >
              {service.cta}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
