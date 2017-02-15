import { entity } from 'geotic';
import app from '../app';

export default (x, y) => {
  const tree = entity()
    .add('sprite', app.worldX(x), app.worldY(y) - 16, 16, 32, 'pine-tree')
    .add('spawnable')
    .on('spawn', () => {
      tree.render(app.map.static);
      app.map.static.sort('y');
    });

  return tree;
};
