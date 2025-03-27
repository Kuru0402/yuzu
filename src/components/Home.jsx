
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import {
  Lightbulb,
  Target,
  TrendingUp,
  Handshake,
  RefreshCw,
} from "lucide-react";
import { FaChartLine, FaPaintBrush, FaPenNib } from "react-icons/fa";
import { Link } from "react-router-dom";


const Home = () => {
  const text = " Strategy • Design • Growth";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const strategyRef = useRef(null);
  const storyRef = useRef(null);

  const scrollToStrategy = () => {
    strategyRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToStory = () => {
    storyRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  

  
  const values = [
    {
      icon: <Lightbulb size={40} />,
      title: "Innovation",
      description: "Fresh ideas & forward-thinking strategies.",
    },
    {
      icon: <Target size={40} />,
      title: "Simplicity",
      description: "Clear, efficient, and impactful solutions.",
    },
    {
      icon: <TrendingUp size={40} />,
      title: "Growth",
      description: "Helping businesses scale and thrive.",
    },
    {
      icon: <Handshake size={40} />,
      title: "Authenticity",
      description: "Genuine, client-focused partnerships.",
    },
    {
      icon: <RefreshCw size={40} />,
      title: "Adaptability",
      description: "Custom solutions for evolving needs.",
    },
  ];

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
      ctalink: "/Service1",
    },
    {
      id: 2,
      title: "Design & Digital Presence",
      icon: <FaPaintBrush className="text-green-500 text-4xl" />,
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
      ctalink: "/Service2",
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
      ctalink: "/Service3",
    },
  ];

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, index + 1));
        setIndex(index + 1);
      }, 50); // Typing speed (50ms per letter)
      return () => clearTimeout(timeout);
    }
  }, [index]);
  return (
    <>
      <header>
        <div className="relative min-h-screen w-full bg-yuzu bg-fixed bg-cover bg-center flex items-center px-0">
          {/* Gradient Overlay for Better Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-transparent"></div>
          {/* Text Content (Left-Aligned) */}(
          <div className="relative z-10 max-w-3xl text-left pl-16">
            {/* Animated Title */}
            <motion.h1
              className="text-white text-8xl font-extrabold italic drop-shadow-4xl tracking-wide flex flex-col items-start leading-tight"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              YUZU{" "}
            </motion.h1>
            <motion.span
              className="text-2xl font-light tracking-widest uppercase text-yellow-400 mt-2 block"
              initial={{ opacity: 0, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {displayedText} {/* Typing Effect */}
              <span className="animate-blink"></span> {/* Blinking cursor */}
            </motion.span>

            {/* Animated Subtitle */}
            <motion.h4
              className="text-yellow-300 text-xl mt-4 drop-shadow-md"
              initial={{ opacity: 0, scale: 0.8 }} // Starts slightly zoomed out
              whileInView={{ opacity: 1, scale: 1 }} // Zooms in to normal size
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Inspired by Yuzu and Uzu, we drive transformation for startups and
              MSMEs with dynamic solutions.
            </motion.h4>

            {/* Animated Buttons */}
            <motion.div
              className="mt-6 space-x-4 flex"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.button
                className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-500 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToStory}
              >
                Our Story
              </motion.button>

              <motion.button
                className="border border-yellow-400 text-yellow-300 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToStrategy}
              >
                Explore Our Services
              </motion.button>
            </motion.div>
          </div>
        </div>
        <section
          ref={storyRef}
          className="relative flex flex-col lg:flex-row items-center justify-start py-16 px-8 text-white min-h-screen border-t-gray-950  "
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-green-800 to-blue-800 backdrop-blur-lg"></div>

          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat  opacity-25"
            style={{ backgroundImage: "url('/images/yuzustory.webp')" }}
          ></div>

          {/* left Side: Brand Story */}
          <motion.div
            className="relative lg:w-1/2 w-full text-left  lg:pl-12 mt-1 lg:mt-0 z-40"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-10 text-yellow-500 ">
              The Story Behind <span className="font-extrabold">YUZU</span>
            </h2>
            <p className="text-lg text-white mb-2 italic">
              Uzu is inspired by Yuzu, the rare and vibrant{" "}
              <span className="font-bold"> Japanese</span> citrus fruit, and Uzu
              (渦), meaning whirlpool – a symbol of transformation, momentum,
              and energy.
            </p>
            <p className="text-lg text-white mb-6 italic">
              Just like a vortex gathers momentum, Uzu fuels Strategy, Design,
              and Growth for startups and MSMEs worldwide.
            </p>

            <ul className="text-yellow-500 space-y-2 text-2xl font-semibold">
              <li className="flex items-center gap-2">
                ✅ <span>Fresh & innovative ideas</span>
              </li>
              <li className="flex items-center gap-2">
                ✅ <span>Simple, clear, and effective solutions</span>
              </li>
              <li className="flex items-center gap-2">
                ✅ <span>Helping businesses scale and thrive</span>
              </li>
              <li className="flex items-center gap-2">
                ✅ <span>Authentic client partnerships</span>
              </li>
              <li className="flex items-center gap-2">
                ✅ <span>Adaptable strategies for changing needs</span>
              </li>
            </ul>

            <motion.button
              className="mt-15 bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-500 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
      {/* right side brand story */}
      <motion.div
  className="relative lg:w-1/2 w-full flex flex-col items-center text-center z-40"
  initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1, delay: 0.3 }}
  viewport={{ once: true }}
>
  {/* Testimonials Section */}
  <h3 className="text-4xl font-bold mb-6 text-yellow-500">What Our Clients Say</h3>
  
  <motion.div
    className="bg-white text-black p-6 rounded-lg shadow-lg max-w-md mb-8"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
  >
    <p className="text-lg italic">
      "Yuzu transformed our business with its strategic approach and innovative solutions!"
    </p>
    <span className="block mt-4 font-semibold text-yellow-600">— Alex Carter, CEO</span>
  </motion.div>

  {/* Key Statistics Section */}
  <div className="grid grid-cols-2 gap-6 text-yellow-500 text-2xl font-bold">
    <div className="flex flex-col items-center">
      <span>🚀</span>
      <span>150+</span>
      <p className="text-lg text-white">Projects Completed</p>
    </div>
    <div className="flex flex-col items-center">
      <span>🌍</span>
      <span>20+</span>
      <p className="text-lg text-white">Countries Reached</p>
    </div>
    <div className="flex flex-col items-center">
      <span>🔥</span>
      <span>98%</span>
      <p className="text-lg text-white">Client Satisfaction</p>
    </div>
    <div className="flex flex-col items-center">
      <span>💡</span>
      <span>5+</span>
      <p className="text-lg text-white">Years of Innovation</p>
    </div>
  </div>

  {/* Call to Action */}
  <motion.button
    className="mt-8 bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-500 transition"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Get Started
  </motion.button>
</motion.div>



        </section>
        <div className="relative min-h-[70vh] w-full py-16 px-8 text-white text-center  overflow-hidden">
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-yellow-900 to-gray-900"></div>
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20 z-10 bg-fixed"
            style={{ backgroundImage: "url('/images/yuzuimage.png')" }}
          ></div>

          {/* Section Title */}
          <h2 className="relative text-5xl font-bold mb-20 z-10">
            Our Core Values (Why Yuzu..?)
          </h2>

          {/* Grid Layout */}
          <div className="relative  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 z-10">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-blue-900 bg-opacity-80 backdrop-blur-md rounded-2xl p-6 shadow-lg flex flex-col  items-center text-center transition transform hover:scale-105 hover:text-white"
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
                <p className=" mt-2">{value.description}</p>
              </motion.div>
            ))}
          </div>
          <section
            ref={strategyRef}
            className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white py-16 px-6"
          >
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="relative text-5xl font-bold mb-5 mt-15 z-10">
                Our Services
              </h2>
              <p className="relative text-lg text-white">
                Solutions tailored to elevate your business.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  className="bg-white dark:bg-blue-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition duration-100 z-30 
                 h-full flex flex-col"
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

                  {/* Description & Subservices - Flex Grow Ensures Equal Height */}
                  <div className="flex-grow">
                    <p className="text-gray-600 text-sm dark:text-gray-300 mt-2 h-20">
                      {service.description}
                    </p>

                    <ul className="mt-4 space-y-2 text-lg text-gray-700 dark:text-gray-400 mb-4">
                      {service.subservices.map((sub, index) => (
                        <li key={index} className="flex items-center gap-2">
                          ✅ {sub}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button - mt-auto Keeps It at the Bottom */}
                  <Link
                    to={service.ctalink}
                    className="block bg-yellow-500 text-gray-900 py-2 px-4  rounded-lg font-semibold mt-auto text-center 
                   hover:bg-yellow-600 transition"
                  >
                    {service.cta}
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </header>
    </>
  );
};

export default Home;
