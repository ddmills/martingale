import Command from './command';

export default class SpawnEntityCommand extends Command {
  constructor(entity) {
    super();
    this.entity = entity;
  }

  execute() {
    this.entity.spawn();
  }
}
