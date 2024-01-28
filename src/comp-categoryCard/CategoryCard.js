//router
import { Link } from "react-router-dom";

export default function CategoryCard({ linkTo, imgSrc, imgAlt, isPortrait }) {
  
  const portraitStyle = " rounded ";
  const landscapeStyle = " rounded w-full h-40 ";

  const cardOrientation = isPortrait ? portraitStyle : landscapeStyle;

  return (
    <div className="pb-5">
      <Link to={linkTo}>
        <img className={cardOrientation} src={imgSrc} alt={imgAlt} />
      </Link>
    </div>
  );
}
