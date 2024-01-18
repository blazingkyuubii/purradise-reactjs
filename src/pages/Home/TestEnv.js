import React, { useState } from "react";

export default function TestEnv() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = () => {
    // Simulating product data for the example
    const product = { name: 'Product 1', quantity: 1, price: 20 };

    setCartItems([...cartItems, product]);
  };

  return (
    <div>
      <div>
        {/* ProductView Component */}
        <img src="url-to-image" alt="Product 1" />
        <p>Price: $20</p>
        <button onClick={addToCart}>Add to Cart</button>
      </div>

      <div>
        {/* Cart Component */}
        <h2>Shopping Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <p>{item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Total: ${item.price * item.quantity}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};