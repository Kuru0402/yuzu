import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Target, TrendingUp, Handshake, RefreshCw } from "lucide-react";

const values = [
  { icon: <Lightbulb size={40} />, title: "Innovation", description: "Fresh ideas & forward-thinking strategies." },
  { icon: <Target size={40} />, title: "Simplicity", description: "Clear, efficient, and impactful solutions." },
  { icon: <TrendingUp size={40} />, title: "Growth", description: "Helping businesses scale and thrive." },
  { icon: <Handshake size={40} />, title: "Authenticity", description: "Genuine, client-focused partnerships." },
  { icon: <RefreshCw size={40} />, title: "Adaptability", description: "Custom solutions for evolving needs." }
];

const CoreValues = () => {
  return (
    <section className="w-full py-16 px-8 bg-gray-900 text-white text-center">
      {/* Section Title */}
      <h2 className="text-4xl font-bold mb-8">🚀 Our Core Values (Why Uzu?)</h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {values.map((value, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center transition transform hover:scale-105 hover:bg-yellow-400 hover:text-black"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Icon */}
            <div className="mb-4">{value.icon}</div>
            {/* Title */}
            <h3 className="text-2xl font-semibold">{value.title}</h3>
            {/* Description */}
            <p className="text-gray-300 mt-2">{value.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
