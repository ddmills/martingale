export default class Loading extends Phaser.State {
  preload() {
    this.game.stage.smoothed = false;
    this.loadingBar = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'loading-bar');
    this.loadingBar.anchor.setTo(0.5);
    this.load.setPreloadSprite(this.loadingBar);

    this.load.tilemap('island', 'maps/island.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('tile-ground', 'img/ground.png');
  }
  create() {
    this.game.stage.smoothed = false;
    this.stage.backgroundColor = '#362d18';
    this.state.start('Game');
  }
};
