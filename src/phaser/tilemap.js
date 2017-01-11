export default class Tilemap extends Phaser.Tilemap {
  binarySum(centerX, centerY, layer, test) {
    let sum = 0;

    let multiplier = 256;
    for (let i = -1; i <= 1; i++) {
      const y = centerY - i;

      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        const x = centerX - j;

        const tile = this.getTile(x, y, layer);

        if (test(tile)) {
          sum += multiplier;
        }

        multiplier /= 2;
      }
    }

    return sum;
  }
}
