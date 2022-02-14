import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function NavBar() {
  return (
    <div>
      <NavMenu />
      <Hero />
      <Features />
      <CTA />
      <Footer/>
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
          <a className="nav-link" href="#section-1">
            Features
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#section-2">
            Operations
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#section-3">
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
      <button className="btn-text btn-scroll-to">Learn more</button>
    </div>
  );
};

const Features = () => {
  return (
    <div id="features">
      <div class="section-title">
        <h2 class="section-description">Features</h2>
        <h3 class="section-header">
          Everything you need in a modern bank and more.
        </h3>
      </div>
      <div class="features">
        <img
          src="img/digital-lazy.jpg"
          data-src="img/digital.jpg"
          alt="Computer"
          class="features-img lazy-img"
        />
        <div class="features-feature">
          <h5 class="features-header">100% digital bank</h5>
          <p>
            Do you hate the bank hassle, queue, and stress? We do too! This is
            why we have made it an 100% online banking. You can make all your
            transactions from your device at your convenience.
          </p>
        </div>

        <div class="features-feature">
          <h5 class="features-header">Control Your Spending</h5>
          <p>
            With bankify, you can choose a savings plan. With this, you can
            control how you spend and save up monthly, anually, weekly, or even
            daily. That's not all. You can also get up to 15% interest annually!
          </p>
        </div>
        <img
          src="img/grow-lazy.jpg"
          data-src="img/grow.jpg"
          alt="Plant"
          class="features-img lazy-img"
        />

        <img
          src="img/card-lazy.jpg"
          data-src="img/card.jpg"
          alt="Credit card"
          class="features-img lazy-img"
        />
        <div class="features-feature">
          <h5 class="features-header">Free debit card included</h5>
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
    <section class="section section-sign-up">
      <div class="section-title">
        <h3 class="section-header">
          What are you waiting for? Join Bankify today and get a welcome bonus
          of &#8358;1000
        </h3>
      </div>
      <button class="btn">Open your free account today!</button>
    </section>
  );
};

const Footer = () => {
  return (
    <footer class="footer">
      <ul class="footer-nav">
        <li class="footer-item">
          <a class="footer-link" href="#">
            About
          </a>
        </li>
        <li class="footer-item">
          <a class="footer-link" href="#">
            Pricing
          </a>
        </li>
        <li class="footer-item">
          <a class="footer-link" href="#">
            Terms of Use
          </a>
        </li>
        <li class="footer-item">
          <a class="footer-link" href="#">
            Privacy Policy
          </a>
        </li>
        <li class="footer-item">
          <a class="footer-link" href="#">
            Careers
          </a>
        </li>
        <li class="footer-item">
          <a class="footer-link" href="#">
            Blog
          </a>
        </li>
        <li class="footer-item">
          <a class="footer-link" href="#">
            Contact Us
          </a>
        </li>
      </ul>

      <p class="footer-copyright">
        &copy; Bankify 2022 | All Rights Reserved
      </p>
    </footer>
  );
}

ReactDOM.render(<NavBar />, document.getElementById("root"));
