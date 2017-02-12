import Map from './prefabs/map';
import Cursor from './prefabs/cursor';
import CommandQueue from './input/command-queue';
import MapInputController from './input/controllers/map-input-controller';

class App {
  init(game) {
    this.game = game;
    this.map = new Map(this.game, 'crazytown');
    this.cursor = new Cursor(this.game);
    this.commandQueue = new CommandQueue();
    this.inputController = new MapInputController(
      this.commandQueue,
      this.game.input,
      this.map,
      this.cursor
    );
  }

  get constants() {
    return {
      'TILE_SIZE': 16,
    };
  }

  update() {
    this.inputController.handle();
    this.commandQueue.processAll();
  }
};

let app = new App();

export { app };
export default app;
