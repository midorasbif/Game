export default class BootScene extends Phaser.Scene {
  constructor() {
    super('BootScene');
  }

  preload() {
    this.load.image('loading', 'assets/sprites/loading.png');
  }

  create() {
    this.scene.start('PreloadScene');
  }
}
