import { component } from 'geotic';
import { app } from './../app';

class Spawnable {
  constructor(onSpawn) {
    this.onSpawn = onSpawn;
  }
}

component('spawnable', (entity, fn = () => {}) => {
  const s = new Spawnable(fn);
  entity.spawn = s.onSpawn.bind(s);
  return s;
});
