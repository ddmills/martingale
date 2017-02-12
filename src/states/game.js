import app from '../app';

import Map from '../prefabs/map';
import Cursor from '../prefabs/cursor';
import MapInputController from '../input/controllers/map-input-controller';
import CommandQueue from '../input/command-queue';

import '../components';
import tower from '../entities/tower';

export default class Game extends Phaser.State {
  create() {
    app.game = this.game;
    this.map = new Map(this.game, 'crazytown');
    this.cursor = new Cursor(this.game);

    this.commandQueue = new CommandQueue();

    const t = tower(15, 12);

    t.render(this.map.walls);

    this.inputController = new MapInputController(
      this.commandQueue,
      this.game.input,
      this.map,
      this.cursor
    );
  }

  update() {
    this.inputController.handle();
    this.commandQueue.processAll();
  }
};
