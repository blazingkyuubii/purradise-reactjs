//css imports
import './Home.css'
import "../../comp-productCard/ProductCard.css";

//component imports
import Navbar from "../../comp-navbar/Navbar";
import Hero from "../../comp-hero/Hero";
import Footer from "../../comp-footer/Footer";
import CategoryCard from "../../comp-categoryCard/CategoryCard";
import productData from "../../productData";
import ProductCard from "../../comp-productCard/ProductCard";


//categories img src
import catAccessories from "../../comp-categoryCard/cat-accessories.png";
import catFood from "../../comp-categoryCard/cat-food.png";
import catLitter from "../../comp-categoryCard/cat-litter.png";
import catToys from "../../comp-categoryCard/cat-toys.png";
import catVitamins from "../../comp-categoryCard/cat-vitamins.png";

export default function Home() {

  const featuredProducts = productData.filter((prod) => prod.isFeatured)

  const prodInfo = featuredProducts.map((prod) => {
    return <ProductCard key={prod.id} prod={prod} isFeatured={prod.isFeatured} />;
  });

  return (
    <div>
      <Navbar />
      <Hero />

      <h1>Shop by Category</h1>
      <div className="category-grid">
      <CategoryCard linkTo="/accessories" imgSrc={catAccessories} imgAlt="Cat Accessory Category" isPortrait={true}/>
      <CategoryCard linkTo="/foods" imgSrc={catFood} imgAlt="Cat Food Category" isPortrait={true}/>
      <CategoryCard linkTo="/litters" imgSrc={catLitter} imgAlt="Cat Litter Category" isPortrait={true}/>
      <CategoryCard linkTo="/toys" imgSrc={catToys} imgAlt="Cat Toys Category" isPortrait={true}/>
      <CategoryCard linkTo="/vitamins" imgSrc={catVitamins} imgAlt="Cat Vitamins Category" isPortrait={true}/>
      </div>

      <h1>Featured Products</h1>
      <div className="products-grid">{prodInfo}</div>

      <h1>Purradise Collection</h1>
      <CategoryCard/>

      <h1>Other Services</h1>
      <div className="category-grid-landscape">
      <CategoryCard linkTo="/accessories" imgSrc={catAccessories} imgAlt="Cat Accessory Category"/>
      <CategoryCard linkTo="/foods" imgSrc={catFood} imgAlt="Cat Food Category"/>
      </div>
      
    </div>
  );
}
