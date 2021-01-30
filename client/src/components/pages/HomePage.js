import React, { Component } from "react";
import background from './assets/maxresdefault.jpg'
import SettingsIcon from './assets/settings-solid.png'
import "./HomePage.css"
import {AwesomeButton} from "react-awesome-button";
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

  render() {
    return (
      <div className="homepage-base" style={{ backgroundImage: `url(${background})` }}>
        <div className = "title">
          Rumble in the Swamp!
        </div>

        <AwesomeButton  type="primary"
                        style = {{position:this.fixed, left: 680, top: 300}}
                       onPress={() =>
                       {}
                       }
        >Play</AwesomeButton>
        <AwesomeButton type="primary"
                        style = {{position:this.fixed, left: 0, top: 400, backgroundImage: `url(${SettingsIcon})`}}
                        onPress={() =>
                        {}
                        }
        > </AwesomeButton>

        <AwesomeButton type="primary"
                              style = {{position:this.fixed, left: 1050, top: 400 }}
                              onPress={() =>
                              {}
                              }
        >?</AwesomeButton>
      </div>
    );
  }
}

export default HomePage;