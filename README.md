# 🧠 AI Wardrobe Organizer

An intelligent and interactive web application that helps you plan, manage, and organize your outfits using AI. Built with React and OpenAI API, this tool gives you personalized fashion suggestions, lets you add outfit ideas, and even delete them when no longer needed.

---

## ✨ Features

- 👗 **Add Outfit Items**: Enter custom outfit pieces to build your wardrobe list.
- 🧠 **Ask AI for Outfit Suggestions**: Get real-time fashion advice using OpenAI's GPT model.
- 🗑️ **Delete Outfit Items**: Remove items you no longer need from the wardrobe.
- 🪄 **Detailed AI Suggestions**: Suggestions include outfit combinations, styling tips, and accessory ideas.
- 📱 **Responsive Design**: Works beautifully on desktop and mobile.

---

## 🖼️ UI Preview

* Add outfit items manually
* Ask AI for suggestions
* Delete individual outfits from the list
><img width="1432" height="890" alt="image" src="https://github.com/user-attachments/assets/88767bc3-4e29-4046-ad73-4eb073ba017a" />

><img width="1496" height="893" alt="image" src="https://github.com/user-attachments/assets/d96b8b60-e65b-4019-878a-14868808fa10" />

---

## 💻 Technologies Used

| Tech        | Usage                  |
|-------------|------------------------|
| React       | Frontend UI            |
| CSS         | Styling                |
| OpenAI API  | AI-powered suggestions |
| JavaScript  | Core logic             |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ai-wardrobe-organizer.git
cd ai-wardrobe-organizer
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory:

```
VITE_OPENAI_API_KEY=your_openai_api_key_here
```

> 🛡️ Keep your API key safe. Don’t expose it publicly.

### 4. Run the App

```bash
npm run dev
```

Visit: `http://localhost:5173`

---


## 🧪 Example Prompts for AI

```txt
- Suggest an outfit for a rainy day in Mumbai.
- What can I wear with a black leather jacket and sneakers?
- Best formal outfit ideas for men with chinos.
- Outfit tips for a summer wedding guest.
```

## ✏️ How to Add Clothes (with Prompt)
To add a clothing item, enter its description in the text box. You can be as descriptive or minimal as you'd like.

```csharp

Red cotton t-shirt
Denim jeans with ripped knees
Formal black blazer for office wear
White sneakers with red accents
```
This helps AI give more context-aware suggestions. More detailed prompts = smarter outfit ideas!

## 🆕 Delete Outfit Feature

You can now click the ❌ icon next to each outfit item in the list to delete it.

```jsx
<li key={index}>
  {outfit}
  <button onClick={() => handleDelete(index)}>❌</button>
</li>
```

This updates your state and removes the selected outfit from the list instantly.

---


## 📂 Folder Structure

```
AI-Wardrobe/
├── public/                       # Public assets
│   └── index.html                # HTML template
├── src/                          # Source files
│   ├── components/               # React components
│   │   ├── WardrobeOrganizer.jsx # Main outfit organizer UI
│   │   └── WardrobeOrganizer.css # Styling for outfit items
│   ├── App.jsx                   # Main application file
│   ├── App.css                   # Styling for the app
|   ├── index.css                 # Styling 
│   └── main.jsx                  # React entry point
├── .gitignore                    # Files to ignore by git
├── package.json                  # Project metadata and dependencies
├── README.md                     # Project documentation
└── package-lock.json # Dependency lock file

```

---

## 🧠 Future Enhancements

* 🔎 Outfit search
* ☁️ Cloud wardrobe sync
* 👕 Image-based clothing input
* 📆 Outfit calendar planner

---

## 📜 License

This project is licensed under the MIT License.

---

## 🧑‍💻 Author

Made with ❤️ by Sameer Senapati
[GitHub](https://github.com/SameerSenapati17)
