import React, { Component } from "react";

class HomePage extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    // remember -- api calls go here!
    this.setState({
      user:2
    })
  }

  render() {
    return (
      <div>
        This is a number
        {this.state.user}

      </div>

    );
  }
}

export default HomePage;