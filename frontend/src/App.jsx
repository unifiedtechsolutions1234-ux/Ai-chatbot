// import React from "react";
// import WardrobeOrganizer from "./components/WardrobeOrganizer"; // ✅ Ensure this path is correct
// import "./App.css";

// const App = () => {
//   return (
//     <div className="App">
//       <header>AI Outfit Assistant</header>
//       <main>
//       <h2>Welcome to Your AI Wardrobe Organizer!</h2>
//       <p>Your personal AI stylist helping you plan outfits effortlessly. Get outfit suggestions and manage your wardrobe with AI.</p>
//       <WardrobeOrganizer /> {/* ✅ This should be visible */}
//       </main>
//       <Footer />
//     </div>
//   );
// };

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <p>© {new Date().getFullYear()} AI Wardrobe Organizer. All rights reserved.</p>
//     </footer>
//   );
// };


// export default App;
import React from "react";
import WardrobeOrganizer from "./components/WardrobeOrganizer"; // ✅ Ensure this path is correct
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="page-container">
        <header className="header">AI Outfit Assistant</header>
        <main className="main-content">
          <h2>Welcome to Your AI Wardrobe Organizer!</h2>
          <p>
            Your personal AI stylist helping you plan outfits effortlessly. Get outfit suggestions and manage your wardrobe with AI.
          </p>
          <WardrobeOrganizer />
        </main>
      </div>
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
