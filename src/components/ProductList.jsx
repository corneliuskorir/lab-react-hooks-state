import React, { useState } from "react";
import ProductCard from "./ProductCard";

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: "Apple", price: "$1.00", category: "Fruits", inStock: true },
  { id: 2, name: "Milk", price: "$2.50", category: "Dairy", inStock: false },
];

const ProductList = ({ filter, addToCart }) => {
  let filteredProducts = [];
  if (filter === "All") {
    filteredProducts = sampleProducts;
  } else {
    filteredProducts = sampleProducts.filter((p) => p.category === filter);
  }

  return (
    <div>
      <h2>Available Products</h2>

      {filteredProducts.length ? (
        filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => addToCart(product)}
          />
        ))
      ) : (
        <p>no products available</p>
      )}
    </div>
  );
};

export default ProductList;
