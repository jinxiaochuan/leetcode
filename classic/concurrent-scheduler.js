// 支持并发的调度器， 最多允许2个任务进行处理
// const scheduler = new Scheduler(2)
// scheduler.addTask(1, '1');   // 1s后输出’1'
// scheduler.addTask(2, '2');  // 2s后输出’2'
// scheduler.addTask(1, '3');  // 2s后输出’3'
// scheduler.addTask(1, '4');  // 3s后输出’4'
// scheduler.start();

class Scheduler {
  constructor(concurrent) {
    this.concurrent = concurrent || 1;
    this.queue = [];
    this.count = 0;
  }

  addTask(timeout, str) {
    this.queue.push({ timeout, str });
  }

  start() {
    while (this.queue.length && this.count < this.concurrent) {
      const { timeout, str } = this.queue.shift();
      this.count++;
      setTimeout(() => {
        console.log(str);
        this.count--;
        this.start();
      }, timeout * 1000);
    }
  }
}

const scheduler = new Scheduler(2)
scheduler.addTask(1, '1');   // 1s后输出’1'
scheduler.addTask(2, '2');  // 2s后输出’2'
scheduler.addTask(1, '3');  // 2s后输出’3'
scheduler.addTask(1, '4');  // 3s后输出’4'
scheduler.start();