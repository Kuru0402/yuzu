require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");

console.log(process.env.PORT);

const app = express();
app.use(cors());
app.use(bodyParser.json());

//connect to local mongodb
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

// Define Schema & Model
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  mobile: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema);

// Email Configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Handle Contact Form Submission
app.post("/contact", async (req, res) => {
  try {
    const { name,mobile, email, message } = req.body;

    // Save to MongoDB
    const newContact = new Contact({ name,mobile, email, message });
    await newContact.save();

    // Send Email Notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: "New Message from Yuzu",
      text: `Name: ${name}\nEmail: ${email}\nContact Number: ${mobile}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    res.json({ success: false });
  }
});

// Chat Schema & Model
const chatSchema = new mongoose.Schema({
  user: String, // Username or ID
  message: String, // User Message
  sender: String, // "user" or "bot"
  timestamp: { type: Date, default: Date.now },
});

const Chat = mongoose.model("Chat", chatSchema);

// Save Message API
app.post("/api/chat", async (req, res) => {
  try {
    const newMessage = new Chat(req.body);
    await newMessage.save();
    res.status(201).json({ success: true, message: "Message saved" });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get Chat History
app.get("/api/chat", async (req, res) => {
  try {
    const messages = await Chat.find().sort({ timestamp: 1 });
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
