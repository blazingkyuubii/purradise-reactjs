import hero from "./test.png";

export default function Hero() {

  const scrollToSection = (sectionId) =>{
    const section = document.getElementById(sectionId)

    if(section){
      section.scrollIntoView({behavior: "smooth"})
    }
  }

  return (
    <div className="flex flex-row p-20 items-center">

      <div>
        <h1 className="text-6xl">Where all <span className="text-purple-600">Feline Dreams</span> come true</h1>
        <p className="mt-3">
          Explore our exclusive range of toys, accessories, services, and more – all
          crafted and performed with love for your furry friends.
        </p>
        <button onClick={() => scrollToSection("categories")} className="border border-dark-green hover:bg-dark-green hover:text-weed-green-200 p-2 rounded mt-3">Explore Purradise</button>
      </div>

      <div className="flex justify-end"> 
        <img className="w-9/12 h-9/12" src="https://www.warrenphotographic.co.uk/photography/bigs/40010-Group-of-Cats-around-a-childs-chair-white-background.jpg"/>
      </div>
    </div>
  );
}