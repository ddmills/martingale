import app from '../app';
import entities from '../entities';

export default class Game extends Phaser.State {
  create() {
    app.init(this.game);

    const tree1 = app
      .create
      .pineTree(8, 4)
      .spawn();

    const tree2 = app
      .create
      .pineTree(6, 5)
      .spawn();
  }

  update() {
    app.update();
  }
};
