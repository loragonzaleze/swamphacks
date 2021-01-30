import React, { Component } from "react";
import { Router } from "@reach/router";

class PvP extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {};
  }
  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
      <Provider store={store}>
      <div
        style={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          height: '100vh'
        }}
      >
        <UI />
        <Game />
      </div>
      </Provider>

    );
  }
}

export default PvP;