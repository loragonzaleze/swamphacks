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
            this.add.sprite(64, windowHeight-64, "ground");
          },
          update:
            function() {
            }
        }
      }
    }

  }

  _preload =() =>
  {
    this.cameras.main.setBackgroundColor('#24252A')
    this.load.image('sky', background)
    this.load.image('gator', gator)
    this.load.image('ground', platform)
  }
  _create =() =>
  {
    console.log("here")
    //this.game.physics.();
    this.add.sprite(0,0, 'sky')
    let platforms = this.game.adxd.group()
    platforms.enableBody = true

    let ground = platforms.create(0, this.game.world.height - 64, 'ground')
    ground.scale.setTo(2,2)
    ground.body.immovable = true

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
    console.log('Last')
    return (
      <IonPhaser game={game} initialize={initialize} style={{    marginBottom: "-4px",
        overflow: "hidden"}} />
    )
  }


}

export default PvE;