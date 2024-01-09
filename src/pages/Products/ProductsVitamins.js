import React from "react";
import Navbar from "../../comp-navbar/Navbar";
import Footer from "../../comp-footer/Footer";
import Hero from "../../comp-hero/Hero";
import productData from "../../productData";
import ProductCard from "../../comp-productCard/ProductCard";
import "./ProductsPage.css";

export default function ProductsPage() {
  const prodAccessories = productData.filter(
    (prop) => prop.prodType === "Vitamins"
  );

  const prodInfo = prodAccessories.map((prod) => {
    return <ProductCard key={prod.id} prod={prod} prodType={prod.prodType} />;
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <h1 className='container mx-auto px-10 py-8 text-2xl font-semibold'>Products</h1>
      <div className="container mx-auto px-10 pb-5 grid grid-cols-5 gap-3">{prodInfo}</div>
      <Footer/>
    </div>
  );
}
