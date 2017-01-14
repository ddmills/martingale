import Command from 'command';

export default class PlaceFloorCommand extends Command {
  constructor(map, x, y) {
  }

  execute() {
    console.log('place floor command called');
  }
}
