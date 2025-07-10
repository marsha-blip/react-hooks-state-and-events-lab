import React, { useState } from "react";

function Item({ name, category }) {
  // State to track if item is in the cart
  const [isInCart, setIsInCart] = useState(false);

  // Toggle cart status when button is clicked
  function handleAddToCartClick() {
    setIsInCart((prevState) => !prevState);
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCartClick}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;

