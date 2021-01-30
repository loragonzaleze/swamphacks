import React, { Component } from "react";
import Phaser from "phaser";

class Skeleton extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {};
  }
  componentDidMount() {
    this.game = new Phaser.game({
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
    this.load.image('gameImages/background.png')
  }
  _create()
  {
    this.game.physics.start(Phaser.Physics.Arcade)
    this.game.add.sprite(0,0, 'gameImages/Albert1.png')
  }

}

export default Skeleton;