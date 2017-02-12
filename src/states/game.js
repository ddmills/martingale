import app from '../app';

import { tower } from '../entities';

export default class Game extends Phaser.State {
  create() {
    app.init(this.game);

    const t = tower(15, 12);
    t.render(app.map.walls);
  }

  update() {
    app.update();
  }
};
