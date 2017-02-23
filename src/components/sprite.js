import { component } from 'geotic';
import { app } from './../app';

component('sprite', (entity, ...args) => {
  let x, y = 0;
  let key, frame = null;

  switch(args.length) {
    case 0:
      break;
    case 1:
      key = args[0];
      break;
    case 2:
      key = args[0];
      frame = args[1];
      break;
    case 3:
      x = args[0];
      y = args[1];
      key = args[2];
      break;
    case 4:
      x = args[0];
      y = args[1];
      key = args[2];
      frame = args[3];
      break;
  }

  const sprite = new Phaser.Sprite(app.game, x, y, key, frame);
  sprite.unmount = (e) => {
    sprite.destroy();
  };

  entity.mandate('renderable', sprite);
  return sprite;
});
