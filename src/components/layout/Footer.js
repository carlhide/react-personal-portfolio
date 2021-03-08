import FooterStyle from "./Footer.css";
import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div>
        <div style={FooterStyle} className="footer content">
          <div className="col">
            <h4>Contact</h4>
            <ul>
              <li>Facebook icon</li>
              <li>Linkedin icon</li>
              <li>Email icon</li>
            </ul>
          </div>
          <div className="col">
            <h4>Links</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Projects</li>
            </ul>
          </div>
          <div className="col">
            <h4>Projects</h4>
            <ul>
              <li>One</li>
              <li>Two</li>
              <li>Three</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
