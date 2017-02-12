import Strata from './strata';
import Wall from './wall';
import Interior from './interior';

export default class Map {
  constructor(game, level) {
    this.game = game;
    this.tilemap = this.game.add.tilemap(level);
    this.tilemap.addTilesetImage('ground', 'ground');

    this.layers = {
      background: this.tilemap.createLayer('background'),
      floor: this.tilemap.createLayer('floor'),
    };

    this.walls = this.game.add.group();
    this.interiors = this.game.add.group();

    this.strata = [];
    for (let i = 0; i < this.height; i++) {
      this.strata.push([]);
      for (let j = 0; j < this.width; j++) {
        const s = new Strata(this, j, i);
        this.strata[i].push(s);
      }
    }
  }

  // TODO: Extract and refactor
  placeFloor(tileX, tileY) {
    const strata = this.getStrata(tileX, tileY);
    if (strata.floorTile) return;

    const sum = strata.binarySum(s => {
      if (s && s.backgroundTile) {
        if (s.backgroundTile.properties.buildable) {
          return false;
        }
      }
      return true;
    });

    if (sum === 0) {
      this.tilemap.putTile(12, tileX, tileY, this.layers.floor);

      if (strata.wall) {
        strata.wall.destroy();
        strata.wall = null;
        strata.interior.destroy();
        strata.interior = null;
      }

      strata.neighbors.forEach(s => {
        if (!!s.floorTile) return;
        if (!!s.wall) {
          s.wall.refreshSegment();
        } else {
          this.walls.add(new Wall(this.game, s));
          this.interiors.add(new Interior(this.game, s));
        }
      });

      strata.neighbors.forEach(s => {
        if (!!s.wall) s.wall.refreshSegment();
        if (!!s.interior) s.interior.refreshSegment();
      });

      this.walls.sort('y');
      this.interiors.sort('y');
    }
  }

  getTileX(mouseX, layer = 'background') {
    return this.layers[layer].getTileX(mouseX);
  }

  getTileY(mouseY, layer = 'background') {
    return this.layers[layer].getTileY(mouseY);
  }

  getWorldX(tileX) {
    return tileX * 16;
  }

  getWorldY(tileY) {
    return tileY * 16;
  }

  getTile(x, y, layer = 'background') {
    return this.tilemap.getTile(x, y, layer);
  }

  get width() {
    return this.layers.background.width / 16;
  }

  get height() {
    return this.layers.background.height / 16;
  }

  isOutOfBounds(x, y) {
    return x < 0
      || y < 0
      || x >= this.width
      || y >= this.height;
  }

  getStrata(x, y) {
    return this.isOutOfBounds(x, y) ? null : this.strata[y][x];
  }
}
