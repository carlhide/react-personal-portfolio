import React, { Component } from "react";
import Navigation from "./components/layout/Navigation";
import Style from "./styles/App.css";
import About from "./components/layout/pages/About";
import Home from "./components/layout/pages/Home";
import Projects from "./components/layout/pages/Projects";
import Contact from "./components/layout/pages/Contact";
import Footer from './components/layout/Footer';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.js";

class App extends Component {
  render() {
    const banners = {
      home: {
        title: "Home",
        text: "This is the Home page",
      },
      about: {
        title: "About",
        text: "If you are interested, read about me and my experience",
      },
      projects: {
        title: "Projects",
        text: "This is the Projects page",
      },
      contact: {
        title: "Contact",
        text: "I don't know, maybe you want to contact me",
      },
    };

    return (
      <Router>
        <div style={Style} className="vertical-layout">
          <div className="navigation">
            <Navigation />
          </div>
          <div className="contents">
            <div className="horizontal-layout">
              <div className="left"></div>
              <div className="center">
                <Switch>
                  <Route path="/" exact>
                    <Home title={banners.home.title} text={banners.home.text} />
                  </Route>
                  <Route path="/about">
                    <About
                      title={banners.about.title}
                      text={banners.about.text}
                    />
                  </Route>
                  <Route path="/projects">
                    <Projects
                      title={banners.projects.title}
                      text={banners.projects.text}
                    />
                  </Route>
                  <Route path="/contact">
                    <Contact
                      title={banners.contact.title}
                      text={banners.contact.text}
                    />
                  </Route>
                </Switch>
              </div>
              <div className="right"></div>
            </div>
          </div>
          <div className="foot">
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
