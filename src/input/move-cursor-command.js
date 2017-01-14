import Command from './command';

export default class MoveCursorCommand extends Command {
  constructor(cursor, mouseX, mouseY) {
    super();
    this.cursor = cursor;
    this.mouseX = mouseX;
    this.mouseY = mouseY;
  }

  execute() {
    this.cursor.move(this.mouseX, this.mouseY);
  }
}
