import geotic from 'geotic';
import app from '../app';

export default class BoundsSystem {
  constructor() {
    this.debug = false;
  }

  update() {
    const actors = geotic.findByComponent('bounds');

    if (this.debug) {
      actors.forEach(actor => {
        actor.bounds.debug();
      });
    } else {
      app.game.debug.reset();
    }
  }
}
