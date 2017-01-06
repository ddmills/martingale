export default class Game extends Phaser.State {
  create() {
    this.map = this.game.add.tilemap('island');
    this.map.addTilesetImage('ground', 'tile-ground');

    this.backgroundLayer = this.map.createLayer('background');
    this.backgroundLayer.resizeWorld();

    this.cursor = this.game.add.graphics();
    this.cursor.lineStyle(1, 0xff9ae6, 1);
    this.cursor.drawRect(0, 0, 16, 16);

    this.game.input.addMoveCallback(this.updateCursor, this);
  }

  updateCursor() {
    const mouseX = this.game.input.activePointer.worldX;
    const mouseY = this.game.input.activePointer.worldY;
    this.cursor.x = this.backgroundLayer.getTileX(mouseX) * 16;
    this.cursor.y = this.backgroundLayer.getTileY(mouseY) * 16;
  }
};
