import React from "react";
import "./Navbar.scss";
import logo from "../../logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="city tours logo" />
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/" className="active">
            Tours
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
