
export default class Map {
  constructor(game, level) {
    this.game = game;
    this.tilemap = this.game.add.tilemap(level);
    this.tilemap.addTilesetImage('ground', 'ground');

    this.layers = {
      background: this.tilemap.createLayer('background'),
      floor: this.tilemap.createLayer('floor'),
    };

    this.buildings = this.game.add.group();
  }

  // TODO: Extract to a 'floor' class
  canPlaceFloor(tileX, tileY) {
    const tile = this.tilemap.getTile(tileX, tileY, this.layers.background);
    return !!tile && !!tile.properties.buildable;
  }

  // TODO: Extract to a 'floor' class
  placeFloor(tileX, tileY) {
    this.tilemap.putTile(12, tileX, tileY, this.layers.floor);
  }

  getTileX(mouseX, layer = 'background') {
    return this.layers[layer].getTileX(mouseX);
  }

  getTileY(mouseY, layer = 'background') {
    return this.layers[layer].getTileY(mouseY);
  }
}
