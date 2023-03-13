import React from "react";
import CoffeeIcon from "../../assets/SVGs/CoffeeIcon";

import "./headerStyle.css";
const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" aria-current="page">
          <CoffeeIcon />
        </a>{" "}
        <a href="/">
          <span>FAQ</span>
        </a>
        <a href="/">
          <span data-v-7970f380="">
            Explore <span className="xxs:hidden">creators</span>
          </span>
        </a>
      </div>
      <div className="navbar-right">
        <a href="https://www.buymeacoffee.com/login" className="text-dark">
          Log in
        </a>{" "}
        <a
          href="https://www.buymeacoffee.com/signup"
          className="bg-yellow text-dark"
        >
          <span className="signUp">Sign up</span>
        </a>
      </div>
    </nav>
  );
};
export default Header;
