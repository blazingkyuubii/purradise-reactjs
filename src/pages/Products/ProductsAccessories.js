import React from 'react'
import Navbar from '../../comp-navbar/Navbar'
import Footer from "../../comp-footer/Footer";
import Hero from "../../comp-hero/Hero";
import productData from "../../productData";
import ProductCard from '../../comp-productCard/ProductCard'
import './ProductsPage.css'


export default function ProductsPage(){

const prodAccessories = productData.filter((prop) => prop.prodType === "Accessories")
    
const prodInfo = prodAccessories.map((prod) => {
  return <ProductCard key={prod.id} prod={prod} prodType={prod.prodType}/>;
});


    return (
      <div>
        <Navbar />
        <Hero />
        <div className="bg-weed-green-200">
          <h1 className="container mx-auto text-2xl font-semibold px-5 lg:px-10 py-8">
            Cat Accessories
          </h1>
          <div className="container mx-auto grid grid-cols-2 gap-1 px-5 pb-5 lg:px-10 lg:pb-5 lg:grid lg:grid-cols-5">
            {prodInfo}
          </div>
        </div>
        <Footer />
      </div>
    );
}