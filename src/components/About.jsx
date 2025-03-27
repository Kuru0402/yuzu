import { motion } from "framer-motion";
import NeeharikaSVG from "../assets/Images/undraw_got-an-idea_1z3i.svg";
import JaganSVG from "../assets/Images/undraw_in-the-office_e7pg.svg";
import PoornimaSVG from "../assets/Images/undraw_workspace_s6wf.svg";

const teamData = [
  {
    name: "Neeharika",
    role: "Growth & Sales Strategist",
    image: NeeharikaSVG, 
    bio: "Expert in business scaling, sales optimization, and revenue growth strategies.",
  },
  {
    name: "Jagan",
    role: "Startup & AI Expert",
    image: JaganSVG, 
    bio: "Specialist in AI-driven business solutions and startup acceleration.",
  },
  {
    name: "Poornima",
    role: "Business Strategy & Holistic Growth",
    image: PoornimaSVG, 
    bio: "Focused on long-term strategic growth and holistic business development.",
  },
];

export default function AboutUs() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white pt-20">
      {/* Hero Section */}
      <div className="text-center py-16 px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 to-blue-500 bg-clip-text text-transparent">
          Meet the YUZU Team
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Driving innovation, growth, and AI-powered strategies for your business success.
        </p>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-16">
        {teamData.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden text-center 
                       transition transform hover:scale-105 hover:shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* SVG Image */}
            <div className="flex justify-center p-6">
              <img src={member.image} alt={member.name} className="w-48 h-48" />
            </div>

            {/* Member Details */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {member.name}
              </h3>
              <p className="text-sm text-yellow-500 font-semibold">
                {member.role}
              </p>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                {member.bio}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center pb-16">
        <a
          href="/contact"
          className="bg-yellow-500 text-gray-900 px-6 py-3 text-lg font-semibold rounded-lg 
                                     hover:bg-yellow-600 transition"
        >
          Meet Our Experts
        </a>
      </div>
    </section>
  );
}
