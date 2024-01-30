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
import bannerPic from "./banner-pic.png"

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

      {/* Brand Collection Section */}
      <div id="brand" className="bg-weed-green-200">
        <div className="bg-dark-green text-weed-green-200 px-10 py-10 grid grid-cols-2 gap-1">
          <div className="px-5">
            <h1 className="mt-5 font-bold text-2xl">
              A Feline's Rest, Purradise.
            </h1>
            <p className="mt-5">
              We take pride in crafting products that are free from artificial
              additives and preservatives, ensuring that every offering is a
              testament to the purity of nature. Our dedication to your cat's
              well-being extends beyond the ingredients – it's a philosophy
              ingrained in every facet of our creations. Furthermore, our
              top-notch services are a reflection of a meticulous hiring process
              where the owner personally selects employees. This ensures that
              each member of our team shares a passion for feline care and
              embodies the values of Purradise.
            </p>
            <button
              type="submit"
              className="mt-8 flex w-50 items-center justify-center rounded-md border border-transparent bg-weed-green-200 text-black px-8 py-3 text-base font-medium text-white hover:bg-weed-green-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              More About Purradise
            </button>
          </div>
          <div>
            <img
              className="max-h-96 max-w-full"
              src={bannerPic}
              alt="Cat Accessory Category"
            />
          </div>
        </div>
      </div>

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
