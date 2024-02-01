//
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
        <div className="bg-dark-green text-weed-green-200 flex flex-col lg:px-10 lg:py-10 lg:grid lg:grid-cols-2 gap-1">
          <div className="px-5 order-2">
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
              className="w-full my-8 lg:my-0 lg:mt-8 lg:w-56 justify-center rounded-md bg-weed-green-200 text-black px-8 py-3 hover:text-white hover:bg-weed-green-400"
            >
              More About Purradise
            </button>
          </div>

          <div>
            <img
              className="order-1 mt-10 lg:mt-0 max-h-96 max-w-full"
              src={bannerPic}
              alt="Purradise Doctors"
            />
          </div>
        </div>
      </div>

      <div className="bg-weed-green-200">
        {/* Category Section */}
        <div id="category">
          <h1
            id="categories"
            className="container mx-auto px-5 pt-8 text-2xl font-semibold md:px-5 lg:px-10"
          >
            Shop by Category
          </h1>
          {/*  mx-8 px-5 px-5 */}
          <div className="mx-auto h-5/6 w-5/6 md:hidden lg:hidden">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              style={{
                "--swiper-pagination-color": "#000000",
                "--swiper-navigation-color": "#000000",
              }}
            >
              <div>
                {categoryCards.map((card, index) => (
                  <SwiperSlide key={index}>{card}</SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </div>

        <div className="hidden lg:mx-auto lg:container lg:px-10 lg:grid lg:grid-cols-5 lg:gap-3  md:grid md:grid-cols-5 md:gap-3">
          {categoryCards}
        </div>

        {/* Featured Products Section */}
        <div id="featuredProd">
          <h1 className="container mx-auto px-5 pt-8 text-2xl font-semibold md:px-5 lg:px-10">
            Featured Products
          </h1>

          <div className="pt-5 mx-auto h-5/6 w-5/6 md:hidden lg:hidden">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              style={{
                "--swiper-pagination-color": "#000000",
                "--swiper-navigation-color": "#000000",
              }}
            >
              <div>
                {prodInfo.map((prod, index) => (
                  <SwiperSlide key={index}>{prod}</SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>

          <div className="hidden lg:mx-auto lg:container lg:px-10 lg:grid lg:grid-cols-5 lg:gap-3  md:grid md:grid-cols-5 md:gap-3">
            {prodInfo}
          </div>
        </div>

        {/* Other Services Section */}
        <div id="others">
          <h1 className="container mx-auto px-5 pt-8 text-2xl font-semibold md:px-5 lg:px-10">
            Other Services
          </h1>
          <div className="container mx-auto pt-5 px-5 lg:px-10 lg:grid lg:grid-cols-2 lg:gap-3">
            <CategoryCard
              linkTo="/service-vet"
              imgSrc={servVet}
              imgAlt="Cat Accessory Category"
            />
            <CategoryCard
              linkTo="/service-groom"
              imgSrc={servGrooming}
              imgAlt="Cat Food Category"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
