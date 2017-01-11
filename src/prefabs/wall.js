export default class Wall extends Phaser.TileSprite {
  constructor(game, tile) {
    super(game, tile.worldX, tile.worldY - 16, 16, 32, 'tower');
    this.tile = tile;
    this.tile.properties.buildable = false;
  }

  static canBePlacedAt(tile) {
    return !!tile && !tile.atBoundary() && !!tile.properties.buildable;
  }
}
