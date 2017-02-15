import { component } from 'geotic';

class Bounds {
  constructor(position, width = 1, height = 1, offsetX = 0, offsetY = 0) {
    this.position = position;
    this.width = width;
    this.height = height;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
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
    return (this.collidesLeft(other) || this.collidesRight(other))
      && (this.collidesTop(other) || this.collidesBottom(other));
  }
}

component('bounds', (entity, ...args) => {
  const position = entity.mandate('position');
  return new Bounds(position, ...args);
});
