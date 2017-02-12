export default class Interior extends Phaser.Sprite {
  constructor(game, strata) {
    super(game, strata.worldX, strata.worldY - 16, 'interior', 'segment-t');
    this.strata = strata;
    this.strata.interior = this;
    this.refreshSegment();
  }

  refreshSegment() {
    const sum = this.strata.binarySumSimple(s => !!s && !!s.floorTile);
    this.frameName = this.mapSumToSegment(sum);
  }

  mapSumToSegment(sum) {
    switch(sum) {
      case 4:
        return 'segment-b';
      case 32:
        return 'segment-br';
        // return 'segment-l';
      case 16:
        return 'segment-br';
        // return 'segment-r';
      case 128:
      case 132:
      case 144:
      case 148:
      case 160:
      case 164:
      case 176:
      case 180:
        return 'segment-t';
      default:
        return 'segment-br';
    };
  }

  static placeAt(strata) {
    // if (
  }
}
