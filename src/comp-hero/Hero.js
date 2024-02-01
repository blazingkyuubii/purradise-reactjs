import hero from "./test.png";

export default function Hero() {

  const scrollToSection = (sectionId) =>{
    const section = document.getElementById(sectionId)

    if(section){
      section.scrollIntoView({behavior: "smooth"})
    }
  }

  return (
    <div className=" p-5 items-center lg:p-20 lg:flex flex-row">
      <div className="flex justify-end lg:order-2">
        <img
          className="w-9/12 h-9/12"
          src="https://www.warrenphotographic.co.uk/photography/bigs/40010-Group-of-Cats-around-a-childs-chair-white-background.jpg"
        />
      </div>

      <div>
        <h1 className="text-3xl mt-5 md:text-3xl lg:mt-0 lg:order-1 lg:text-5xl">
          Where all <span className="text-purple-600">Feline Dreams</span> come
          true
        </h1>
        <p className="mt-3">
          Explore our exclusive range of toys, accessories, services, and more –
          all crafted and performed with love for your furry friends.
        </p>
        <button
          onClick={() => scrollToSection("categories")}
          className="border border-dark-green hover:bg-dark-green hover:text-weed-green-200 rounded p-2 mt-3 w-full lg:w-2/5"
        >
          Explore Purradise
        </button>
      </div>
    </div>
  );
}