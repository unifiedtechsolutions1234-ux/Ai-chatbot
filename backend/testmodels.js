import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.GOOGLE_API_KEY;

async function listModels() {
  try {
    const res = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models?key=" + API_KEY
    );

    const data = await res.json();

    if (data.models) {
      console.log("✅ Available models:");
      data.models.forEach((model) => console.log("🧠", model.name));
    } else {
      console.error("❌ No models found:", data);
    }
  } catch (err) {
    console.error("Error listing models:", err);
  }
}

listModels();
