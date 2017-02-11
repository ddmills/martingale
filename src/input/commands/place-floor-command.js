import Command from './command';

export default class PlaceFloorCommand extends Command {
  constructor(map, mouseX, mouseY) {
    super();
    this.map = map;
    this.mouseX = mouseX;
    this.mouseY = mouseY;
  }

  execute() {
    console.log(this.mouseX);
    console.log(this.mouseY);

    const x = this.map.getTileX(this.mouseX);
    const y = this.map.getTileX(this.mouseY);

    this.map.placeFloor(x, y);
  }
}
