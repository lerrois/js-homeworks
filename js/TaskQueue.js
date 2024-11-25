'use strict';

class TaskQueue {
  tasks = [];

  constructor(value) {
    this.value = value;
  }

  // addTask(task: () => Promise<string>) ;
  addTask(task) {
    this.tasks.push(task);
  }

  // run(): Promise<string>
  run() {
    for (const task of this.tasks) {
      this.delay(this.value).then((resolve) => resolve(task));
    }
  }

  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

export default TaskQueue;
