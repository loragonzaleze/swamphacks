import React from 'react';
import "./CreatorPop.css";
import styled from "styled-components";
import Bruce from "./assets/Bruce.gif";
import Edwin from "./assets/Edwin.gif";
import Connor from "./assets/Connor.gif";
import Samir from "./assets/Samir.gif";
import "./CreatorPop.css"

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

class CreatorPop extends React.Component {

  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <div className="popup-content2">
            <h1>Creators </h1>
          </div>
          <div className = "BigWrapper2">
            <div className = "P12">
              <img className = "Bruce" src ={Bruce} alt = "Bruce"/>
              <h2>Bruce Maddux</h2>
            </div>
            <div className= "P22">
              <img className = "Edwin" src ={Edwin} alt = "Edwin"/>
              <h2>Edwin Lora</h2>
            </div>
              <div className = "P3">
                <img className = "Connor" src ={Connor} alt = "Connor"/>
                <h2>Connor Syron</h2>
                </div>
                <div className = "P4">
                  <img className = "Samir" src ={Samir} alt = "Samir"/>
                  <h2>Samir Ziad</h2>
                  </div>
          </div>
          <Button className = "PopB2" onClick={this.props.closePopup}>close</Button>

        </div>
      </div>
    );
  }
}

export default CreatorPop;