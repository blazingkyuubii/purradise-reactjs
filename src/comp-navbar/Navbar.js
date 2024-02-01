import "./Navbar.css";
import { Link } from "react-router-dom";
import React, { Fragment, useState } from "react";
import { Menu } from "@headlessui/react";
import logo from "../images/logo400.png";

function Navbar() {

    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

  return (
    <nav className="shadow-md shadow-stone-200 bg-dark-green flex flex-start items-center p-5">
      <Link to="/">
        <img className="w-22 h-16" src={logo} alt="Logo" />
      </Link>

      <div className="lg:hidden">
        <Menu>
          <Menu.Button>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </Menu.Button>
          <Menu.Items className="bg-red-300 absolute right-0 mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="flex flex-col justify-items-end ">
              <div>
                <Link to="/cart">
                  <Menu.Item className="p-5">
                    <div className="flex items-center gap-5 justify-center">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        />
                      </svg>
                      <p>My Cart</p>
                    </div>
                  </Menu.Item>
                </Link>
              </div>
              <div>
                <Link>
                  <Menu.Item className="p-5">
                    <div className="flex items-center gap-5 justify-center">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                      </svg>
                      <p>About Purradise</p>
                    </div>
                  </Menu.Item>
                </Link>
              </div>
              <div>
                <Link>
                  <Menu.Item className="p-5">
                    <div className="flex items-center gap-5 justify-center">
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                      </svg>
                      <p>Contact Us</p>
                    </div>
                  </Menu.Item>
                </Link>
              </div>
            </div>
          </Menu.Items>
        </Menu>
      </div>

      <div className="">
        <ul className=" text-weed-green-200 hidden lg:flex lg:gap-20 lg:list-none lg:ms-10">
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
