import React, { Component } from "react";
import background from './assets/benhill.png'
import title from './assets/rits.png'
import AlbertChomp from './assets/bite2.gif'
import BertoChomp from './assets/bite2inverted.gif'
import Popup from './PopUp';
import "./HomePage.css"
import styled from 'styled-components';
import { navigate } from "@reach/router";
//import HomeMusic from './assets/HomeMusic.mp3';


const theme = {
  blue: {
    default: 'blue'
  }

}
const Button = styled.button `
  background-color: ${props => theme[props.theme].default};
  width: 150px;
  height: 50px;
  color: white;
  padding: 10px 15px;
  border: 6px solid orange;
  outline-width: 0;
  text-transform: uppercase;
  cursor: pointer;
  `
Button.defaultProps = {
  theme: 'blue'
}

class HomePage extends Component {
  fixed;
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = { showPopup: false };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  componentDidMount() {

  }

  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.play();
    audioEl.loop = true;
  }



  render() {
    return (
      <div className="homepage-base" style={{ backgroundImage: `url(${background})` }}>
        <img className = "title-base" src ={title} alt = "title"/>
        <img className = "AlbertChomp" src ={AlbertChomp} alt = "AlbertChomp"/>
        <img className = "BertoChomp" src ={BertoChomp} alt = "BertoChomp"/>
        <Button  onClick={() => {navigate("/PvE")}} className = "PButton">
            Play
          </Button>
          <Button onClick={this.togglePopup.bind(this)} className = "HButton">
            How To
          </Button>
        {this.state.showPopup ?
          <Popup
            closePopup={this.togglePopup.bind(this)}
          />
          : ""
        }
        <Button onClick={this.togglePopup.bind(this)} className = "Creators">
          Creators
        </Button>
        {this.state.showPopup ?
          <Popup
            closePopup={this.togglePopup.bind(this)}
          />
          : ""
        }

        <audio className="audio-element" >
          <source src = "./assets/HomeMusic.mp3"/>
        </audio>
      </div>
    );
  }
}

export default HomePage;