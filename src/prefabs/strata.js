export default class Strata {
  constructor(map, x, y) {
    this.map = map;
    this.x = x;
    this.y = y;
    this.worldX = this.map.getWorldX(this.x);
    this.worldY = this.map.getWorldY(this.y);
  }

  get backgroundTile() {
    return this.map.getTile(this.x, this.y, 'background');
  }

  get floorTile() {
    return this.map.getTile(this.x, this.y, 'floor');
  }

  binarySum(test) {
    let sum = 0;
    let multiplier = 256;

    for (let i = -1; i <= 1; i++) {
      const y = this.y - i;

      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        const x = this.x - j;
        const strata = this.map.getStrata(x, y);

        if (test(strata)) sum += multiplier;

        multiplier /= 2;
      }
    }

    return sum;
  }

  binarySumSimple(test) {
    let sum = 0;

    const top = this.map.getStrata(this.x, this.y - 1);
    const left = this.map.getStrata(this.x - 1, this.y);
    const right = this.map.getStrata(this.x + 1, this.y);
    const bottom = this.map.getStrata(this.x, this.y + 1);

    if (test(top)) sum += 4;
    if (test(left)) sum += 16;
    if (test(right)) sum += 32;
    if (test(bottom)) sum += 128;

    return sum;
  }

  get neighbors() {
    const nb = [];

    for (let i = -1; i <= 1; i++) {
      const y = this.y + i;
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        const x = this.x + j;
        const strata = this.map.getStrata(x, y);
        if (strata) nb.push(strata);
      }
    }

    return nb;
  }
}
