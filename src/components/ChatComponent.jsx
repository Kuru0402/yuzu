import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IoSend } from "react-icons/io5";
import TopBar from "./TopBar";

const ChatComponent = ({ setIsOpen }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hi! How can we help you?", sender: "bot" },
  ]);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const chatEndRef = useRef(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const chatRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    mobile:"",
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
        setMessages((prev) => [
          ...prev,
          { text: "Thank you! Your message has been sent. We'll be in touch soon. ✅", sender: "bot" },
        ]);
        setShowContactForm(false)
        
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError(true);
        setSuccess(false);
        setMessages((prev) => [
          ...prev,
          { text: "Failed to send your message. Please try again later. ❌", sender: "bot" },
        ]);
        setShowContactForm(true)
      }
    } catch (error) {
      setError(true);
      setSuccess(false);
      setMessages((prev) => [
        ...prev,
        { text: "An error occurred while sending your message. Please check your connection and try again. ❌", sender: "bot" },
      ]);
      setShowContactForm(true)
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setShowContactForm(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setShowContactForm]);

  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();
    const responses = [
      {
        keywords: ["hello", "hi", "hey"],
        reply: "Hello! How can I assist you today? 😊",
      },
      {
        keywords: ["help", "support", "issue"],
        reply: "Sure! What do you need help with?",
      },
      {
        keywords: ["price", "cost", "rate"],
        reply:
          "Our pricing varies based on your needs. Can you specify what you're looking for?",
      },
      {
        keywords: ["services", "what do you offer"],
        reply:
          "We offer Strategy & Business Growth, Design & Digital Presence, and Content & Brand Storytelling. Let me know how I can assist!",
      },
      { keywords: ["bye", "goodbye"], reply: "Goodbye! Have a great day. 👋" },
    ];
    for (const res of responses) {
      if (res.keywords.some((kw) => lowerMessage.includes(kw))) {
        return res.reply;
      }
    }
    return "No problem! Please provide your contact info, and we'll get back to you.";
  };

  useEffect(() => {
    const scrollToBottom = () => {
      if (chatEndRef.current) {
        chatEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    };
    setTimeout(scrollToBottom, 100);
  }, [messages]);

  const sendMessage = () => {
    if (!message.trim()) return;
    const newMessages = [...messages, { text: message, sender: "user" }];
    setMessages(newMessages);
    setMessage("");
    setIsBotTyping(true);
    setTimeout(() => {
      setIsBotTyping(false);
      setMessages((prev) => [
        ...prev,
        { text: getBotResponse(message), sender: "bot" },
      ]);
    }, 1200);
  };

  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        onClick={(e) => e.stopPropagation()}
      >
        <TopBar />
      </motion.div>
      <motion.div
        className="fixed bottom-5 right-5 w-80 md:w-96 bg-white/90 backdrop-blur-lg shadow-xl border border-gray-200 p-4 rounded-2xl overflow-hidden z-50"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center border-b pb-2 mb-2">
          <h2 className="text-xl font-semibold text-gray-900">Chat with Us</h2>
          <button
            className="text-blue-900 font-bold hover:text-red-600 text-2xl transition duration-200"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
        </div>
        <div className="mb-1 space-y-3 max-h-100 overflow-y-auto p-2 pb-0">
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              } items-center`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {msg.sender === "bot" && (
                <img
                  src="https://i.pravatar.cc/40?img=1"
                  alt="Bot"
                  className="w-8 h-8 rounded-full mr-2"
                />
              )}
              <div
                className={`p-2 rounded-xl max-w-[75%] ${
                  msg.sender === "user"
                    ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-md"
                    : "bg-gray-100 text-black shadow-md"
                }`}
              >
                {msg.text}
              </div>
              {msg.sender === "user" && (
                <img
                  src="https://i.pravatar.cc/40?img=2"
                  alt="User"
                  className="w-8 h-8 rounded-full ml-2"
                />
              )}
            </motion.div>
          ))}
          {isBotTyping && (
            <motion.div
              className="text-gray-400 italic flex justify-start items-center"
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            >
              Typing...
            </motion.div>
          )}
          {showContactForm && (
            <div className=" w-60 p-5 bg-gray-100  rounded-lg border-3 border-blue-500 mt-2 text-sm max-w-sm mx-auto shadow-md ">
              <input
                className="w-full h-8 px-3 border border-blue-800 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <input
                className="w-full h-8 px-3 mt-2 border border-blue-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                name="mobile"
                placeholder="Your Number"
                required
                value={formData.mobile}
                onChange={handleChange}
              />
              <input
                className="w-full h-8 px-3 mt-2 border border-blue-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                className="w-full h-12 p-2 mt-3 border border-blue-800 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="message"
                placeholder="Your Message."
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {/* Submission Messages */}
            

              <button
                className="w-full h-8 mt-2 bg-yellow-600 text-black font-medium rounded-lg hover:bg-blue-700 transition-all"
                onClick={sendEmail}
              >
                {loading ? "Sending Message..." : "Send Message"}
              </button>
            </div>
          )}
          <div className="relative flex justify-center mb-0 pt-1">
            <div className="relative flex justify-center mb-0 pt-1">
              <button
                className="bg-blue-500 text-white px-4 py-1 h-8 rounded-lg hover:bg-blue-600 transition duration-300 text-sm font-semibold flex items-center"
                onClick={() => setShowContactForm(!showContactForm)}
              >
                Quick Response
                <svg
                  className={`w-2.5 h-2.5 ml-2 transition-transform duration-300 ${
                    showContactForm ? "rotate-0" : "rotate-180"
                  }`}
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
            </div>
          </div>
          <div ref={chatEndRef} />
        </div>
        <div className="flex items-center border-t pt-2">
          <input
            type="text"
            className="flex-1 px-4 py-2 border border-gray-300 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            className={`ml-2 p-2 rounded-full bg-blue-600 text-white shadow-lg ${
              message.trim()
                ? "hover:bg-blue-700"
                : "opacity-50 cursor-not-allowed"
            } transition duration-200`}
            disabled={!message.trim()}
            onClick={sendMessage}
          >
            <IoSend className="text-2xl" />
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default ChatComponent;
