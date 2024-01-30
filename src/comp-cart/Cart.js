import React, { useState, useEffect } from "react";
import Navbar from "../comp-navbar/Navbar";
import Footer from "../comp-footer/Footer";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [itemQuantity, setItemQuantity] = useState({});
  let totalPrice = 0;

useEffect(() => {
  // Retrieve cart items and quantities from local storage
  const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const storedItemQuantity =
    JSON.parse(localStorage.getItem("itemQuantity")) || {};

  // Initialize quantities for items in the cart
  const updatedItemQuantity = { ...storedItemQuantity };
  storedCartItems.forEach((item) => {
    if (!(item.id in updatedItemQuantity)) {
      // Set initial quantity if not present in storedItemQuantity
      updatedItemQuantity[item.id] = item.quantity || 0;
    }
  });

  setCartItems(storedCartItems);
  setItemQuantity(updatedItemQuantity);
}, []);



  function addQty(itemId) {
    setItemQuantity((prevQty) => ({
      ...prevQty,
      [itemId]: (prevQty[itemId] || 0) + 1,
    }));
  }

  function minusQty(itemId) {
    if (itemQuantity[itemId] > 0) {
      setItemQuantity((prevQty) => ({
        ...prevQty,
        [itemId]: prevQty[itemId] - 1,
      }));
    }
  }

  const removeItem = (itemId) => {
    // Filter out the item to be removed
    const updatedCart = cartItems.filter((item) => item.id !== itemId);

    // Update the cart items in local storage
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));

    // Update the state to trigger a re-render
    setCartItems(updatedCart);
  };

  return (
    <div className=" bg-weed-green-200">
      <Navbar />
      <div>
        <h1 className="px-20 my-5">Your Shopping Cart</h1>
        <div id="cart-container" className=" px-20">
          <div
            id="cart-header"
            className="bg-white rounded-t-md border border-gray-400 flex flex-row gap-40 px-5 justify-end"
          >
            <p>Unit Price</p>
            <p>Quantity</p>
            <p>Total Price</p>
            <p>Actions</p>
          </div>

          {cartItems.map((product) => {
            const totalItemPrice = product.price * itemQuantity[product.id];
            totalPrice += totalItemPrice;

            return (
              <div
                key={product.id}
                id="cart-items-container"
                className=" flex flexbox-col bg-white border border-gray-400 py-10"
              >
                <div
                  id="item-name-image"
                  className="flex flexbox-col px-3 gap-5 place-items-center"
                >
                  <img
                    className="w-32 h-32 border border-red-400"
                    src={product.image}
                  />
                  <p>{product.name}</p>
                </div>

                <div
                  id="item-info"
                  className="flex flex-row gap-40 ml-auto px-3 place-items-center text-base"
                >
                  <p>₱{product.price}</p>

                  <div id="item-info-qty">
                    <button
                      onClick={() => minusQty(product.id)}
                      className="bg-dark-green text-white px-3 py-1 rounded-l focus:outline-none focus:shadow-outline-blue active:bg-weed-green-400"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      className="border border-dark-green h-8  w-8 text-center"
                      value={itemQuantity[product.id]}
                      readOnly={true}
                    />
                    <button
                      onClick={() => addQty(product.id)}
                      className="bg-dark-green text-white px-3 py-1 rounded-r focus:outline-none focus:shadow-outline-blue active:bg-weed-green-400"
                    >
                      +
                    </button>
                  </div>

                  <p>₱{totalItemPrice}</p>
                  <button
                    className="border border-dark-green hover:bg-dark-green p-1 rounded hover:text-weed-green-200"
                    onClick={() => removeItem(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
          <div className="rounded-b-md border border-gray-400 bg-white flex flex-col p-5">
            <div className="flex flex-row gap-6 text-xl text-start justify-end">
              <div>
                <p>Order Total:</p>
                <p>Shipping Fee:</p>
                <p>Total Payment:</p>
              </div>
              <div>
                <p>₱{totalPrice}</p>
                <p>₱100</p>
                <p>₱{totalPrice + 100}</p>
              </div>
            </div>
            <button className="border border-dark-green bg-dark-green text-weed-green-200 p-1 mt-5 rounded">
              Checkout
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
