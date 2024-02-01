import logo from "../images/logo400.png"

export default function Footer(){
    return (
      <div>
        <footer className="bg-dark-green text-weed-green-200 bottom-0 sticky ">
          <div className="flex flex-col p-5  lg:flex lg:flex-row lg:p-20 lg:gap-20 lg:justify-center lg:items-center">
            <div>
              <img src={logo} className="w-38 h-28" />
              <p>© Purradise 2023 All rights reserved. </p>
            </div>

            <div className="mt-5">
              <h1 className="text-2xl font-bold">Customer Service</h1>
              <ul className="mt-2">
                <li className="text-xl">FAQ</li>
                <li className="text-xl">Return & Refund</li>
                <li className="text-xl">Contact Us</li>
              </ul>
            </div>

            <div className="mt-5">
              <h1 className="text-2xl font-bold">About Purradise</h1>
              <ul className="mt-2">
                <li className="text-xl">About Us</li>
                <li className="text-xl">Store Locations</li>
                <li className="text-xl">Our Team</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    );
}