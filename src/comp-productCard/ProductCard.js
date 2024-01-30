//router
import { Link } from "react-router-dom";

export default function ProductCard({isFeatured, prod, linkTo}){
    
    const defaultStyle = "border border-gray-100 bg-white hover:shadow-lg px-10 py-5";
    const featuredStyle = "shadow-md px-10 py-5"

    const defaultImgSize = "mx-auto w-60 h-60";
    const featuredImgSize = "mx-auto w-80 h-60";

    const cardStyle = isFeatured ? `${defaultStyle} ${featuredStyle}` : defaultStyle
    const imgSize = isFeatured ? `${defaultImgSize} ${featuredImgSize}` : defaultImgSize

    return (
      <Link to={`/product/${prod.id}`}>
        <div className={cardStyle}>
          <img className={imgSize} src={prod.prodImg} alt="product" />
          <p className="line-clamp-1 mt-2 text-lg">{prod.prodName}</p>
          <p>₱ {prod.prodPrice}</p>
        </div>
      </Link>
    );
}