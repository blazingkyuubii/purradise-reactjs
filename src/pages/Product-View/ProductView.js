import React, { useEffect, useState } from "react";
import Navbar from "../../comp-navbar/Navbar";
import { useParams } from "react-router-dom";
import Footer from "../../comp-footer/Footer";
import productData from "../../productData";

import cashback from "./icon-cashback.png"
import expert from "./icon-expert.png";
import premium from "./icon-premium.png";

export default function ProductView() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Find the product in productData based on productId
    const selectedProduct = productData.find(
      (prod) => prod.id.toString() === productId
    );

    // Set the product in state
    setProduct(selectedProduct);
  }, [productId]);

  const [quantity, setQuantity] = useState(0)
  function addQty(){
    setQuantity(prevQty => prevQty + 1)
  }  

  function minusQty(){
    setQuantity(prevQty => prevQty - 1)
  }


  // If the product is not found return loading..
  if (!product) {
    return <div>Loading...</div>; // or display an error message
  }

  return (
    <div>
      <Navbar />
      <div className="p-12 grid grid-cols-2 mx-auto">
        {/* image */}
        <div className="max-w-600 max-h-600 mx-1 border border-solid border-stone-500">
          <img className='w-full h-full object-contain' src={product.prodImg} alt={product.prodName} />
        </div>

        {/* product info */}
        <div className="p-10 max-h-auto border border-solid border-stone-500 rounded shadow-md">
          <h1 className="mb-2 text-4xl">{product.prodName}</h1>
          <p className="mb-5 text-2xl font-semibold">₱ {product.prodPrice}</p>

          <p className="font-medium">Product Details: </p>
          <p className="mb-5 font-light">{product.prodDescription}</p>

          <p className="mb-1">Quantity</p>
          {/* quantity button  */}
          <div className="relative mb-5">
            <button onClick={minusQty} className="bg-blue-500 text-white px-4 py-2 rounded-l focus:outline-none focus:shadow-outline-blue active:bg-blue-700">
              -
            </button>
            <input
              type="text"
              className="border-l border-r w-8 text-center"
              value={quantity}
            />
            <button onClick={addQty} className="bg-blue-500 text-white px-4 py-2 rounded-r focus:outline-none focus:shadow-outline-blue active:bg-blue-700">
              +
            </button>
          </div>
          <button className="bg-pink-400 rounded py-2 px-3 text-md mb-20">
            Add To Cart
          </button>

          {/* guarantee icons */}
          <div className="h-auto grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center border-r border-stone-300">
              <img className="w-12 " src={premium} alt="Premium Quality" />
              <p className="text-xs mt-2">Premium Quality</p>
            </div>
            <div className="flex flex-col items-center border-r border-stone-300">
              <img className="w-12" src={expert} alt="Feline Expert Approved" />
              <p className="text-xs mt-2">Feline Expert Approved</p>
            </div>
            <div className="flex flex-col items-center">
              <img className="w-12" src={cashback} alt="Money-back guarantee" />
              <p className="text-xs mt-2">Money-back guarantee</p>
            </div>
          </div>

          {/* end */}
        </div>
      </div>
      <Footer/>
    </div>
  );
}
