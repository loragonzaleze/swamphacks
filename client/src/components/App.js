import React, { Component } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import PvP from "./pages/PvP.js";
import HomePage from "./pages/HomePage.js";
import PvE from "./pages/PvE.js";

import "../utilities.css";

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
          <PvP
            path="/game"
            userId={this.state.userId}
          />
          <PvE
            path="/PvE"
            userId={this.state.userId}
          />

          <NotFound default />
        </Router>
      </>
    );
  }
}

export default App;
