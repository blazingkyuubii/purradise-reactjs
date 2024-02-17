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
    <div className="flex flex-col min-h-screen bg-weed-green-200">
      <Navbar />
      <div>
        <h1 className="px-5 py-3 text-2xl font-semibold lg:px-20">
          Your Shopping Cart
        </h1>

        {cartItems.map((product) => {
          const totalItemPrice = product.price * itemQuantity[product.id];
          totalPrice += totalItemPrice;

          return (
            <div id="cart-item-container"  className="flex flex-row p-5 py-5 gap-3 lg:px-20">
              <div
                id="cart-item-image-container"
                className="w-36 h-32"
              >
                <img src={product.image} />
              </div>

              <div id="cart-item-info-container" className="w-full">
                <div id="section-1" className="flex flex-row justify-between">
                  <div id="info">
                    <p>{product.name}</p>
                    <p>₱{product.price}</p>
                  </div>
                  <div id="action" onClick={() => removeItem(product.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </div>
                </div>

                <div id="section-2" className="mt-10">
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
                </div>
              </div>
            </div>
          );
        })}

        <div
          id="total-price-container"
          className="border border-y-gray-300 p-5 lg:px-20"
        >
          <h1 className="font-bold">Shipping Details</h1>
          <div className=" flex flex-row p-3 justify-between">
            <div id="labels">
              <p>Shipping Method:</p>
              <p>Shipping Fee:</p>
            </div>
            <div id="prices">
              <p>Standard</p>
              <p>₱100</p>
            </div>
          </div>

          <h1 className="font-bold">Payment Details</h1>
          <div className=" flex flex-row p-3 justify-between">
            <div id="labels">
              <p>Items Total:</p>
              <p>Shipping Fee:</p>
              <p>Total Payment:</p>
            </div>
            <div id="prices">
              <p>₱{totalPrice}</p>
              <p>₱100</p>
              <p>₱{totalPrice + 100}</p>
            </div>
          </div>
        </div>

        <div id="checkout-button" className="px-3 lg:px-20">
          <button className="border border-dark-green bg-dark-green text-weed-green-200 p-1 mt-5 rounded w-full mb-10">
            Checkout
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
