import Navbar from "../../comp-navbar/Navbar";
import Hero from "../../comp-hero/Hero";
import Footer from "../../comp-footer/Footer";
import CategoryCard from "../../comp-categoryCard/CategoryCard";
import productData from "../../productData";
import ProductCard from "../../comp-productCard/ProductCard";
import "../../comp-productCard/ProductCard.css";

export default function Home() {

  const featuredProducts = productData.filter((prod) => prod.isFeatured)

  const prodInfo = featuredProducts.map((prod) => {
    return <ProductCard key={prod.id} prod={prod} isFeatured={prod.isFeatured} />;
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <h1>Shop by CATegory :D</h1>
      <CategoryCard />
      <h1>Featured Products</h1>
      <div className="products-grid">{prodInfo}</div>
    </div>
  );
}
