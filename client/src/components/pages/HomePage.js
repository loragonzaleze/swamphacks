import React, { Component } from "react";
import background from './assets/background image.jpg'
import "./HomePage.css"


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
      <div className="homepage-base" style={{ backgroundImage: `url(${background})` }}>
        <div className = "title">
          Rumble in the Swamp!
        </div>
        <div >

        </div>




      </div>

    );
  }
}

export default HomePage;