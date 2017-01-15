import MoveCursorCommand from './commands/move-cursor-command';
import PlaceFloorCommand from './commands/place-floor-command';

export default class InputHandler {
  constructor(input, map, cursor) {
    this.input = input;
    this.map = map;
    this.cursor = cursor;
    this.oldMouseX = 0;
    this.oldMouseY = 0;
  }

  handle() {
    this.mouseX = this.input.activePointer.worldX;
    this.mouseY = this.input.activePointer.worldY;

    if (this.leftMouseButtonDown) {
      const command = new PlaceFloorCommand(
        this.map,
        this.mouseX,
        this.mouseY
      );

      command.execute();
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

      command.execute();
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
