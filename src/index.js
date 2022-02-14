import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function NavBar() {
  return (
    <div>
      <NavMenu />
      <Hero />
    </div>
  );
}
const Logo = () => <h2 className="nav-logo">Bankify</h2>;

const NavMenu = () => {
  return (
    <nav className="nav">
      <Logo />
      <ul className="nav-links">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Home
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#section--1">
            Features
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#section--2">
            Operations
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#section--3">
            Testimonials
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link nav-link-btn btn-show-modal" href="#">
            Open account
          </a>
        </li>
      </ul>
    </nav>
  );
};

const Hero = () => {
  return (
    <div className="header">
      <h1 className="header-title">
        Internet Banking <br />
        Has Never Been <span className="header-emphasis">Easier</span>
      </h1>
      <h4>A simpler banking experience for a simpler life. </h4>
      <br /> <br />
      <button class="btn-text btn-scroll-to">Learn more</button>
    </div>
  );
};

ReactDOM.render(<NavBar />, document.getElementById("root"));
