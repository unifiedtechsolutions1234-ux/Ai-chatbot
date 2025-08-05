// backend/routes/chatbot.js
import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const router = express.Router();
const API_KEY = "Enter your Google API key here"; // Replace with your actual API key;

if (!API_KEY) {
  console.error("❌ ERROR: Google API key is missing.");
  throw new Error("Google API key is missing.");
}

const genAI = new GoogleGenerativeAI(API_KEY);

router.post("/", async (req, res) => {
  const { text } = req.body;

  console.log("Received request body:", req.body);

  if (!text) {
    return res.status(400).json({ success: false, message: "Text is required." });
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent([{ text }]);
    const response = result.response.text();
    console.log(response);
    res.json({ success: true, response });
  } catch (error) {
    console.error("🔥 Error in /api/chatbot route:", error.stack);
    res.status(500).json({ success: false, message: "Failed to generate content." });
  }
});

export default router;
