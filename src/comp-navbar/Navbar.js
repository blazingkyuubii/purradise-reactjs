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
            <Link to="/testEnv">
              <li>Test Environment</li>
            </Link>
            <li>Services</li>
            <Link to="/cart">
            <li>My Cart</li>
            </Link>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar