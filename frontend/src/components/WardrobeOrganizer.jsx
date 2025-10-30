import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WardrobeOrganizer.css";

const WardrobeOrganizer = () => {
  const [userInput, setUserInput] = useState("");
  const [responseText, setResponseText] = useState("");
  const [outfits, setOutfits] = useState([]); 
  const [newOutfit, setNewOutfit] = useState(""); 

  // Load saved outfits on startup
  useEffect(() => {
    const savedOutfits = JSON.parse(localStorage.getItem("outfits")) || [];
    setOutfits(savedOutfits);
  }, []);

  // Save outfits whenever they change
  useEffect(() => {
    localStorage.setItem("outfits", JSON.stringify(outfits));
  }, [outfits]);

  // Handle AI Chat
  const handleChat = async () => {
    if (!userInput) return; // ✅ Fix: Use correct state variable
  
    try {
      const res = await axios.post("https://ai-chatbot-backend-kohl.vercel.app/api/chatbot", { text: userInput });
      
      console.log("🟢 Response from backend:", res.data);
      console.log("🔵 Extracted AI Response:", res.data.response);
  
      setResponseText(res.data.response); // ✅ Fix: Correct state update
    } catch (error) {
      console.error("🔴 Error fetching response:", error);
      setResponseText("Failed to fetch AI response.");
    }
  };

  // Handle Adding Outfit
  const handleAddOutfit = () => {
    if (newOutfit.trim() !== "") {
      setOutfits([...outfits, newOutfit]); 
      setNewOutfit(""); 
    }
  };

  // ✅ Handle Deleting Outfit
  const handleDeleteOutfit = (index) => {
    setOutfits(outfits.filter((_, i) => i !== index));
  };

  return (
    <div className="wardrobe-container">
      <h2>Your Digital Wardrobe</h2>

      {/* Outfit Input */}
      <input
        type="text"
        value={newOutfit}
        onChange={(e) => setNewOutfit(e.target.value)}
        placeholder="Enter outfit details..."
      />
      <button onClick={handleAddOutfit} className="add-outfit-btn">
        Add Outfit
      </button>

      {/* Display Added Outfits */}
      <div className="outfit-list">
        {outfits.length > 0 ? (
          outfits.map((outfit, index) => (
            <div key={index} className="outfit-item">
              👕 {outfit}
              <button className="delete-btn" onClick={() => handleDeleteOutfit(index)}>❌</button>
            </div>
          ))
        ) : (
          <p>No outfits added yet.</p>
        )}
      </div>

      {/* AI Chat Section */}
      <textarea
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Ask AI what to wear..."
      />
      <button className="ask-ai-btn" onClick={handleChat}>Ask AI</button>

      {/* Display AI Response */}
      {responseText && (
        <div className="response-box">
          <h3>AI Suggestion:</h3>
          <p>{responseText}</p>
        </div>
      )}
    </div>
    
  );
};

export default WardrobeOrganizer;
