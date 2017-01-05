export default class Preload extends Phaser.State {
  preload() {
    this.game.load.image('loading-bar', 'img/loading-bar.png');
  }
  create() {
    this.game.stage.backgroundColor = '#362d18';

    this.state.start('Loading');
  }
};
