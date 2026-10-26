
import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(items.map((item) => item.category)),
  ];

  const filteredItems =
    selectedCategory === "All"
      ? items
      : items.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <div className="ShoppingList">
      <label htmlFor="category">Filter by category:</label>

      <select
        id="category"
        value={selectedCategory}
        onChange={(event) =>
          setSelectedCategory(event.target.value)
        }
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
