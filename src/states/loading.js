export default class Loading extends Phaser.State {
  preload() {
    this.game.stage.smoothed = false;
    this.loadingBar = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'loading-bar');
    this.loadingBar.anchor.setTo(0.5);
    this.load.setPreloadSprite(this.loadingBar);

    this.load.image('ground', 'img/ground.png');
    this.load.image('wall', 'img/walls.png');
    this.load.image('tower', 'img/tower.png');
    this.load.image('flag', 'img/flag.png');

    this.load.tilemap('island', 'maps/island.json', null, Phaser.Tilemap.TILED_JSON);

    this.load.spritesheet('cursor', 'img/cursor.png', 16, 16);
  }

  create() {
    this.game.stage.smoothed = false;
    this.stage.backgroundColor = '#362d18';
    this.state.start('Game');
  }
};
