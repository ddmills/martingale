import { component } from 'geotic';
import { app } from './../app';

class Spawnable {
  constructor(entity) {
    this.entity = entity;
    this.entity.spawn = this.spawn.bind(this);
  }

  spawn() {
    this.entity.emit('spawn');
    return this.entity;
  }
}

component('spawnable', entity => new Spawnable(entity));
