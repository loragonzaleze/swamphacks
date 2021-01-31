import React, { Component } from "react";
import Phaser from "phaser";
import {IonPhaser} from "@ion-phaser/react";

class PvE extends Component {
  player;
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
            this.load.image('marston', "./background2saturation.png")
            this.load.image('albert', "./walk1.png")
            this.load.image('ground', "./ground.png")
            this.load.spritesheet('gatorWalkRight',"./walkyslush.png", {frameWidth: 395, frameHeight: 330} )
            this.load.spritesheet('gatorWalkIdle',"./idle.png", {frameWidth: 400, frameHeight: 350})
            this.load.spritesheet('gatorCronch', "./cronch.png", {frameWidth: 395, frameHeight:330})
          },
          create:function() {
            this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
            this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
            this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
            this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
            this.keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);

            let windowWidth = window.innerWidth;
            let windowHeight = window.innerHeight;
            this.bg = this.add.image(windowWidth / 2, windowHeight / 2, 'marston');
            this.bg.setDisplaySize(windowWidth,  windowHeight);
            this.add.sprite(windowWidth / 2, windowHeight - 250, "ground");

            this.player = this.physics.add.sprite(160,windowHeight - 160, 'albert');
            this.player.body.setSize(180,350,0);

            this.player.setBounce(0.2);
            this.player.setCollideWorldBounds(true);


            this.anims.create({
              key: 'left',
              frames: this.anims.generateFrameNumbers('gatorWalkRight', { start: 0, end: 8 }),
              frameRate: 10,
              repeat: -1
            });
            this.anims.create({
              key: 'idle',
              frames: this.anims.generateFrameNumbers('gatorWalkIdle', {start:0, end: 3}),
              frameRate: 3,
              repeat: -1
            })
            this.anims.create({
              key: 'cronch',
              frames: this.anims.generateFrameNumbers('gatorCronch', {start:0, end: 8}),
              frameRate: 10,
              repeat: 1
            })


          },
          update:
            function() {
              if(this.keyD.isDown){
                this.player.x += 4;
                console.log("PRESSINg Right")
                this.player.anims.play('left', true);
              }
              else if(this.keyA.isDown){
                this.player.x -= 4;
                console.log("PRESSINg Right")

              }
              else if(this.keyS.isDown){
                this.player.y += 4;
                console.log("PRESSINg Right")
              }
              else if(this.keyW.isDown){
                this.player.y -= 4;
                console.log("PRESSINg Right")
              }
              else if(this.keyQ.isDown){
                this.player.anims.play('cronch',true);
              }
              else
              {
                this.player.anims.play('idle',true);
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