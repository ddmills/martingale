import Tower from '../prefabs/tower';

export default class Game extends Phaser.State {
  create() {
    this.map = this.game.add.tilemap('island');
    this.map.addTilesetImage('ground', 'tile-ground');

    this.backgroundLayer = this.map.createLayer('background');
    this.backgroundLayer.resizeWorld();

    this.buildings = this.game.add.group();

    this.cursor = this.game.add.graphics();
    this.cursor.lineStyle(1, 0xd698c7, 1);
    this.cursor.drawRect(0, 0, 16, 16);

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
