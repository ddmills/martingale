export default class Tile extends Phaser.Tile {
  binarySum(test) {
    let sum = 0;
    let multiplier = 256;

    for (let i = -1; i <= 1; i++) {
      const y = this.y - i;
      const row = this.layer.data[y];

      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        const x = this.x - j;

        const tile = row[x];

        if (test(tile)) {
          sum += multiplier;
        }

        multiplier /= 2;
      }
    }

    return sum;
  }
}
