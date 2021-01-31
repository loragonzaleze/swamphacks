import React, { Component } from "react";
import Phaser from "phaser";
import {IonPhaser} from "@ion-phaser/react";

import "./PvE.css";

class PvE extends Component {
  player;
  isTurned = false;
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
            this.load.spritesheet('gatorWalkRight',"./walkv4.png", {frameWidth: 400, frameHeight: 400} )
            this.load.spritesheet('gatorWalkLeft',"./walk mirrorFinal.png", {frameWidth: 400, frameHeight: 330} )
            this.load.spritesheet('gatorWalkIdle',"./idlv4.png", {frameWidth: 400, frameHeight: 400})
            this.load.spritesheet('gatorWalkIdleMirror',"./idle mirror.png", {frameWidth: 400, frameHeight: 370})
            this.load.spritesheet('gatorCronch', "./bnitev4.png", {frameWidth: 400, frameHeight:400})
            this.load.spritesheet('gatorSwipe', "./swipev4.png", {frameWidth: 400, frameHeight:400})
            this.load.spritesheet('gatorBlock', "./blockv4.png",{frameWidth: 400, frameHeight: 400});
          },
          create:function() {
            this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
            this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
            this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
            this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
            this.keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
            this.keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);


            let windowWidth = window.innerWidth;
            let windowHeight = window.innerHeight;
            this.bg = this.add.image(windowWidth / 2, windowHeight / 2, 'marston');
            this.bg.setDisplaySize(windowWidth,  windowHeight);
            this.add.sprite(windowWidth / 2, windowHeight - 250, "ground");

            this.player = this.physics.add.sprite(160,windowHeight - 200, 'albert');
            this.player.body.setSize(180,350,0);

            this.player.setBounce(0.2);
            this.player.setCollideWorldBounds(true);


            this.anims.create({
              key: 'right',
              frames: this.anims.generateFrameNumbers('gatorWalkRight', { start: 0, end: 8 }),
              frameRate: 10,
              repeat: -1
            });
            this.anims.create({
              key: 'left',
              frames: this.anims.generateFrameNumbers('gatorWalkLeft', { start: 0, end: 8 }),
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
              key: 'idleMirror',
              frames: this.anims.generateFrameNumbers('gatorWalkIdleMirror', {start:0, end: 3}),
              frameRate: 3,
              repeat: -1
            })
            this.anims.create({
              key: 'cronch',
              frames: this.anims.generateFrameNumbers('gatorCronch', {start:0, end: 8}),
              frameRate: 10,
              repeat: 0
            })
            this.anims.create({
              key: 'swipe',
              frames: this.anims.generateFrameNumbers('gatorSwipe', {start:0, end: 3}),
              frameRate: 10,
              repeat: 0
            })
            this.anims.create({
              key: 'block',
              frames: this.anims.generateFrameNumbers('gatorBlock', {start:0, end: 4}),
              frameRate: 10,
              repeat: 0
            })




          },
          update:
            function() {
              if(this.keyD.isDown){
                this.player.body.setSize(180,350,false);
                this.player.x += 4;
                console.log("PRESSINg Right")
                this.player.anims.play('right', true);
                this.isTurned = false;

              }
              else if(this.keyA.isDown){
                this.player.x -= 4;
                console.log("PRESSINg Right")
                this.player.anims.play('left', true);
                this.isTurned = true;
                this.player.body.setSize(180,350,true);

              }
              else if(this.keyS.isDown){
                this.player.anims.play('block', true);
              }
              else if(this.keyW.isDown){
                this.player.y -= 4;
                console.log("PRESSINg Right")
              }
              else if(this.keyQ.isDown)
              {
                this.player.anims.play('cronch', true);
              }
              else if(this.keyE.isDown)
              {
                this.player.anims.play('swipe', true);
              }
              else
              {
                if(this.isTurned)
                {
                  this.player.anims.play('idleMirror',true);
                  this.player.body.setSize(180,350,true);
                }
                else
                {
                  this.player.body.setSize(180,350,false);
                  this.player.anims.play('idle',true);
                }
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
      <>
        <div className="healthbar" style={{ position: "absolute", width: "400px", height: "50px"
        }}>
        </div>
        <div className="health" style={{ position: "absolute", width: "300px", height: "50px"}}>
        </div>
        <IonPhaser game={game} initialize={initialize} style={{    marginBottom: "-4px",
          overflow: "hidden"}} />
          </>

    )
  }


}

export default PvE;