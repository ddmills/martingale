import SpawnEntityCommand from '../commands/spawn-entity-command';
import InputController from './input-controller';
import app from '../../app';

export default class MapInputController extends InputController {
  constructor() {
    super(app.commandQueue);
    this.cursor = app.cursor;
    this.oldMouseX = 0;
    this.oldMouseY = 0;
  }

  handle() {
    this.mouseX = app.input.activePointer.worldX;
    this.mouseY = app.input.activePointer.worldY;
    this.tileX = app.tileX(this.mouseX);
    this.tileY = app.tileY(this.mouseY);

    if (this.leftMouseButtonDown) {
      // const pine = app.create.pineTree(this.tileX, this.tileY);
      const fox = app.create.fox(this.tileX, this.tileY);

      if (fox.canSpawnAt(this.tileX, this.tileY)) {
        const command = new SpawnEntityCommand(fox);
        this.queueCommand(command);
      } else {
        fox.destroy();
      }
    }

    if (this.rightMouseButtonDown) {
      console.log('rmb');
    }

    this.oldMouseX = this.mouseX;
    this.oldMouseY = this.mouseY;
  }

  get mousePositionChanged() {
    return this.oldMouseX != this.mouseX || this.oldMouseY != this.mouseY;
  }

  get leftMouseButtonDown() {
    return app.input.mousePointer.leftButton.isDown
  }

  get rightMouseButtonDown() {
    return app.input.mousePointer.rightButton.isDown
  }
}
