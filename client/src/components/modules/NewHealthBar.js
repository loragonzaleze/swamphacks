import React, { Component } from "react";

class NewHealthBar extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {playerHealth: 100};
  }



  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    let class1 = "healthbar" + this.props.class1
    let class2 = "health" + this.props.class1

    return (
      <>
        <div id={"bar" + this.props.class1} className={class1} style={{ position: "absolute", width: "400px", height: "50px" }}>
        </div>
        <div id={"health" + this.props.class1} className={class2} style={{ position: "absolute", width: (this.state.playerHealth)*4, height: "50px"}}>
        </div>
      </>
    );
  }
}

export default NewHealthBar;
