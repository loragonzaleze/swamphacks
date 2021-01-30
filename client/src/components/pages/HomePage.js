import React, { Component } from "react";
import background from './assets/maxresdefault.jpg'
import SettingsIcon from './assets/settings-solid.png'
import "./HomePage.css"
import "react-awesome-button/dist/styles.css";


class HomePage extends Component {
  fixed;
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
  myfunction()
  {
    console.log("CLICKED");
  }

  render() {
    return (
      <div className="homepage-base" style={{ backgroundImage: `url(${background})` }}>
        <div className = "title">
          Rumble in the Swamp!
        </div>

      </div>
    );
  }
}

export default HomePage;