export default class Loading extends Phaser.State {
  preload() {
    this.game.stage.smoothed = false;
    this.loadingBar = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'loading-bar');
    this.loadingBar.anchor.setTo(0.5);
    this.load.setPreloadSprite(this.loadingBar);

    this.load.image('ground', 'img/ground.png');
    this.load.image('terrain', 'img/terrain-16.png');
    this.load.image('wall', 'img/walls.png');
    this.load.image('tower', 'img/tower.png');
    this.load.image('flag', 'img/flag.png');
    this.load.image('shrub', 'img/shrub.png');
    this.load.image('pine-tree', 'img/pine-tree.png');

    this.load.tilemap('island', 'maps/island.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.tilemap('crazytown', 'maps/crazytown.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.tilemap('tiny', 'maps/tiny.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.tilemap('paradise', 'maps/paradise.json', null, Phaser.Tilemap.TILED_JSON);

    this.load.spritesheet('cursor', 'img/cursor.png', 16, 16);
    this.load.atlas('walls', 'img/walls.png', 'atlas/walls.json');
    this.load.atlas('interior', 'img/interior-orange.png', 'atlas/interior.json');
  }

  create() {
    this.game.stage.smoothed = false;
    this.stage.backgroundColor = '#306082';
    this.state.start('Game');
  }
};
