import { component } from 'geotic';
import { app } from './../app';

class Position {
  constructor(entity, x = 0, y = 0) {
    this.entity = entity;
    this._x = x;
    this._y = y;
  }

  get compacted() {
    return {
      x: this._x,
      y: this._y,
    };
  }

  set x(newX) {
    const oldPosition = this.compacted;
    this._x = newX;
    const newPosition = this.compacted;
    this.entity.emit('position-changed', oldPosition, newPosition);
  }

  set y(newY) {
    const oldPosition = this.compacted;
    this._y = newY;
    const newPosition = this.compacted;
    this.entity.emit('position-changed', oldPosition, newPosition);
  }

  get x() { return this._x; }
  get y() { return this._y; }

  get worldX() {
    return this._x * app.constants.TILE_SIZE;
  }

  get worldY() {
    return this._y * app.constants.TILE_SIZE;
  }
}

component('position', (entity, x = 0, y = 0) => new Position(entity, x, y));
