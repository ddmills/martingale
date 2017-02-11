import Map from '../prefabs/map';
import Cursor from '../prefabs/cursor';
import MapInputController from '../input/controllers/map-input-controller';
import CommandQueue from '../input/command-queue';

import PlaceFloorCommand from '../input/commands/place-floor-command';

export default class Game extends Phaser.State {
  create() {
    this.map = new Map(this.game, 'crazytown');
    this.cursor = new Cursor(this.game);


    this.commandQueue = new CommandQueue([
      new PlaceFloorCommand(this.map, 229, 282),
      new PlaceFloorCommand(this.map, 245, 282),
      new PlaceFloorCommand(this.map, 267, 282),
    ]);

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
