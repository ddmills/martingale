import { entity } from 'geotic';
import app from '../app';

export default (x, y) => {
  const tree = entity()
    .add('position', x, y)
    .add('sprite', 'pine-tree')
    .add('position-bound-sprite', 0, -16)
    .add('spawnable')
    .once('spawn', () => {
      tree.render(app.map.static);
      app.map.static.sort('y');
    });

  return tree;
};
