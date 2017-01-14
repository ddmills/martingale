import Map from '../prefabs/map';
import Cursor from '../prefabs/cursor';
import InputHandler from '../input/input-handler';

export default class Game extends Phaser.State {
  create() {
    this.map = new Map(this.game, 'crazytown');
    this.cursor = new Cursor(this.game);
    this.inputHandler = new InputHandler(this.game.input, this.cursor);
  }

  update() {
    this.inputHandler.handle();
  }
};
