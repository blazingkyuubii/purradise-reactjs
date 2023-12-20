import "./Hero.css";
import hero from "./test.png";

export default function Hero() {
  return (
    <div className="hero-container">
      <img src={hero} className="hero-image"></img>
    </div>
  );
}