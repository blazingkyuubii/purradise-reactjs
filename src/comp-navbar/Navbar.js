import logo from "./arslogo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Cart from "../comp-cart/Cart";

function Navbar() {

  return (
    <nav>
      <img className="nav-logo" src={logo} alt="Logo" />
      <Link to="/">
        <h1 className="nav-title">Purradise</h1>
      </Link>

      <div className="nav-items">
        <ul>
          <Link to="/testEnv">
            <li>Test Environment</li>
          </Link>
          <li>Services</li>
          <li>
            <Link to="/cart">
              <button>My Cart</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
