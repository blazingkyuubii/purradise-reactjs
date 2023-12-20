import "./CategoryCard.css";

//router
import { Link } from "react-router-dom";

export default function CategoryCard({ linkTo, imgSrc, imgAlt, isPortrait }) {

  const portraitStyle = {
    border: "2px solid rgb(255, 255, 255)",
    borderRadius: "2%",
    width: "100%",
    height: "100%",
  };

  const landscapeStyle = {
    border: "2px solid rgb(255, 255, 255)",
    borderRadius: "2%",
    width: "100%",
    height: "150px",
  };

  const cardOrientation = isPortrait ? portraitStyle : landscapeStyle

  return (
    <div className="category-card-container">
      <Link to={linkTo}>
        <img className="category-card-img" src={imgSrc} alt={imgAlt} style={cardOrientation}/>
      </Link>
    </div>
  );
}
