import { Scene } from "phaser";

const resolution = {
	x: 120 * 48,
	y: 47 * 48,
}

export class GameScene extends Scene {
  constructor() {
    super("GameScene");
  }

  preload() {
    this.load.image("sky", "assets/parallax/sky-blue.png")
    // this.load.image("king", "sprites/king.png");
  }

  create() {
    this.physics.world.setBounds(0, 0, resolution.x, resolution.y)
    this.cameras.main.setBounds(0, 0, resolution.x, resolution.y)
    this.add
        .image(this.scale.width * 0.5, this.scale.height * 0.5, "sky")
        .setDepth(-20)
        .setScale(1, 1)
        .setScrollFactor(0.1)
  }

  update(time, delta) {}
}
