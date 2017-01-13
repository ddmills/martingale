export default class Preload extends Phaser.State {
  preload() {
    this.game.load.image('loading-bar', 'img/loading-bar.png');
  }

  create() {
    this.game.stage.backgroundColor = '#362d18';
    this.game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
    this.game.scale.setUserScale(1, 1);

    this.game.renderer.renderSession.roundPixels = true;
    Phaser.Canvas.setImageRenderingCrisp(this.game.canvas);

    this.state.start('Loading');
  }
};
