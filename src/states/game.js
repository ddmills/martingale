import app from '../app';
import entities from '../entities';

export default class Game extends Phaser.State {
  create() {
    app.init(this.game);

    app.create.pineTree(8, 4).spawn();
    app.create.pineTree(6, 5).spawn();
    app.create.fox(14, 6).spawn();
  }

  update() {
    app.update();
  }
};
