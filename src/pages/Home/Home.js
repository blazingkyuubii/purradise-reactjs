//component imports
import Navbar from "../../comp-navbar/Navbar";
import Hero from "../../comp-hero/Hero";
import Footer from "../../comp-footer/Footer";
import CategoryCard from "../../comp-categoryCard/CategoryCard";
import productData from "../../productData";
import ProductCard from "../../comp-productCard/ProductCard";


//categories img src
import catAccessories from "../../comp-categoryCard/ctg-accrs-icon.png";
import catFood from "../../comp-categoryCard/ctg-food-icon.png";
import catLitter from "../../comp-categoryCard/ctg-accrs-icon.png";
import catToys from "../../comp-categoryCard/ctg-toys-icon.png";
import catVitamins from "../../comp-categoryCard/ctg-wlns-icon.png";
import servGrooming from "../../comp-categoryCard/serv-grooming.png";
import servVet from "../../comp-categoryCard/serv-vet.png";

export default function Home() {

  //filter featured products to show in home page
  const featuredProducts = productData.filter((prod) => prod.isFeatured)
  const prodInfo = featuredProducts.map((prod) => {
    return <ProductCard key={prod.id} prod={prod} isFeatured={prod.isFeatured} linkTo={'/item'} />;
  });

  const categories = [
    {linkTo:"/accessories", title:"Accessories" , imgSrc: catAccessories, imgAlt:"Cat Accessory Category", isPortrait:true},
    {linkTo:"/foods", title:"Foods" , imgSrc: catFood, imgAlt:"Cat Food Category", isPortrait:true},
    {linkTo:"/litters", title:"Litters" , imgSrc: catLitter, imgAlt:"Cat Litter Category", isPortrait:true},
    {linkTo:"/toys", title:"Toys" , imgSrc: catToys, imgAlt:"Cat Toys Category", isPortrait:true},
    {linkTo:"/vitamins", title:"Wellness" , imgSrc: catVitamins, imgAlt:"Cat Vitamins Category", isPortrait:true},
  ]

  const categoryCards = categories.map((category, index) => 
    <CategoryCard key={index} {...category} />
  )

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="bg-weed-green-200">
        {/* Category Section */}
        <div id="category">
          <h1
            id="categories"
            className="container mx-auto px-10 py-8 text-2xl font-semibold"
          >
            Shop by Category
          </h1>
          <div className="container mx-auto px-10 grid grid-cols-5 gap-3">
            {categoryCards}
          </div>
        </div>

        {/* Featured Products Section */}
        <div id="featuredProd">
          <h1 className="container mx-auto px-10 py-8 text-2xl font-semibold">
            Featured Products
          </h1>
          <div className="container mx-auto px-10 grid grid-cols-5 gap-3">
            {prodInfo}
          </div>
        </div>

        {/* Brand Collection Section */}
        <div id="brand">
          <div className="rounded bg-amber-600 mx-10 mt-10 px-10 py-10 grid grid-cols-2 gap-1">
            <div className="px-5">
              <h1 className="mt-5 font-bold text-2xl">
                The Purradise Collection
              </h1>
              <p className="mt-5">
                Handcrafted products with love from Purradise itself.
              </p>
              <button
                type="submit"
                className="mt-8 flex w-50 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Shop Now
              </button>
            </div>
            <div>
              <img
                src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/grocery-sale-retail-or-e-commerce-banner-ad-design-template-67720435bb809be27f46dfb1dd44c6fa_screen.jpg?ts=1606113265"
                alt="Cat Accessory Category"
              />
            </div>
          </div>
        </div>

        {/* Other Services Section */}
        <div id="others">
          <h1 className="container mx-auto px-10 py-8 text-2xl font-semibold">
            Other Services
          </h1>
          <div className="container mx-auto px-10 grid grid-cols-2 gap-3">
            <CategoryCard
              linkTo="/service-vet"
              imgSrc={servGrooming}
              imgAlt="Cat Accessory Category"
            />
            <CategoryCard
              linkTo="/service-groom"
              imgSrc={servVet}
              imgAlt="Cat Food Category"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
