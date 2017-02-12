import app from '../app';
import entities from '../entities';

export default class Game extends Phaser.State {
  create() {
    app.init(this.game);

    app
      .create
      .tower(15, 12)
      .spawn();
  }

  update() {
    app.update();
  }
};
