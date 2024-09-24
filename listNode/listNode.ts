/**
 * 链表节点
 */
export class ListNode {
  val: number;
  next: ListNode | null = null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}