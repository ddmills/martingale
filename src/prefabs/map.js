import app from '../app';

export default class Map {
  constructor(level) {
    this.tilemap = app.game.add.tilemap(level);
    this.tilemap.addTilesetImage('terrain', 'terrain');
    this.tilemap.createLayer('background');
  }
}
