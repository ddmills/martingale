import { entity } from 'geotic';
import geotic from 'geotic';
import app from '../app';

export default (x, y) => {
  const fox = entity()
    .add('position', x, y)
    .add('sprite', 'fox')
    .add('position-bound-sprite')
    .add('spawnable', (x, y) => {
      return geotic
        .findByComponent('bounds')
        .every(e => !fox.bounds.collidesWith(e.bounds));
    })
    .add('bounds')
    .once('spawn', () => {
      fox.render(app.map.static);
      app.map.static.sort('y');
      console.log('fox spawned.');
    });

  return fox;
};
