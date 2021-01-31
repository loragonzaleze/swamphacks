import React, { Component } from "react";
import background from './assets/benhill.png'
import title from './assets/rits.png'
import AlbertChomp from './assets/bite2.gif'
import BertoChomp from './assets/bite2inverted.gif'
import Popup from './PopUp';
import AlbertTitle from './assets/albert.png'
import BertoTitle from './assets/invertbert.png';
import "./HomePage.css"
import styled from 'styled-components';
import { navigate } from "@reach/router";
import CreatorPop from "./CreatorPop";
//import HomeMusic from './assets/HomeMusic.mp3';


const theme = {
  blue: {
    default: 'blue'
  }

}
let Button = styled.button `
  background-color: ${props => theme[props.theme].default};
  width: 10%;
  height: 50px;
  color: white;
  padding: 10px 15px;
  border: 6px solid orange;
  outline-width: 0;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 1vw;
  `
Button.defaultProps = {
  theme: 'blue'
}

class HomePage extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = { showPopup: false, showPopup2: false };
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  togglePopup2()
  {
    this.setState({
      showPopup2: !this.state.showPopup2
    });
  }

  componentDidMount() {

  }



  render() {
    return (
      <div className="homepage-base" style={{ backgroundImage: `url(${background})` }}>
        <div className= "container3">
        <img className = "title-base" src ={title} alt = "title"/>
        </div>
        <Button  onClick={() => {navigate("/PvPBruce")}} className = "PButton">
          Play
        </Button>
        <div className = "container1">
        <img className = "AlbertChomp" src ={AlbertChomp} alt = "AlbertChomp"/>
        <img className = "AlbertTitle" src ={AlbertTitle} alt = "AlbertTitle"/>
        </div>
        <div className = "container2">
        <img className = "BertoChomp" src ={BertoChomp} alt = "BertoChomp"/>
        <img className = "BertoTitle" src ={BertoTitle} alt = "BertoTitle"/>
        </div>
        <Button onClick={this.togglePopup2.bind(this)} className = "Creators">
          Creators
        </Button>
        {this.state.showPopup2 ?
          <CreatorPop
            closePopup={this.togglePopup2.bind(this)}
          />
          : ""
        }
        <Button onClick = {this.togglePopup.bind(this)} className = "HButton">
          How To
        </Button>
        {this.state.showPopup ?
          <Popup
            closePopup={this.togglePopup.bind(this)}
          />
          : ""
        }
      </div>
    );
  }
}

export default HomePage;