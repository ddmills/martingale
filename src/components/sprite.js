import { component } from 'geotic';
import { app } from './../app';

component('sprite', (entity, ...args) => {
  const sprite = new Phaser.TileSprite(app.game,...args);
  entity.mandate('renderable', sprite);
  return sprite;
});
