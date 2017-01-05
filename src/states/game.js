export default class Game extends Phaser.State {
  create() {
    this.map = this.game.add.tilemap('island');
    this.map.addTilesetImage('ground', 'tile-ground');

    this.backgroundLayer = this.map.createLayer('background');
    this.backgroundLayer.resizeWorld();
  }
};
