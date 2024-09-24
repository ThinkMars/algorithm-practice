/**
 * 滑动窗口求区间最大值
 * @param nums 数组
 * @param k 滑动窗口大小
 * @returns 每个滑动窗口的最大值
 */
export function maxSlidingWindow(nums: number[], k: number): number[] {
  /** 单调递减队列 */
  class MonoQueue {
    private queue: number[];
    constructor() {
      this.queue = [];
    };
    /** 入队：value如果大于队尾元素，则将队尾元素删除，直至队尾元素大于等于value，或者队列为空 */
    public enqueue(value: number): void {
      let back: number | undefined = this.queue[this.queue.length - 1];
      while (back !== undefined && back < value) {
        this.queue.pop();
        back = this.queue[this.queue.length - 1];
      }
      this.queue.push(value);
    };

    /** 出队：只有当队头元素等于value，才出队 */
    public dequeue(value: number): void {
      let top: number | undefined = this.top();
      if (top !== undefined && top === value) {
        this.queue.shift();
      }
    }
    public top(): number | undefined {
      return this.queue[0];
    }
  }

  const helperQueue: MonoQueue = new MonoQueue();
  let i: number = 0;
  let j: number = 0;

  let resArr: number[] = [];

  // 初始化队列
  while (j < k) {
    helperQueue.enqueue(nums[j++]);
  }

  // 队列不为空，则队头元素即为最大值
  resArr.push(helperQueue.top()!);

  while (j < nums.length) {
    // 假如窗口后移一位的元素大于队尾元素，则将队尾元素删除
    // 如果队尾最后大于移入的元素，则保留，此时剩余2个元素
    helperQueue.enqueue(nums[j]); // 将窗口后移一位的元素入队
    helperQueue.dequeue(nums[i]); // 将窗口首位的元素出队，一开始i=0
    resArr.push(helperQueue.top()!); // 将窗口最大值存入结果数组
    // 滑动窗口右移
    j++, i++;
  }

  return resArr;
};