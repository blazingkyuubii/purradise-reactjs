import React, { useEffect, useState } from "react";
import Navbar from "../../comp-navbar/Navbar";
import { useParams } from "react-router-dom";
import Footer from "../../comp-footer/Footer";
import productData from "../../productData";
import Cart from "../../comp-cart/Cart";
import { Disclosure } from "@headlessui/react";

import cashback from "./icon-cashback.png"
import expert from "./icon-expert.png";
import premium from "./icon-premium.png";

export default function ProductView() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  // const [cartItems, setCartItems] = useState([]);

  const addToCart = () => {
    const newItem = {
      id: product.id,
      name: product.prodName,
      price: product.prodPrice,
      image: product.prodImg,
      quantity: quantity,
    };

    // Get the current cart items from local storage
    const currentCartItems =
      JSON.parse(localStorage.getItem("cartItems")) || [];

    // Check if the item is already in the cart
    const existingItemIndex = currentCartItems.findIndex(
      (item) => item.id === newItem.id
    );

    if (existingItemIndex !== -1) {
      // If the item exists, update the quantity
      currentCartItems[existingItemIndex].quantity += quantity;
    } else {
      // If the item doesn't exist, add it to the cart
      currentCartItems.push(newItem);
    }

    // Save the updated cart items to local storage
    localStorage.setItem("cartItems", JSON.stringify(currentCartItems));
  };



  useEffect(() => {
    // Find the product in productData based on productId
    const selectedProduct = productData.find(
      (prod) => prod.id.toString() === productId
    );

    // Set the product in state
    setProduct(selectedProduct);
  }, [productId]);

  function addQty() {
    setQuantity((prevQty) => prevQty + 1);
  }

  function minusQty() {
    if(quantity > 0)
    setQuantity((prevQty) => prevQty - 1);
  }

  // If the product is not found return loading..
  if (!product) {
    return <div>Loading...</div>; // or display an error message
  }

  return (
    <div className="bg-weed-green-200">
      <Navbar />
      <div>
        <div className=" flex flex-col gap-10 mx-auto lg:justify-center lg:px-40 lg:py-12 lg:flex-row ">
          {/* image */}
          <div className="lg:max-w-600 lg:max-h-600 mx-1 ">
            <img
              className="w-full h-full object-contain"
              src={product.prodImg}
              alt={product.prodName}
            />
          </div>

          {/* product info */}
          <div className="p-3 lg:p-10 lg:w-6/12 max-h-auto lg:border lg:border-solid lg:border-stone-500 lg:rounded lg:shadow-md">
            <h1 className="mb-2 text-4xl">{product.prodName}</h1>
            <p className="mb-5 text-2xl font-semibold">₱ {product.prodPrice}</p>

            <p className="mb-1 text-xl">Quantity</p>
            {/* quantity button  */}
            <div className="relative mb-10 flex justify-between items-center lg:justify-start lg:items-start">
              <button
                onClick={minusQty}
                className="w-full bg-dark-green text-white px-4 py-2 rounded-l lg:w-auto focus:outline-none focus:shadow-outline-blue active:bg-weed-green-400"
              >
                -
              </button>
              <input
                type="text"
                className=" px-1 py-2 lg:w-14 text-lg text-center"
                value={quantity}
                readOnly={true}
              />
              <button
                onClick={addQty}
                className="w-full bg-dark-green text-white px-4 py-2 rounded-r lg:w-auto focus:outline-none focus:shadow-outline-blue active:bg-weed-green-400"
              >
                +
              </button>
            </div>
            <button
              onClick={addToCart}
              className="bg-dark-green text-white rounded  mb-10 w-full text-xl py-4 lg:text-md lg:py-2"
            >
              Add To Cart
            </button>

            <Disclosure defaultOpen="true">
              <Disclosure.Button className="border-b border-dark-green flex flex-row justify-between font-semibold text-2xl lg:text-lg w-full py-1 ">
                Product Details:
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
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel className="text-lg lg:text-md text-gray-600">
                {product.prodDescription}
              </Disclosure.Panel>
            </Disclosure>

            <Disclosure>
              <Disclosure.Button className="border-b border-dark-green flex flex-row justify-between font-semibold text-2xl lg:text-lg w-full py-1">
                Product Features:
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
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel className="text-lg lg:text-md text-gray-600">
                {product.prodDescription}
              </Disclosure.Panel>
            </Disclosure>
            {/* end */}
          </div>
        </div>
        {/* guarantee icons */}
        <div className="mt-10 mb-10 mx-3 h-auto border-t border-gray-300 grid lg:border-none md:grid-cols-3 lg:mx-60 lg:mt-0 lg:grid-cols-3 gap-10">
          <div className="flex flex-col items-center mt-10 lg:mt-0 lg:border-r lg:border-stone-300">
            <img className="w-12 " src={premium} alt="Premium Quality" />
            <p className="lg:text-xs mt-2">Premium Quality</p>
          </div>
          <div className="flex flex-col items-center mt-10 lg:mt-0 lg:border-r lg:border-stone-300">
            <img className="w-12" src={expert} alt="Feline Expert Approved" />
            <p className="lg:text-xs mt-2">Feline Expert Approved</p>
          </div>
          <div className="flex flex-col items-center mt-10 lg:mt-0">
            <img className="w-12" src={cashback} alt="Money-back guarantee" />
            <p className="lg:text-xs mt-2">Money-back guarantee</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
