// backend/routes/chatbot.js
import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const router = express.Router();
const API_KEY = process.env.GOOGLE_API_KEY; // Replace with your actual API key;

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
   const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
   const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text }] }],
    });

    const response = result.response.text();
    console.log("AI Response:", response);

    res.json({ success: true, response });
  } catch (error) {
    console.error("🔥 Error in /api/chatbot route:", error);
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
