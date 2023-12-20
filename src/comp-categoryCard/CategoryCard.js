import "./CategoryCard.css";
import catAccessories from "./cat-accessories.png"
import catFood from "./cat-food.png";
import catLitter from "./cat-litter.png";
import catToys from "./cat-toys.png";
import catVitamins from "./cat-vitamins.png";

//router
import {Link} from 'react-router-dom'


export default function CategoryCard(){
    return (
      <div className="category-main-container">
        <div className="category-card-container">
          <Link to="/accessories">
            <img className="category-card-img" src={catAccessories} />
          </Link>

          <Link to="/foods">
            <img className="category-card-img" src={catFood} />
          </Link>

          <Link to="/litter">
            <img className="category-card-img" src={catLitter} />
          </Link>

          <Link to="/toys">
            <img className="category-card-img" src={catToys} />
          </Link>
          
          <Link to="/vitamins">
            <img className="category-card-img" src={catVitamins} />
          </Link>
        </div>
      </div>
    );
}