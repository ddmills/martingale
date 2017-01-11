import Tower from '../prefabs/tower';

export default class Game extends Phaser.State {
  create() {
    this.map = this.game.add.tilemap('island');
    this.map.addTilesetImage('ground', 'ground');

    this.backgroundLayer = this.map.createLayer('background');
    this.backgroundLayer.resizeWorld();

    this.buildings = this.game.add.group();

    this.cursor = this.game.add.sprite(32, 32, 'cursor');
    this.cursor.animations.add('spin');
    this.cursor.animations.play('spin', 15, true);

    this.game.input.addMoveCallback(this.updateCursor, this);
  }

  updateCursor() {
    const mouseX = this.game.input.activePointer.worldX;
    const mouseY = this.game.input.activePointer.worldY;
    const tileX = this.backgroundLayer.getTileX(mouseX);
    const tileY = this.backgroundLayer.getTileY(mouseY);

    this.cursor.x = tileX * 16;
    this.cursor.y = tileY * 16;

    if (this.game.input.mousePointer.isDown) {
      const tile = this.map.getTile(tileX, tileY, 'background');

      if (Tower.canBePlacedAt(tile)) {
        const sum = tile.binarySum(t => !!t && !!t.properties.buildable);
        console.log(`Σ ${sum}`);
        this.placeTower(tile);
      }
    }
  }

  placeTower(tile) {
    const tower = this.buildings.add(new Tower(this.game, tile));
    this.buildings.sort('y', Phaser.Group.SORT_ASCENDING);
    return tower;
  }
};