import MoveCursorCommand from '../commands/move-cursor-command';
import PlaceFloorCommand from '../commands/place-floor-command';
import SpawnEntityCommand from '../commands/spawn-entity-command';
import InputController from './input-controller';
import app from '../../app';

export default class MapInputController extends InputController {
  constructor(queue, input, map, cursor) {
    super(queue);
    this.input = input;
    this.map = map;
    this.cursor = cursor;
    this.oldMouseX = 0;
    this.oldMouseY = 0;
  }

  handle() {
    this.mouseX = this.input.activePointer.worldX;
    this.mouseY = this.input.activePointer.worldY;
    this.tileX = app.tileX(this.mouseX);
    this.tileY = app.tileY(this.mouseY);

    if (this.leftMouseButtonDown) {
      const tower = app.create.tower(this.tileX, this.tileY);
      const command = new SpawnEntityCommand(tower);

      this.queue.push(command);
    }

    if (this.rightMouseButtonDown) {
      console.log('rmb');
    }

    if (this.mousePositionChanged) {
      const command = new MoveCursorCommand(
        this.cursor,
        this.mouseX,
        this.mouseY
      );

      this.queue.push(command);
    }

    this.oldMouseX = this.mouseX;
    this.oldMouseY = this.mouseY;
  }

  get mousePositionChanged() {
    return this.oldMouseX != this.mouseX || this.oldMouseY != this.mouseY;
  }

  get leftMouseButtonDown() {
    return this.input.mousePointer.leftButton.isDown
  }

  get rightMouseButtonDown() {
    return this.input.mousePointer.rightButton.isDown
  }
}
