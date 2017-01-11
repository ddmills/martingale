export default class Tile extends Phaser.Tile {
  /**
   * Get binary sum of all neighbors.
   */
  binarySum(test) {
    let sum = 0;
    let multiplier = 256;

    for (let i = -1; i <= 1; i++) {
      const y = this.y - i;
      const row = this.layer.data[y];

      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        const x = this.x - j;
        const tile = row && x in row ? row[x] : null;

        if (test(tile)) sum += multiplier;

        multiplier /= 2;
      }
    }

    return sum;
  }

  /**
   * Get binary sum of neighbors only taking into account
   * the top, left, right, and bottom tiles.
   */
  binarySumSimple(test) {
    let sum = 0;

    const getNeighbor = (x, y) => {
      if (y in this.layer.data) {
        if (x in this.layer.data[y]) return this.layer.data[x][y];
      }
      return null;
    };

    const top = getNeighbor(this.y - 1, this.x);
    const left = getNeighbor(this.y, this.x - 1);
    const right = getNeighbor(this.y, this.x + 1);
    const bottom = getNeighbor(this.y + 1, this.x);

    if (test(top)) sum += 4;
    if (test(left)) sum += 16;
    if (test(right)) sum += 32;
    if (test(bottom)) sum += 128;

    return sum;
  }

  /**
   * Boolean check if this tile exists on the layer boundary
   */
  atBoundary() {
    return this.x === 0
      || this.y === 0
      || this.x === this.layer.width - 1
      || this.y === this.layer.height - 1;
  }
}
