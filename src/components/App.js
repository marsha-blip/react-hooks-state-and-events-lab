import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  //  Create state for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  //  Determine className based on state
  const appClass = isDarkMode ? "App dark" : "App light";

  //  Toggle function to update state
  function handleDarkModeClick() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        {/*  Add click handler */}
        <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
