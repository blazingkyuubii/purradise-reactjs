import React from "react";
import Navbar from "../../comp-navbar/Navbar";

export default function ProductView(){
    return (
      <div>
        <Navbar />
        <div className="p-12 grid grid-cols-2">
          {/* image */}
          <div className="w-9/12">
            <img src="https://filebroker-cdn.lazada.com.ph/kf/Se8d01bca4388487982c0466e38e07e2f5.jpg" />
          </div>

          {/* product info */}
          <div className="p-10">
            <h1 className="mb-2 text-4xl font-bold">Product Name</h1>
            <p className="mb-5 text-2xl font-semibold">Price</p>

            <p>Description</p>
            <p className="mb-3 text-sm">Description here</p>
            <p>Ingredients</p>
            <p className="mb-3 text-sm">Ingredients here</p>
            <p className="mb-5">Quantity</p>

            <button className="bg-blue-400 rounded p-3 text-md">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    );
}