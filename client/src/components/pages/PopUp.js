import React from 'react';
import "./PopUp.css";
import styled from "styled-components";
import Arrow from "./assets/ArrowKeys.png";
import WASD from "./assets/WASD.png";
import Q from "./assets/Q.png";
import E from "./assets/E.png";
import Spacebar from "./assets/Spacebar.png";


const Button = styled.button `
  background-color: blue;
  width: 150px;
  height: 50px;
  color: white;
  padding: 10px 15px;
  border: 6px solid orange;
  outline-width: 0;
  text-transform: uppercase;
  cursor: pointer;
  `

class Popup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <div className="popup-content">
            <h1>How to Play</h1>
          </div>
          <div className = "BigWrapper">
          <div className = "P1">
            <p>Player 1</p>
            <img className = "ArrowKeys" src ={Arrow} alt = "ArrowKeys"/>
            <p>Claw Attack</p>
            <img className = "Spacebar" src ={Spacebar} alt = "Spacebar"/>
          </div>
          <div className= "P2">
            <p>Player 2</p>
            <img className = "WASD" src ={WASD} alt = "WASD"/>
            <p>Claw Attack</p>
            <img className = "Q" src ={Q} alt = "Q"/>
            <p>Chomp</p>
            <img className = "E" src ={E} alt = "E"/>
          </div>
            </div>
          <Button className = "PopB" onClick={this.props.closePopup}>close</Button>
        </div>
      </div>
    );
  }
}

export default Popup;