import Phaser from "phaser";
import { GameScene } from "./scenes";

var config = {
  type: Phaser.WEBGL,
  // width: window.innerWidth,
  // height: window.innerHeight,
  scale: {
    parent: "root",
    mode: Phaser.Scale.FIT, // FIT | RESIZE
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1024,
    height: 768,
  },
  fps: {
    target: 60,
    forceSetTimeOut: true,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 800 },
      debug: false,
    },
  },
  scene: [GameScene],
};

var game = new Phaser.Game(config);
