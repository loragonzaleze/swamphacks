import React, { Component } from "react";
import Phaser from "phaser";
import {IonPhaser} from "@ion-phaser/react";

class PvE extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialize: true,

      game: {
        physics: {
          arcade: {
            debug: true,
          }},
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
            this.load.image('marston', "./background2.png")
            this.load.image('albert', "./idle.png")
            this.load.image('ground', "./platform.png")
          },
          create:function() {
            this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
            this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
            this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
            this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

            let windowWidth = window.innerWidth;
            let windowHeight = window.innerHeight;
            this.bg = this.add.image(windowWidth / 2, windowHeight / 2, 'marston');
            this.bg.setDisplaySize(windowWidth, windowHeight);
            this.add.sprite(64, windowHeight-25, "ground");
            this.albert =this.physics.add.sprite(this.cameras.main.centerX,100, 'albert')




          },
          update:
            function() {
              if(this.keyD.isDown){
                this.albert.x += 4;
                console.log("PRESSINg Right")
              }
              if(this.keyA.isDown){
                this.albert.x -= 4;
                console.log("PRESSINg Right")
              }
              if(this.keyS.isDown){
                this.albert.y += 4;
                console.log("PRESSINg Right")
              }
              if(this.keyW.isDown){
                this.albert.y -= 4;
                console.log("PRESSINg Right")
              }

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