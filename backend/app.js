
// backend/app.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatBotRouter from "./routes/chatbot.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/chatbot", chatBotRouter);

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    console.error("❌ Bad JSON:", err.message);
    return res.status(400).json({ success: false, message: "Invalid JSON payload" });
  }
  next();
});

app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
