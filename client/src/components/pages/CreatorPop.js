import React from 'react';
import "./CreatorPop.css";
import styled from "styled-components";


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

class CreatorPopup extends React.Component {
  render() {
    return (
      <div className='popup'>
        <div className='popup\_inner'>
          <h1>{this.props.text}</h1>
          <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}

export default Popup;