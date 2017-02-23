import { entity } from 'geotic';
import geotic from 'geotic';
import app from '../app';

export default (x, y) => {
  const tree = entity()
    .add('position', x, y)
    .add('sprite', 'pine-tree')
    .add('position-bound-sprite', 0, -16)
    .add('spawnable', (x, y) => {
      return geotic
        .findByComponent('bounds')
        .every(e => !tree.bounds.collidesWith(e.bounds));
    })
    .add('bounds')
    .once('spawn', () => {
      tree.render(app.map.static);
      app.map.static.sort('y');
      console.log('tree spawned.');
    });

  setTimeout(() => {
    tree.destroy();
  }, 2000);

  return tree;
};
