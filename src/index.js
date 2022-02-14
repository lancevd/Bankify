import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import debitCards from "./cCards.jpg"
import digitalBanking from "./dbank.jpg"
import savings from "./savingss.jpg"

function NavBar() {
  return (
    <div>
      <NavMenu />
      <Hero />
      <Features />
      <CTA />
      <Footer />
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
          <a className="nav-link" href="#features">
            Features
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">
            Wallet
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">
            Contact
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
      <button className="btn-text btn-scroll-to">Learn more</button>
    </div>
  );
};

const Features = () => {
  return (
    <div id="features">
      <div className="section-title">
        <h2 className="section-description">Features</h2>
        <h3 className="section-header">
          Get the 21st Century Banking Experience
        </h3>
      </div>
      <div className="features">
        <img
          src={digitalBanking}
          alt="Digital Bank"
          className="features-img "
        />
        <div className="features-feature">
          <h5 className="features-header">100% digital bank</h5>
          <p>
            Do you hate the bank hassle, queue, and stress? We do too! This is
            why we have made it an 100% online banking. You can make all your
            transactions from your device at your convenience.
          </p>
        </div>

        <div className="features-feature">
          <h5 className="features-header">Control Your Spending</h5>
          <p>
            With bankify, you can choose a savings plan. With this, you can
            control how you spend and save up monthly, anually, weekly, or even
            daily. That's not all. You can also get up to 15% interest annually!
          </p>
        </div>
        <img
          src={savings}
          alt="Savings"
          className="features-img "
        />

        <img
          src={debitCards}
          alt="Savings"
          className="features-img "
        />
        <div className="features-feature">
          <h5 className="features-header">Free debit card included</h5>
          <p>
            With Bankify visa card and mastercard, you can make online payments,
            POS, and withdraw at local ATMs without any issues!
          </p>
        </div>
      </div>
    </div>
  );
};

const CTA = () => {
  return (
    <section className="section section-sign-up">
      <div className="section-title">
        <h3 className="section-header">
          What are you waiting for? Join Bankify today and get a welcome bonus
          of &#8358;1000
        </h3>
      </div>
      <button className="btn">Open your free account today!</button>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-nav">
        <li className="footer-item">
          <a className="footer-link" href="#">
            About
          </a>
        </li>
        <li className="footer-item">
          <a className="footer-link" href="#">
            Pricing
          </a>
        </li>
        <li className="footer-item">
          <a className="footer-link" href="#">
            Terms of Use
          </a>
        </li>
        <li className="footer-item">
          <a className="footer-link" href="#">
            Privacy Policy
          </a>
        </li>
        <li className="footer-item">
          <a className="footer-link" href="#">
            Careers
          </a>
        </li>
        <li className="footer-item">
          <a className="footer-link" href="#">
            Blog
          </a>
        </li>
        <li className="footer-item">
          <a className="footer-link" href="#">
            Contact Us
          </a>
        </li>
      </ul>

      <p className="footer-copyright">
        &copy; Bankify 2022 | All Rights Reserved
      </p>
    </footer>
  );
};

ReactDOM.render(<NavBar />, document.getElementById("root"));
