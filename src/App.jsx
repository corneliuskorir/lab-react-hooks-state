import React, { useState } from "react";
import ProductList from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";

const App = () => {
  // TODO: Implement state for cart management

  // TODO: Implement state for category filtering

  const [category, setCategory] = useState("All");
  const [cartItems, setCartItems] = useState([]);

  function handleSelectCategory(e) {
    setCategory(e.target.value);
  }

  function handleAddToCart(item) {
    setCartItems((curentCart) => [...curentCart, item]);
  }

  return (
    <div>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>
      <DarkModeToggle />

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select onChange={handleSelectCategory}>
        <option value="All">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList filter={category} addToCart={handleAddToCart} />

      <Cart cart={cartItems} />
    </div>
  );
};

export default App;
