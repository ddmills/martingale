import MoveCursorCommand from './move-cursor-command';

export default class InputHandler {
  constructor(input, cursor) {
    this.input = input;
    this.cursor = cursor;
    this.oldMouseX = 0;
    this.oldMouseY = 0;
  }

  handle() {
    this.mouseX = this.input.activePointer.worldX;
    this.mouseY = this.input.activePointer.worldY;

    if (this.leftMouseButtonDown) {
      console.log('lmb');
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
