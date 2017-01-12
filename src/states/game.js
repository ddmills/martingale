import Tower from '../prefabs/tower';
import Wall from '../prefabs/wall';

export default class Game extends Phaser.State {
  create() {
    this.map = this.game.add.tilemap('crazytown');
    this.map.addTilesetImage('ground', 'ground');

    this.backgroundLayer = this.map.createLayer('background');
    this.backgroundLayer.resizeWorld();
    // this.showBinarySums();

    this.buildings = this.game.add.group();

    this.cursor = this.game.add.sprite(32, 32, 'cursor');
    this.cursor.animations.add('spin');
    this.cursor.animations.play('spin', 15, true);

    this.game.input.addMoveCallback(this.updateCursor, this);
  }

  showBinarySums() {
    const style = {
      font: "8px Arial",
      fill: "#1fe83f",
    };

    for (let i = 0; i < this.map.height; i++) {
      for(let j = 0; j < this.map.width; j++) {
        const tile = this.map.getTile(j, i, this.backgroundLayer);
        const sum = tile.binarySum(t => !!t && !!t.properties.floor);
        this.game.add.text(tile.worldX, tile.worldY, sum, style);
      }
    }
  }

  updateCursor() {
    const mouseX = this.game.input.activePointer.worldX;
    const mouseY = this.game.input.activePointer.worldY;
    const tileX = this.backgroundLayer.getTileX(mouseX);
    const tileY = this.backgroundLayer.getTileY(mouseY);

    this.cursor.x = tileX * 16;
    this.cursor.y = tileY * 16;

    if (this.game.input.mousePointer.leftButton.isDown) {
      this.onLeftMouseDown(tileX, tileY);
    }

    if (this.game.input.mousePointer.rightButton.isDown) {
      this.onRightMouseDown(tileX, tileY);
    }
  }

  onLeftMouseDown(tileX, tileY) {
    const tile = this.map.getTile(tileX, tileY, this.backgroundLayer);
    if (Wall.canBePlacedAt(tile)) {
      this.placeWall(tile);
    }
  }

  onRightMouseDown(tileX, tileY) {
    const tile = this.map.getTile(tileX, tileY, this.backgroundLayer);
    if (Tower.canBePlacedAt(tile)) {
      this.placeTower(tile);
    }
  }

  placeTower(tile) {
    const tower = this.buildings.add(new Tower(this.game, tile));
    this.buildings.sort('y', Phaser.Group.SORT_ASCENDING);
    return tower;
  }

  placeWall(tile) {
    const wall = this.buildings.add(new Wall(this.game, tile));
    this.buildings.sort('y', Phaser.Group.SORT_ASCENDING);
    return wall;
  }
};
