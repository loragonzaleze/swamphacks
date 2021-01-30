import React, { Component } from "react";
import Phaser from "phaser";
import background from "./gameImages/background.png"
import gator from "./gameImages/Albert1.png"
import platform from "./gameImages/platform.png"

class Skeleton extends Component {
  /*constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {};
  }*/
  componentDidMount() {
    this.gamePvE = new Phaser.Game({
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: "gameId",
      scene: {
        preload: this._preload,
        create: this._create,
        update: this._update
      }
    })
  }

  render() {
    return (
      <div id = "gameId">
      </div>
    );
  }
  _preload()
  {
    this.gamePvE.load.image('sky', background)
    this.gamePvE.load.image('gator', gator)
    this.game.PvE.load.image('ground', platform)
  }
  _create()
  {
    console.log("here")
    //this.game.physics.();
    this.gamePvE.add.sprite(0,0, 'sky')
    let platforms = this.game.add.group()
    platforms.enableBody = true

    let ground = platforms.create(0, this.game.world.height - 64, 'ground')
    ground.scale.setTo(2,2)
    ground.body.immovable = true

  }
  _update()
  {

  }

}

export default Skeleton;