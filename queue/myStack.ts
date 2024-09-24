// 用队列实现栈 先进后出
export class MyStack {
  private queue: number[];
  private tempQueue: number[];

  constructor() {
    this.queue = [];
    this.tempQueue = [];
  }

  push(x: number): void {
    this.queue.push(x);
  }

  pop(): number {
    // 留下一个
    while (this.queue.length > 1) {
      this.tempQueue.push(this.queue.shift()!);
    }
    // 队列的最后一个
    const res = this.queue.pop();
    // 交换队列
    [this.queue, this.tempQueue] = [this.tempQueue, this.queue];
    return res!;
  }

  top(): number {
    let res = this.pop()
    this.push(res);
    return res;
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}