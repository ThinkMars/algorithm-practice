import type { ListNode } from './listNode.ts'

export function detectCycle(head: ListNode | null): ListNode | null {
  let slowNode: ListNode | null = head,
    fastNode: ListNode | null = head;
  while (fastNode !== null && fastNode.next !== null) {
    // 这里的逻辑是，如果存在环，那么快指针和慢指针一定会相遇，让快指针走两步，慢指针走一步
    slowNode = slowNode!.next;
    fastNode = fastNode.next.next;

    // 相遇时，让一个指针从head开始走，另一个指针从相遇点开始走，相遇时就是环的入口
    if (slowNode === fastNode) { 
      slowNode = head;
      while (slowNode !== fastNode) {
        slowNode = slowNode!.next;
        fastNode = fastNode!.next;
      }
      return slowNode;
    }
  }
  return null;
};