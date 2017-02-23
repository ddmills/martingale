import { component } from 'geotic';
import { app } from './../app';

class Agent {
  constructor(behavior) {
    this.behavior = behavior;
  }

  update(dt) {
    this.behavior(dt);
  }
}

component('agent', (entity, behavior = (dt) => {}) => {
  entity.mandate('position');
  return new Agent(behavior);
});
