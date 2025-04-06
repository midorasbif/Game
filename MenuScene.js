export default class MenuScene extends Phaser.Scene {
  constructor() {
    super('MenuScene');
  }

  create() {
    const title = this.add.text(400, 200, 'Pokémon Tower Defence: A Origem', {
      fontSize: '32px',
      fill: '#fff'
    }).setOrigin(0.5);

    const startButton = this.add.text(400, 300, 'Iniciar Jogo', {
      fontSize: '24px',
      fill: '#0f0'
    }).setOrigin(0.5).setInteractive();

    startButton.on('pointerdown', () => {
      this.scene.start('GameScene');
    });
  }
}
