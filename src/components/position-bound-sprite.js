import { component } from 'geotic';
import { app } from './../app';

class PositionBoundSprite {
  constructor(position, sprite, offsetX = 0, offsetY = 0) {
    this.position = position;
    this.sprite = sprite;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    this.synchronizeSprite()
  }

  synchronizeSprite() {
    this.sprite.x = this.position.worldX + this.offsetX;
    this.sprite.y = this.position.worldY + this.offsetY;
  }
}

component('position-bound-sprite', (entity, ...args) => {
  const position = entity.mandate('position');
  const sprite = entity.mandate('sprite');
  const binder = new PositionBoundSprite(position, sprite, ...args);

  entity.on('position-changed', binder.synchronizeSprite.bind(binder));

  return binder;
});
