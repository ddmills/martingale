import { component } from 'geotic';
import { app } from './../app';

class Spawnable {
  constructor(entity, test) {
    this.entity = entity;
    this.test = test;
    this.entity.spawn = this.spawn.bind(this);
    this.entity.canSpawnAt = this.canSpawnAt.bind(this);
  }

  canSpawnAt(x, y) {
    return this.test(x, y);
  }

  spawn() {
    this.entity.emit('spawn');
    return this.entity;
  }
}

component('spawnable', (entity, test = () => {}) => new Spawnable(entity, test));
