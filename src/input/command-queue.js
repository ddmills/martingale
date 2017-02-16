export default class CommandQueue {
  constructor(commands = []) {
    this.commands = [];
    commands.forEach(c => this.push(c));
  }

  process() {
    if (this.commands.length) {
      const command = this.commands.shift();
      command.execute();
      return true;
    }
    return false;
  }

  processAll() {
    this.process() && this.processAll();
  }

  push(command) {
    this.commands.push(command);
  }
}
