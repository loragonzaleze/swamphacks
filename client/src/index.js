import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import Phaser from"phaser";
//import logoImg from "./components/pages/assets/logo.png"

/*const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create
  }
};
const game = new Phaser.Game(config);
// renders React Component "Root" into the DOM element with ID "root"
function preload() {
  this.load.image("logo", logoImg);
}
function create() {
  const logo = this.add.image(400, 150, "logo");
  this.tweens.add({
    targets: logo,
    y: 450,
    duration: 2000,
    ease: "Power2",
    yoyo: true,
    loop: -1
  });
}*/
ReactDOM.render(<App />, document.getElementById("root"));

// allows for live updating
module.hot.accept();
