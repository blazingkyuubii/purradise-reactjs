import logo from "./arslogo.png";
import './Navbar.css';
import {Link} from 'react-router-dom'

function Navbar(){
    return (
      <nav>
        <img className="nav-logo" src={logo} />
        <Link to="/">
          <h1 className="nav-title">Purradise</h1>
        </Link>

        <div className="nav-items">
          <ul>
            <li>Login/Signup</li>
            <li>Services</li>
            <li>My Cart</li>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar