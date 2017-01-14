export default class Cursor {
  constructor(game, x = 0, y = 0) {
    this.game = game;
    this.sprite = this.game.add.sprite(0, 0, 'cursor');

    this.x = x;
    this.y = y;

    this.sprite.animations.add('spin');
    this.sprite.animations.play('spin', 15, true);

    this.sprite.tint = 0xb8f2f4;
  }

  move(mouseX, mouseY) {
    this.x = this.game.math.snapToFloor(mouseX, 16);
    this.y = this.game.math.snapToFloor(mouseY, 16);
  }

  get x() { return this.sprite.x; }
  get y() { return this.sprite.y; }
  set x(v) { this.sprite.x = v; }
  set y(v) { this.sprite.y = v; }
}
