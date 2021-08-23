import "./App.css";
import { Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Blogs from "./blogs/Blogs";
import Home from "./home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar className="nav">
          <LinkContainer to="/">
            <Navbar.Brand className="navbrand">Y/N</Navbar.Brand>
          </LinkContainer>

          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end "
          >
            <Link
            className="nav_link"
              to="/projects"
              style={{
                color: "#F86271",
                marginRight: "18px",
                marginLeft: "18px",
              }}
            >
              Projects
            </Link>
            <Link
            className="nav_link"
              to="/blogs"
              style={{
                color: "#F86271",
                marginRight: "24px",
                marginLeft: "18px",
              }}
            >
              Blogs
            </Link>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/projects"></Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
