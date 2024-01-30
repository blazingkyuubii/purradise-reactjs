//router
import { Link } from "react-router-dom";

export default function CategoryCard({ linkTo, imgSrc, imgAlt, isPortrait }) {
  
  const portraitStyle = "hover:shadow-lg rounded-full ";
  const landscapeStyle = " rounded w-full border border-2 border-dark-green";

  const cardOrientation = isPortrait ? portraitStyle : landscapeStyle;

  return (
    <div className="pb-5">
      <Link to={linkTo}>
        <img className={cardOrientation} src={imgSrc} alt={imgAlt} />
      </Link>
    </div>
  );
}
