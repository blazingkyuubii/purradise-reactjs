import React, { useEffect, useState } from "react";
import Navbar from "../../comp-navbar/Navbar";
import { useParams } from "react-router-dom";
import productData from "../../productData";

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

  // If the product is not found return loading..
  if (!product) {
    return <div>Loading...</div>; // or display an error message
  }

  return (
    <div>
      <Navbar />
      <div className="p-12 grid grid-cols-2">
        {/* image */}
        <div className="w-9/12">
          <img src={product.prodImg} alt={product.prodName} />
        </div>

        {/* product info */}
        <div className="p-10">
          <h1 className="mb-2 text-4xl font-bold">{product.prodName}</h1>
          <p className="mb-5 text-2xl font-semibold">₱ {product.prodPrice}</p>

          <p>Product Details: </p>
          <p className="mb-5">{product.prodDescription}</p>
          <p>Quantity</p>
          <p className="mb-5">Quantity Button Here</p>

          <button className="bg-blue-400 rounded p-3 text-md">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
