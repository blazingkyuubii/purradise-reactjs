import React from "react";
import Navbar from "../../comp-navbar/Navbar";
import Hero from "../../comp-hero/Hero";
import productData from "../../productData";
import ProductCard from "../../comp-productCard/ProductCard";
import "./ProductsPage.css";

export default function ProductsPage() {
  const prodAccessories = productData.filter(
    (prop) => prop.prodType === "Litter"
  );

  const prodInfo = prodAccessories.map((prod) => {
    return <ProductCard key={prod.id} prod={prod} prodType={prod.prodType} />;
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <h1>Products</h1>
      <div className="products-grid">{prodInfo}</div>
    </div>
  );
}
