import Tower from '../prefabs/tower';
import Wall from '../prefabs/wall';
import Map from '../prefabs/map';

export default class Game extends Phaser.State {
  create() {
    this.map = new Map(this.game, 'crazytown');

    this.cursor = this.game.add.sprite(32, 32, 'cursor');
    this.cursor.animations.add('spin');
    this.cursor.animations.play('spin', 15, true);

    this.game.input.addMoveCallback(this.updateCursor, this);
  }

  updateCursor() {
    const mouseX = this.game.input.activePointer.worldX;
    const mouseY = this.game.input.activePointer.worldY;
    const tileX = this.map.getTileX(mouseX);
    const tileY = this.map.getTileY(mouseY);

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
    if (this.map.canPlaceFloor(tileX, tileY)) {
      this.map.placeFloor(tileX, tileY);
    }
  }
};
