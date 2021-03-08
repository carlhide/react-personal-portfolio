import React, { Component } from "react";
import Banner from "../../Banner";
import AboutStyle from "./About.css";
import { Link } from "react-router-dom";

export class About extends Component {
  render() {
    return (
      <div style={AboutStyle}>
        <Banner title={this.props.title} text={this.props.text} />
        <div className="content about">
          <h2>A little bit about me</h2>
          <p>
            My name is Carl and I work as an Automation Engineer in the industry
            sector.
            <br />
            <br />
            I also have a great interest in software development. My goal beside
            excelling in the automation field is to learn full stack
            development.
            <br />
            <br />
            Previously I've studied Java, algorithms and data structures. On my
            spare time I've been developing applications using JavaFX, FXML,
            Java11 and MySQL.
            <br />
            <br />
            Currently I'm working on mastering Javascript with the React.js
            library along with HTML and CSS. The reason for this is due to the
            fact that I personally think the future lies within Software as a
            Service and web-based applications.
            <br />
            <br />
            <button>
              <Link to="/contact">
                <li> Get in contact with me </li>
              </Link>
            </button>
          </p>
        </div>
      </div>
    );
  }
}
export default About;
