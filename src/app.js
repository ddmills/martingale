import EntityFactory from './entities/entity-factory';
import CommandQueue from './input/command-queue';
import MapInputController from './input/controllers/map-input-controller';
import Map from './prefabs/map';
import BoundsSystem from './systems/bounds';

class App {
  init(game) {
    this.game = game;
    this.input = this.game.input;
    this.create = new EntityFactory;
    this.map = new Map('paradise');
    this.commandQueue = new CommandQueue();
    this.inputController = new MapInputController();
    this.systems = {
      bounds: new BoundsSystem,
    };

    // this.systems.bounds.debug = true;
  }

  get constants() {
    return {
      'TILE_SIZE': 16,
    };
  }

  worldX(x) {
    return x * this.constants.TILE_SIZE;
  }

  worldY(y) {
    return y * this.constants.TILE_SIZE;
  }

  tileX(worldX) {
    return Math.floor(worldX / this.constants.TILE_SIZE);
  }

  tileY(worldY) {
    return Math.floor(worldY / this.constants.TILE_SIZE);
  }

  update() {
    this.inputController.handle();
    this.commandQueue.processAll();
    this.systems.bounds.update();
  }
};

let app = new App;

export { app };
export default app;
