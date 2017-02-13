export default class Preload extends Phaser.State {
  preload() {
    this.game.load.image('loading-bar', 'img/loading-bar.png');
  }

  create() {
    this.game.stage.backgroundColor = '#306082';
    this.game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
    this.game.scale.setUserScale(2, 2);

    this.game.renderer.renderSession.roundPixels = true;
    Phaser.Canvas.setImageRenderingCrisp(this.game.canvas);

    this.state.start('Loading');
  }
};
