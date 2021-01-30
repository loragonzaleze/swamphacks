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
        physics: {
          default: "arcade",
          arcade: {
            debug: true
          }
        },
        scene: {

          init:
            function() {
              this.cameras.main.setBackgroundColor('#24252A')

            },
          preload: function() {
            console.log("first")
            this.load.image('sky', "./background.png")
            this.load.image('albert', "./idle.png")
            this.load.image('ground', "./platform.png")
          },
          create:function() {
            this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
            this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
            this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
            this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);



            this.sky = this.add.sprite(400,400, 'sky');
            this.platform = this.physics.add.sprite(100,100, 'ground').setImmovable();
            this.platform.setPosition(this.cameras.main.centerX, this.cameras.main.centerY + (this.cameras.main.centerY)/2);
            this.platform.enableBody = true;
            this.albert =this.physics.add.sprite(this.cameras.main.centerX,100, 'albert')
            this.albert.setDisplaySize(200, 200)
            this.physics.add.collider(this.albert, this.platform)
            this.albert.enableBody = true;
            this.albert.body.setGravity(0, 100);
            this.cursorKeys = this.input.keyboard.createCursorKeys()
            this.hitWall = false;

          },
          update:
            function() {
              this.physics.world.collide(this.albert, this.platform, function(){
                  if(this.hitWall){
                      return;
                  }
                  this.albert.y = this.albert.y;
                  this.hitWall = true;
              });

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