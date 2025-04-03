import React from "react";
import WardrobeOrganizer from "./components/WardrobeOrganizer"; // ✅ Ensure this path is correct
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header>AI Outfit Assistant</header>
      <main>
      <h2>Welcome to Your AI Wardrobe Organizer!</h2>
      <p>Your personal AI stylist helping you plan outfits effortlessly. Get outfit suggestions and manage your wardrobe with AI.</p>
      </main>
      <WardrobeOrganizer /> {/* ✅ This should be visible */}
      <Footer />
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} AI Wardrobe Organizer. All rights reserved.</p>
    </footer>
  );
};


export default App;
