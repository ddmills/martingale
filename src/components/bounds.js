import { component } from 'geotic';
import app from '../app';

class Bounds {
  constructor(position, width = 1, height = 1, offsetX = 0, offsetY = 0) {
    this.position = position;
    this.width = width;
    this.height = height;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
  }

  get worldX() {
    return app.worldX(this.leftBound);
  }

  get worldY() {
    return app.worldY(this.topBound);
  }

  get worldWidth() {
    return this.width * app.constants.TILE_SIZE;
  }

  get worldHeight() {
    return this.height * app.constants.TILE_SIZE;
  }

  get leftBound() {
    return this.position.x + this.offsetX;
  }

  get rightBound() {
    return this.position.x + this.width + this.offsetX;
  }

  get topBound() {
    return this.position.y + this.offsetY;
  }

  get bottomBound() {
    return this.position.y + this.height + this.offsetY;
  }

  contains(x, y) {
    return x > this.leftBound
      && x < this.rightBound
      && y > this.topBound
      && y < this.bottomBound;
  }

  collidesLeft(other) {
    return this.leftBound < other.rightBound && this.leftBound >= other.leftBound;
  }

  collidesRight(other) {
    return this.rightBound > other.leftBound && this.rightBound <= other.rightBound;
  }

  collidesTop(other) {
    return this.topBound < other.bottomBound && this.topBound >= other.topBound;
  }

  collidesBottom(other) {
    return this.bottomBound > other.topBound && this.bottomBound <= other.bottomBound;
  }

  collidesWith(other) {
    return (other != this)
      && (this.collidesLeft(other) || this.collidesRight(other))
      && (this.collidesTop(other) || this.collidesBottom(other));
  }

  debug() {
    const rect = new Phaser.Rectangle(
      this.worldX,
      this.worldY,
      this.worldWidth,
      this.worldHeight
    );

    app.game.debug.rectangle(rect, '#e300ff', false);
  }
}

component('bounds', (entity, ...args) => {
  const position = entity.mandate('position');
  return new Bounds(position, ...args);
});
