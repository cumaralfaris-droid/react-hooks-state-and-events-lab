
import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkMode() {
    setIsDarkMode((currentMode) => !currentMode);
  }

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <header>
        <h1>Shopping List</h1>
        <button onClick={handleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
