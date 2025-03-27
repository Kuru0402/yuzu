import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About"; // Import the About component
import Contact from "./components/Contact";
import Service1 from "./components/Service1";
import Service2 from "./components/Service2";
import Service3 from "./components/Service3";
import ContactPopup from "./components/ContactPopup";

function App() {
  return (
    <Router>
      <TitleUpdater />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Service1" element={<Service1 />} />
        <Route path="/Service2" element={<Service2 />} />
        <Route path="/Service3" element={<Service3 />} />
        <Route path="/ContactPopup" element={<ContactPopup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

function TitleUpdater() {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/": "Home -Yuzu Wel Comes You",
      "/Home": "Home - Yuzu Wel Comes You",
      "/About": "About Us - Yuzu",
      "/Contact": "Contact Us - Yuzu",
      "/Service1": " Strategy & Business Growth - Yuzu",
      "/Service2": "Design & DigitalPresence - Yuzu",
      "/Service3": "Content & Brand Storytelling - Yuzu",
    };

    document.title = titles[location.pathname] || "Yuzu";
  }, [location]);

  return null;
}

export default App;
