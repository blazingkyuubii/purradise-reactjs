import './Footer.css'

export default function Footer(){
    return (
      /*
        Footer Contents:
        col-1
        Logo (under logo add copyright all rights reserved)
        col-2
        (Title) Customer Service
        - FAQ
        - Return & Refund
        - Contact Us
        col-3
        (About Purradise)
        - About Us
        - Store Locations
      */
      <footer>
        <div>
          <p>Insert Logo Here</p>
          <p>Insert Copyright things here</p>
        </div>

        <div>
          <h1>Customer Service</h1>
          <ul>
            <li>FAQ</li>
            <li>Return & Refund</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h1>About Purradise</h1>
          <ul>
            <li>About Us</li>
            <li>Store Locations</li>
            <li>Store Locations</li>
          </ul>
        </div>
      </footer>
    );
}