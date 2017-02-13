import { entity } from 'geotic';
import app from '../app';

export default (x, y) => {
  const shrub = entity()
    .add('sprite', app.worldX(x), app.worldY(y), 32, 32, 'shrub')
    .add('spawnable')
    .on('spawn', () => shrub.render(app.map.static));

  return shrub;
};
