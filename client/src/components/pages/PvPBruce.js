import React, { Component } from "react";
import Phaser from "phaser";
import {IonPhaser} from "@ion-phaser/react";
import NewHealthBar from "../modules/NewHealthBar"

import "./PvE.css";
import { navigate } from "@reach/router";
let player1on2 = false
let player2on1 = false

let player1Health = 100;
let player2Health = 100;

let winner = null;

class PvE extends Component {
  player;
  player2;
  isTurnedP1 = false;
  isTurnedP2 = false;
  isPushedP1 = false;
  isPushedP2 = false;
  platform;
  // doDamage = (player, dmg) => {
  //   if(player === "player1") {
  //
  //   } else {
  //     this.state.player2Health -= dmg
  //     if(this.state.player2Health <= 0) {
  //       winner = "player2"
  //     }
  //   }
  // }

  constructor(props) {
    super(props);

    this.state = {
      player1Health: 100,
      player2Health: 100
    }

    this.bait= {
      initialize: true,
      game: {

      }
    }

  }

  componentDidMount() {

    this.bait = {
      initialize: true,
      game: {
        width: "100%",
        height: "100%",
        type: Phaser.AUTO,
        physics: {
          default: "arcade",
          arcade: {
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
            this.load.image('invertedAlbert', "./walk1invert.png")
            this.load.image('ground', "./ground.png")
            this.load.image('platform', "./ground2.png")
            this.load.image('covid', "./corona.png")

            this.load.spritesheet('gatorWalkRight',"./walkv4.png", {frameWidth: 400, frameHeight: 400} )
            this.load.spritesheet('gatorWalkLeft',"./walkmirrorr.png", {frameWidth: 400, frameHeight: 400} )

            this.load.spritesheet('gatorWalkIdle',"./idlv4.png", {frameWidth: 400, frameHeight: 400})
            this.load.spritesheet('gatorWalkIdleMirror',"./idlemirror.png", {frameWidth: 400, frameHeight: 400})

            this.load.spritesheet('gatorCronch', "./bnitev4.png", {frameWidth: 400, frameHeight:400})
            this.load.spritesheet('gatorCronchMirror', "./chompmirror.png",{frameWidth: 400, frameHeight: 400})

            this.load.spritesheet('gatorSwipe', "./swipev4.png", {frameWidth: 400, frameHeight:400})
            this.load.spritesheet('gatorSwipeMirror', "./swipeMirror.png",{frameWidth: 400, frameHeight: 400});

            this.load.spritesheet('gatorBlock', "./blockv4.png",{frameWidth: 400, frameHeight: 400})
            this.load.spritesheet('gatorBlockMirror', "./blocokedlong mirror.png",{frameWidth: 400, frameHeight: 400})

            this.load.spritesheet('gatorJump', "./jumpvf.png",{frameWidth: 400, frameHeight: 400})
            this.load.spritesheet('gatorJumpMirror', "./jumpmirror.png",{frameWidth: 400, frameHeight: 400})

            this.load.spritesheet('gatorDamage', "./hurtv4.png", {frameWidth: 400, frameHeight: 400})
            this.load.spritesheet('gatorDamageMirror', "./damadgemirror.png", {frameWidth: 400, frameHeight: 400})





//INVERTED GATOR
            this.load.spritesheet('invertedGatorWalkRight',"./walkinverted.png", {frameWidth: 400, frameHeight: 400} )
            this.load.spritesheet('invertedGatorWalkLeft',"./walkmirrorinverted.png", {frameWidth: 400, frameHeight: 400} )

            this.load.spritesheet('invertedGatorWalkIdle',"./idleinverted.png", {frameWidth: 400, frameHeight: 400})
            this.load.spritesheet('invertedGatorWalkIdleMirror',"./idlemirrorinverted.png", {frameWidth: 400, frameHeight: 400})

            this.load.spritesheet('invertedGatorCronch', "./biteinverted.png", {frameWidth: 400, frameHeight:400})
            this.load.spritesheet('invertedGatorCronchMirror', "./bitemirrorinverted.png",{frameWidth: 400, frameHeight: 400})

            this.load.spritesheet('invertedGatorSwipe', "./swipeinverted.png", {frameWidth: 400, frameHeight:400})
            this.load.spritesheet('invertedGatorSwipeMirror', "./swipemirrorinverted.png",{frameWidth: 400, frameHeight: 400});

            this.load.spritesheet('invertedGatorBlock', "./blockinverted.png",{frameWidth: 400, frameHeight: 400})
            this.load.spritesheet('invertedGatorBlockMirror', "./blockmirrorinverted.png",{frameWidth: 400, frameHeight: 400})

            this.load.spritesheet('invertedGatorJump', "./jumpinverted.png",{frameWidth: 400, frameHeight: 400})
            this.load.spritesheet('invertedGatorJumpMirror', "./mirrorinvertedjump.png",{frameWidth: 400, frameHeight: 400})

            this.load.spritesheet('invertedGatorDamage', "./damdgeinverted.png",{frameWidth: 400, frameHeight: 400})
            this.load.spritesheet('invertedGatorDamageMirror', "./damadgemirrorinverted.png",{frameWidth: 400, frameHeight: 400})


          },
          create:function() {
            this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
            this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
            this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
            this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
            this.keyQ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q);
            this.keyE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E);
            this.keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
            this.keyENTER = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);



            this.cursors = this.input.keyboard.createCursorKeys();

            let windowWidth = window.innerWidth;
            let windowHeight = window.innerHeight;
            this.platform = this.physics.add.staticGroup();
            this.bg = this.add.image(windowWidth / 2, windowHeight / 2, 'marston');
            this.bg.setDisplaySize(windowWidth,  windowHeight);
            this.add.sprite(windowWidth / 2, windowHeight - 250, "ground");

            this.player = this.physics.add.sprite(160,windowHeight - 250, 'albert');
            this.player2 = this.physics.add.sprite(windowWidth - 160,windowHeight - 250, 'invertedAlbert');


            this.player.setBounce(0.2);
            this.player.setCollideWorldBounds(true);

            this.player2.setBounce(0.2);
            this.player2.setCollideWorldBounds(true);

            this.player.body.setGravity(0, 600);
            this.player2.body.setGravity(0, 600);

            this.platform.create(windowWidth/2, windowHeight - 50, 'platform');

            this.physics.add.collider(this.player,this.platform);
            this.physics.add.collider(this.player2, this.platform);
            this.physics.add.collider(this.player, this.player2);


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
              key: 'cronchMirror',
              frames: this.anims.generateFrameNumbers('gatorCronchMirror', {start:0, end: 8}),
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
              key: 'swipeMirror',
              frames: this.anims.generateFrameNumbers('gatorSwipeMirror', {start:0, end: 3}),
              frameRate: 10,
              repeat: 0
            })
            this.anims.create({
              key: 'block',
              frames: this.anims.generateFrameNumbers('gatorBlock', {start:0, end: 7}),
              frameRate: 10,
              repeat: 0
            })
            this.anims.create({
              key: 'blockMirror',
              frames: this.anims.generateFrameNumbers('gatorBlockMirror', {start:0, end: 7}),
              frameRate: 10,
              repeat: 0
            })
            this.anims.create({
              key: 'jump',
              frames: this.anims.generateFrameNumbers('gatorJump', {start:0, end: 4}),
              frameRate: 10,
              repeat: 0
            })
            this.anims.create({
              key: 'jumpMirror',
              frames: this.anims.generateFrameNumbers('gatorJumpMirror', {start:0, end: 4}),
              frameRate: 10,
              repeat: 0
            })
            this.anims.create({
              key: 'damage',
              frames: this.anims.generateFrameNumbers('gatorDamage', {start:0, end: 5}),
              frameRate: 10,
              repeat: 0
            })
            this.anims.create({
              key: 'damageMirror',
              frames: this.anims.generateFrameNumbers('gatorDamageMirror', {start:0, end: 5}),
              frameRate: 10,
              repeat: 0
            })

            //ATTACK NORMAL GATOR

            this.anims.create({
              key: 'rightInverted',
              frames: this.anims.generateFrameNumbers('invertedGatorWalkRight', { start: 0, end: 8 }),
              frameRate: 10,
              repeat: -1
            });
            this.anims.create({
              key: 'leftInverted',
              frames: this.anims.generateFrameNumbers('invertedGatorWalkLeft', { start: 0, end: 8 }),
              frameRate: 10,
              repeat: -1
            });
            this.anims.create({
              key: 'idleInverted',
              frames: this.anims.generateFrameNumbers('invertedGatorWalkIdle', {start:0, end: 3}),
              frameRate: 3,
              repeat: -1
            })
            this.anims.create({
              key: 'idleMirrorInverted',
              frames: this.anims.generateFrameNumbers('invertedGatorWalkIdleMirror', {start:0, end: 3}),
              frameRate: 3,
              repeat: -1
            })
            this.anims.create({
              key: 'cronchInverted',
              frames: this.anims.generateFrameNumbers('invertedGatorCronch', {start:0, end: 8}),
              frameRate: 10,
              repeat: 0
            })
            this.anims.create({
              key: 'cronchMirrorInverted',
              frames: this.anims.generateFrameNumbers('invertedGatorCronchMirror', {start:0, end: 8}),
              frameRate: 10,
              repeat: 0
            })
            this.anims.create({
              key: 'swipeInverted',
              frames: this.anims.generateFrameNumbers('invertedGatorSwipe', {start:0, end: 3}),
              frameRate: 10,
              repeat: 0
            })
            this.anims.create({
              key: 'swipeMirrorInverted',
              frames: this.anims.generateFrameNumbers('invertedGatorSwipeMirror', {start:0, end: 3}),
              frameRate: 10,
              repeat: 0
            })
            this.anims.create({
              key: 'blockInverted',
              frames: this.anims.generateFrameNumbers('invertedGatorBlock', {start:0, end: 7}),
              frameRate: 10,
              repeat: 0
            })
            this.anims.create({
              key: 'blockMirrorInverted',
              frames: this.anims.generateFrameNumbers('invertedGatorBlockMirror', {start:0, end: 7}),
              frameRate: 10,
              repeat: 0
            })
            this.anims.create({
              key: 'jumpInverted',
              frames: this.anims.generateFrameNumbers('invertedGatorJump', {start:0, end: 4}),
              frameRate: 10,
              repeat: 0
            })
            this.anims.create({
              key: 'jumpMirrorInverted',
              frames: this.anims.generateFrameNumbers('invertedGatorJumpMirror', {start:0, end: 4}),
              frameRate: 10,
              repeat: 0
            })
            this.anims.create({
              key: 'damageInverted',
              frames: this.anims.generateFrameNumbers('invertedGatorDamage', {start:0, end: 5}),
              frameRate: 10,
              repeat: 0
            })
            this.anims.create({
              key: 'damageMirrorInverted',
              frames: this.anims.generateFrameNumbers('invertedGatorDamageMirror', {start:0, end: 5}),
              frameRate: 10,
              repeat: 0
            })
            /** STUFF FOR ATTACK**/


            //SHIELD
            this.shield1 = false;
            this.freeze1 = false;

            //SHIELD P2
            this.shield2 = false


            this.initTime = this.game.getTime();

            //ATTACK P1
            this.contact = false;
            this.attack1 = false
            this.attack2 = false

            //ATTACK P2
            this.contact2 = false
            this.attack3 = false
            this.attack4 = false


            /**Creates an overlay**/
            this.physics.add.overlap(this.player, this.player2, function(){
              player1on2 = true
              player2on1 = true
            })

            /**ENDING ATTACK**/
          },



          update:
            function() {
              if(this.isPushedP2 == true)
              {
                if(this.player2.body.touching.down)
                {
                  this.player2.setVelocityX(0);
                  this.isPushedP2 = false;
                }
              }
              if(this.isPushedP1 == true)
              {
                if(this.player.body.touching.down)
                {
                  this.player.setVelocityX(0);
                  this.isPushedP1 = false;
                }
              }

              if(this.keyD.isDown && !this.shield1){
                this.player.x += 7;
                this.player.anims.play('right', true);
                this.isTurnedP1 = false;

              }
              else if(this.keyA.isDown && !this.shield1){
                this.player.x -= 7;
                this.player.anims.play('left', true);
                this.isTurnedP1 = true;

              }
              else if(this.keyS.isDown) {
                if (this.isTurnedP1 && !this.shield1)
                {
                  this.player.anims.play('blockMirror', false);
                } else if(!this.isTurnedP1 && !this.shield1){
                  this.player.anims.play('block', false);
                }
                this.shield1 = true
              }
              else if(this.keyS.isUp && this.shield1){
                this.shield1 = false
              }
              else if(this.keyW.isDown && this.player.body.touching.down){
                if (this.isTurnedP1)
                {
                  this.player.anims.play('jumpMirror', true);

                }
                else {
                  this.player.anims.play('jump', true);
                }
                this.player.setVelocityY(-500);

              }
              else if(this.keyQ.isDown)
              {
                this.player.body.setSize(300, 400)
                if(this.isTurnedP1)
                {//SWIPE STUFF
                  if(player2on1){
                    this.initTime = this.game.getTime();
                    this.attack1 = true;
                    this.contact = true;
                    //this.player.body.setSize(300, 400)
                  }
                  this.player.anims.play('cronchMirror',true);
                }
                else
                {
                  if(player2on1){
                    this.initTime = this.game.getTime();
                    this.attack1 = true;
                    this.contact = true;
                  }
                  this.player.anims.play('cronch',true);
                  //  this.player.body.setSize(180,400,true);
                }
              }
              else if(this.keyQ.isUp && this.contact && this.attack1){
                if(!this.shield2){
                  if(this.game.getTime() - this.initTime > 20){
                    this.attack1 = false
                    //this.doDamage("player2", 20);
                    let b = Math.floor(document.getElementById("health2").offsetWidth / 4)
                    console.log(b)
                    if(4* b - 20 <= 0) {
                      winner = "player2"
                      alert("Player 1 wins!")
                      navigate("/")
                    }
                    document.getElementById("health2").style.width = "" + 4*b - 20 + "px"
                    //this.forceUpdate()
                    this.contact = false
                    player1on2 = false
                    player2on1 = false
                    console.log("ATTACK STATUS: ", this.attack1)
                    // this.player.body.setSize(180,400,true);
                    if(this.isTurnedP1){
                      this.isPushedP2 = true;
                      this.player2.setVelocityX(-300);
                      this.player2.setVelocityY(-400);
                    }
                    else{
                      this.isPushedP2 = true;
                      this.player2.setVelocityX(300);
                      this.player2.setVelocityY(-400);
                    }
                  }
                }
                else{
                  this.attack1 = false
                  this.contact = false
                  player1on2 = false
                  player2on1 = false
                }
              }
              else if(this.keyE.isDown)
              {
                this.player.body.setSize(300, 400)

                if(this.isTurnedP1)
                {//SWIPE STUFF
                  if(player2on1){
                    this.initTime = this.game.getTime();
                    this.attack2 = true;
                    this.contact = true;
                    this.player.body.setSize(300, 400)
                  }
                  this.player.anims.play('swipeMirror',true);
                }

                else
                {
                  if(player2on1){
                    this.initTime = this.game.getTime();
                    this.attack2 = true;
                    this.contact = true;
                    this.player.body.setSize(300, 400)
                  }
                  this.player.anims.play('swipe', true);
                }
              }
              else if(this.keyE.isUp && this.contact && this.attack2){
                if(!this.shield2){
                  if(this.game.getTime() - this.initTime > 20){
                    this.attack2 = false
                    this.contact = false
                    player1on2 = false
                    player2on1 = false
                    //this.doDamage("player2", 10);

                    let b = Math.floor(document.getElementById("health2").offsetWidth / 4)
                    console.log(b)
                    if(4*b - 10 <= 0) {
                      winner = "player1"
                      alert("Player 1 wins!")
                      navigate("/")
                    }
                    document.getElementById("health2").style.width = "" + 4*b - 10 + "px"
                    //this.setState({player2Health: this.state.player2Health - 10})

                    //player2Health -= 10
                    //this.forceUpdate()
                    this.player.body.setSize(180,400,true);
                    if(this.isTurnedP1){
                      this.player2.x -= 120;
                    }
                    else{
                      this.player2.x += 130;
                    }
                  }
                }
                else{
                  this.attack2 = false
                  this.contact = false
                  player1on2 = false
                  player2on1 = false
                }

              }
              else
              {
                if(this.isTurnedP1)
                {
                  this.player.body.setSize(180,400,true);
                  this.player.anims.play('idleMirror',true);
                }
                else
                {
                  this.player.body.setSize(180,400,true);
                  this.player.anims.play('idle',true);
                }
              }



              if(this.cursors.left.isDown)
              {
                this.player2.x -= 7;
                this.player2.anims.play('leftInverted', true);
                this.isTurnedP2 = true;
              }
              else if(this.cursors.right.isDown)
              {
                this.player2.x += 7;
                this.player2.anims.play('rightInverted', true);
                this.isTurnedP2 = false;
              }
              else if(this.cursors.down.isDown) {
                if (this.isTurnedP2 && !this.shield2)
                {
                  this.player2.anims.play('blockMirrorInverted', true);
                } else if(!this.isTurnedP2 && !this.shield2){
                  this.player2.anims.play('blockInverted', true);
                }
                this.shield2 = true
              }
              else if(this.cursors.down.isUp && this.shield2){
                this.shield2 = false;
              }
              else if(this.cursors.up.isDown && this.player2.body.touching.down){
                if (this.isTurnedP2)
                {
                  this.player2.anims.play('jumpMirrorInverted', true);

                }
                else {
                  this.player2.anims.play('jumpInverted', true);
                }
                this.player2.setVelocityY(-500);
              }
              else if(this.keySPACE.isDown)
              {
                this.player2.body.setSize(300, 400)
                if (this.isTurnedP2)
                {
                  if(player1on2){
                    this.initTime = this.game.getTime();
                    this.attack4 = true
                    this.contact2 = true
                  }
                  this.player2.anims.play('cronchMirrorInverted', true);
                }
                else {
                  if(player2on1){
                    this.initTime = this.game.getTime();
                    this.attack4 = true
                    this.contact2 = true
                  }
                  this.player2.anims.play('cronchInverted', true);
                }
              }
              else if(this.keySPACE.isUp && this.contact2 && this.attack4){
                if(!this.shield1){
                  this.attack4 = false;
                  this.contact2 = false;
                  player1on2 = false
                  player2on1 = false
                  //this.doDamage("player1", 20);
                  let b = Math.floor(document.getElementById("health1").offsetWidth / 4)
                  console.log(b)
                  if(4* b - 20 <= 0) {
                    winner = "player1"
                    alert("Player 2 wins!")
                    navigate("/")
                  }
                  document.getElementById("health1").style.width = "" + 4*b - 20 + "px"

                  //this.forceUpdate()
                  if(this.isTurnedP2){
                    this.isPushedP1 = true;
                    this.player.setVelocityX(-300);
                    this.player.setVelocityY(-400);
                  }
                  else{
                    this.isPushedP1 = true;
                    this.player.setVelocityX(300);
                    this.player.setVelocityY(-400);
                  }
                }
                else{
                  this.attack4 = false;
                  this.contact2 = false;
                  player1on2 = false
                  player2on1 = false
                }
              }
              else if(this.keyENTER.isDown)
              {
                this.player2.body.setSize(300, 400)
                if(this.isTurnedP2)
                {//SWIPE STUFF P2
                  if(player1on2){
                    this.initTime = this.game.getTime();
                    this.attack3 = true;
                    this.contact2 = true;
                    this.player2.body.setSize(300, 400)
                  }
                  this.player2.anims.play('swipeMirrorInverted',true);
                }

                else
                {
                  if(player1on2){
                    this.initTime = this.game.getTime();
                    this.attack3 = true;
                    this.contact2 = true;
                    this.player2.body.setSize(300, 400)
                  }
                  this.player2.anims.play('swipeInverted', true);
                }
              }
              else if(this.keyENTER.isUp && this.contact2 && this.attack3){
                if(!this.shield1){
                  if(this.game.getTime() - this.initTime > 20){
                    this.attack3 = false
                    this.contact2 = false
                    //this.doDamage("player1", 10);
                    let b = Math.floor(document.getElementById("health1").offsetWidth / 4)
                    console.log(b)
                    if(4*b - 10 <= 0) {
                      winner = "player1"
                      alert("Player 2 wins!")
                      navigate("/")
                    }
                    document.getElementById("health1").style.width = "" + 4*b - 10 + "px"

                    //player1Health -= 10
                    //this.forceUpdate()
                    player1on2 = false
                    player2on1 = false
                    this.player2.body.setSize(180,400,true);
                    if(this.isTurnedP2){
                      this.player.x -= 120;
                    }
                    else{
                      this.player.x += 130;
                    }
                  }

                }
                else{
                  this.attack3 = false
                  this.contact2 = false
                  player1on2 = false
                  player2on1 = false
                }
              }
              else
              {
                if(this.isTurnedP2)
                {
                  this.player2.body.setSize(180,400,true);
                  this.player2.anims.play('idleMirrorInverted',true);
                }
                else
                {
                  this.player2.body.setSize(180,400,true);
                  this.player2.anims.play('idleInverted',true);
                }
              }

            },
        },
      }
    }
    this.forceUpdate()

  }


  render() {
    const { initialize, game } = this.bait
    return (
      <>
        <div className="player1">Player 1</div>
        <NewHealthBar health = {this.state.player1Health} class1={"1"}/>

        <div className="player2">Player 2</div>
        <NewHealthBar health = {this.state.player2Health} class1={"2"}/>


        <IonPhaser game={game} initialize={initialize} style={{    marginBottom: "-4px",
          overflow: "hidden"}} />
      </>

    )
  }
}

export default PvE;
// <div className="healthbar2" style={{ position: "absolute", width: "400px", height: "50px" }}>          </div>
//
// <div className="health2" style={{ position: "absolute", width: (player2Health)*4, height: "50px"}}>
