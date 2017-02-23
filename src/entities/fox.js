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
    .add('agent', dt => {
      fox.position.x = fox.position.x - dt * .001;
      if (fox.position.x <= - fox.bounds.width) {
        fox.position.x = app.constants.MAP_WIDTH;
      }
    })
    .once('spawn', () => {
      fox.render(app.map.static);
      app.map.static.sort('y');
      console.log('fox spawned.');
    });

  return fox;
};
