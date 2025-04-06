export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  create() {
    this.add.text(400, 300, 'Bem-vindo ao Jogo!', {
      fontSize: '32px',
      fill: '#fff'
    }).setOrigin(0.5);
  }
}
