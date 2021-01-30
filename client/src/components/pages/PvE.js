import React, { Component } from "react";
import Phaser from "phaser";
import {IonPhaser} from "@ion-phaser/react";

class PvE extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialize: true,
      game: {
        width: "100%",
        height: "100%",
        type: Phaser.AUTO,
        scene: {
          init:
            function() {
              this.cameras.main.setBackgroundColor('#24252A')

            },
          preload: function() {
            console.log("first")
            this.load.image('sky', "./background.png")
            this.load.image('albert', "./Albert1.png")
            this.load.image('ground', "./platform.png")
          },
          create:function() {
            console.log("here")
            let windowWidth = window.innerWidth;
            let windowHeight = window.innerHeight;
            this.bg = this.add.image(windowWidth / 2, windowHeight / 2, 'sky');
            this.bg.setDisplaySize(windowWidth, windowHeight);
            this.add.sprite(64, windowHeight-25, "ground");
          },
          update:
            function() {
            }
        }
      }
    }

  }


  render() {
    const { initialize, game } = this.state
    console.log('Last')
    return (
      <IonPhaser game={game} initialize={initialize} style={{    marginBottom: "-4px",
        overflow: "hidden"}} />
    )
  }


}

export default PvE;