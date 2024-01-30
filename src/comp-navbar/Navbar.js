import logo from "./arslogo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function Navbar() {

    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

  return (
    <nav className="flex flex-start items-center shadow-md shadow-stone-200 bg-dark-green p-5">
      <img className="nav-logo" src={logo} alt="Logo" />
      <Link to="/">
        <h1 className="nav-title">Purradise</h1>
      </Link>

      <div className="nav-items">
        <ul className=" text-weed-green-200">
          <Link className=" text-weed-green-200" to="/testEnv">
            <li>Test Environment</li>
          </Link>
          <li onClick={() => scrollToSection("others")}>Services</li>
          <li>
            <Link className=" text-weed-green-200" to="/cart">
              <button>My Cart</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
