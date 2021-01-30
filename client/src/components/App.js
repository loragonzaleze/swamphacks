import React, { Component } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Skeleton from "./pages/Skeleton.js";

import "../utilities.css";
import HomePage from "./pages/HomePage";

/**
 * Define the "App" component as a class.
 */
class App extends Component {
  // makes props available in this component
  constructor(props) {
    super(props);
    this.state = {
      userId: undefined,
    };
  }

  componentDidMount() {
  }


  render() {
    return (
      <>
        <Router>
          <HomePage
            path="/"
            userId={this.state.userId}
          />


          <NotFound default />
        </Router>
      </>
    );
  }
}

export default App;
