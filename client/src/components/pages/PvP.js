import React, { Component } from "react";
import Phaser from "phaser";
import {IonPhaser} from "@ion-phaser/react";

class PvP extends Component {
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
            let keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
            let keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
            let keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
            let keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);



            this.sky = this.add.sprite(400,400, 'sky');
            this.add.sprite(100,100, 'ground');
            this.albert =this.add.sprite(300,100, 'albert')
            this.albert.setDisplaySize(200, 200)
            this.cursorKeys = this.input.keyboard.createCursorKeys()


          },
          update:
            function() {
              if(this.cursorKeys.right.isDown){
                this.albert.x += 4;
                console.log("PRESSINg Right")
              }
            }
        }
      }
    }

  }


  _update =() =>
  {

  }

// function() {
//   this.helloWorld = this.add.text(
//     this.cameras.main.centerX,
//     this.cameras.main.centerY,
//     "Hello World", {
//       font: "40px Arial",
//       fill: "#ffffff"
//     }
//   );
//   this.helloWorld.setOrigin(0.5);
// },

  componentDidMount() {
    // this.gamePvE = new Phaser.Game({
    //   type: Phaser.AUTO,
    //   width: 800,
    //   height: 600,
    //   parent: "gameId",
    //   scene: {
    //     preload: this._preload,
    //     create: this._create,
    //     update: this._update
    //   }
    // })
  }

  render() {
    const { initialize, game } = this.state
    return (
      <IonPhaser game={game} initialize={initialize} />
    )
  }


}

export default PvP;