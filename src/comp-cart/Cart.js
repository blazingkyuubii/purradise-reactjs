import React, { useState, useEffect } from "react";
import Navbar from "../comp-navbar/Navbar";
import Footer from "../comp-footer/Footer";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);

  function addQty() {
    setQuantity((prevQty) => prevQty + 1);
  }

  function minusQty() {
    if(quantity > 0)
    setQuantity((prevQty) => prevQty - 1);
  }

  useEffect(() => {
    // Retrieve cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  const removeItem = (itemId) => {
    // Filter out the item to be removed
    const updatedCart = cartItems.filter((item) => item.id !== itemId);

    // Update the cart items in local storage
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));

    // Update the state to trigger a re-render
    setCartItems(updatedCart);
  };
  return (
    <div>
      <Navbar />
      <h1 className="m-5">Shopping Cart</h1>
      <div className="border border-red-400 flex flexcox-col m-5 px-20 gap-40 justify-end">
        <p>Unit Price</p>
        <p>Quantity</p>
        <p>Total Price</p>
        <p>Actions</p>
      </div>
      {cartItems.map((product) => (
        <div className="px-5">
          <div className="my-5 flex flexbox-col gap-10 border border-red-400 py-10 px-10">
            <div className="flex flexbox-col gap-10 place-items-center">
              <img
                className="w-32 h-32 border border-red-400"
                src={product.image}
              />
              <p>{product.name}</p>
            </div>
            <div className="flex flex-row gap-40 justify-end text-base">
              <p>₱{product.price}</p>

              <div className="relative mb-5">
                <button
                  onClick={minusQty}
                  className="bg-blue-500 text-white px-4 py-2 rounded-l focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
                >
                  -
                </button>
                <input
                  type="text"
                  className="border-l border-r w-8 text-center"
                  value={product.quantity}
                />
                <button
                  onClick={addQty}
                  className="bg-blue-500 text-white px-4 py-2 rounded-r focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
                >
                  +
                </button>
              </div>
              <p>₱{product.price * product.quantity}</p>
              <button
                className="border border-orange-400 hover:bg-orange-400 p-1 rounded"
                onClick={() => removeItem(product.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
}
