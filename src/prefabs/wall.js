export default class Wall extends Phaser.Sprite {
  constructor(game, tile) {
    super(game, tile.worldX, tile.worldY - 16, 'walls', 'segment-n');
    this.tile = tile;
    const segment = this.getSegment();
    this.frameName = segment;
    this.tile.properties.buildable = false;
  }

  mapSumToSegment(sum) {
    switch(sum) {
      case 128:
      case 192:
      case 320:
      case 384:
      case 448:
        return 'segment-e-t';
      case 4:
      case 6:
      case 10:
      case 12:
      case 14:
        return 'segment-e-b';
      case 16:
      case 18:
      case 66:
      case 80:
      case 82:
        return 'segment-e-r';
      case 32:
      case 40:
      case 288:
      case 264:
      case 296:
        return 'segment-e-l';

      case 256:
        return 'segment-e-tl';
      case 64:
        return 'segment-e-tr';
      case 8:
        return 'segment-e-bl';
      case 2:
        return 'segment-e-br';

      case 20:
      case 22:
      case 26:
      case 30:
      case 70:
      case 78:
      case 86:
      case 88:
      case 90:
      case 94:
        return 'segment-i-tl';
      case 36:
      case 38:
      case 42:
      case 44:
      case 46:
      case 260:
      case 268:
      case 270:
      case 292:
      case 294:
      case 298:
      case 300:
      case 302:
        return 'segment-i-tr';
      case 130:
      case 210:
      case 386:
      case 400:
      case 450:
      case 464:
      case 466:
        return 'segment-i-bl';
      case 96:
      case 104:
      case 160:
      case 168:
      case 328:
      case 352:
      case 360:
      case 416:
      case 456:
      case 480:
      case 488:
        return 'segment-i-br';
      default:
        return 'segment-n';
    };
  }

  getSegment() {
    const sum = this.tile.binarySum(t => !!t && !!t.properties.floor);

    console.log(sum);

    return this.mapSumToSegment(sum);
  }

  static canBePlacedAt(tile) {
    return !!tile && !tile.atBoundary() && !!tile.properties.buildable;
  }
}
