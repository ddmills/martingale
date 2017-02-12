import { entity } from 'geotic';
import { app } from '../app';

export default (x, y) => {
  const tower = entity()
    .add('sprite', app.worldX(x), app.worldY(y) - 16, 16, 32, 'tower')
    .add('spawnable');
    // .on('spawn', () => tower.render(app.map.walls));

  return tower;
};
