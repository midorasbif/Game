export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super('PreloadScene');
  }

  preload() {
    this.load.image('background', 'assets/sprites/background.png');
    this.load.image('tower', 'assets/sprites/tower.png');
    this.load.image('enemy', 'assets/sprites/enemy.png');
  }

  create() {
    this.scene.start('MenuScene');
  }
}
