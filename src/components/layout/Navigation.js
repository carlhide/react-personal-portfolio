import React, { Component } from "react";
import StyleNavigation from "./Navigation.css";
import Logo from "../../resources/react-logo-1.png";
import { Link } from "react-router-dom";

import "../../App.js";

class Navigation extends Component {
  render() {
    return (
      <nav className="navigation" style={StyleNavigation}>
        <div className="the-logo">
          <img src={Logo} alt="hello" height="20%" width="20%" />
        </div>
        <ul className="nav-links">
          <Link to="/">
            <li> Home </li>
          </Link>
          <Link to="/about">
            <li> About </li>
          </Link>
          <Link to="/projects">
            <li> Projects </li>
          </Link>
          <Link to="/contact">
            <li> Contact </li>
          </Link>
          <Link to="/testing">
            <li> Testing </li>
          </Link>
        </ul>
      </nav>
    );
  }
}
export default Navigation;

/**
  <div id="crunchify-navbar" class="crunchify-container">
        <span id="crunchify-top-links">
        <ul class="nav-link-container">
          <li><a href="http://crunchify.com" target="_blank" class="nav-link">BLOG</a></li>
          <li><a href="http://crunchify.com/category/java-web-development-tutorial/" target="_blank" class="nav-link">JAVA CODE</a></li>
          <li><a href="http://crunchify.com/category/spring-mvc/" target="_blank" class="nav-link">SPRING MVC</a></li>
          <li><a href="https://crunchify.com/services/" target="_blank" class="nav-link">SERVICES</a></li>
          <li><a href="http://crunchify.com/contact/" target="_blank" class="nav-link">CONTACT</a></li>
        </ul></span>
      </div>
 */
