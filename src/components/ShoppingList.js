import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // ✅ Create state to track selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ✅ Event handler to update state on select change
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // ✅ Filter items based on selectedCategory
  const itemsToDisplay = items.filter((item) => {
    return selectedCategory === "All" || item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

