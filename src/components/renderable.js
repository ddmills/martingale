import { component } from 'geotic';
import { app } from './../app';

class Renderable {
  constructor(subject) {
    this.subject = subject;
  }

  render(canvas) {
    return canvas.add(this.subject);
  }
}

component('renderable', (entity, subject) => {
  const r = new Renderable(subject);
  entity.render = r.render.bind(r);
  return r;
});
