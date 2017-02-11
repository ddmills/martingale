export default class InputController {
  constructor(queue) {
    this.queue = queue;
  }

  handle() {
  }

  queueCommand(command) {
    this.queue.push(command);
  }
}
