import geotic from 'geotic';
import app from '../app';

export default class AgentSystem {
  constructor() {
  }

  update(dt) {
    const actors = geotic.findByComponent('agent');

    actors.forEach(actor => {
      actor.agent.update(dt);
    });
  }
}
