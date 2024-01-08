//router
import { Link } from "react-router-dom";

export default function ProductCard({isFeatured, prod, linkTo}){
    
    const defaultStyle = "shadow-md px-10 py-5 border border-solid border-stone-200"
    const featuredStyle = "shadow-md px-10 py-5 border border-solid border-stone-200"

    const defaultImgSize = "mx-auto w-75 h-60";
    const featuredImgSize = "mx-auto w-80 h-60";

    const cardStyle = isFeatured ? `${defaultStyle} ${featuredStyle}` : defaultStyle
    const imgSize = isFeatured ? `${defaultImgSize} ${featuredImgSize}` : defaultImgSize

    return (
      <Link to={linkTo}>
        <div className={cardStyle}>
          <img className={imgSize} src={prod.prodImg} alt="product" />
          <p className=" mt-2 text-lg font-bold">{prod.prodName}</p>
          <p className="font-semibold">₱ {prod.prodPrice}</p>
        </div>
      </Link>
    );
}