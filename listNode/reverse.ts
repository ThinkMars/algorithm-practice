import type { ListNode } from './listNode.ts'

export function reverseList(head: ListNode | null): ListNode | null {
  let pre = null;
  let cur = head;
  let temp = null;

  while (cur) {
    // 1、将【下一个】拿出
    temp = cur.next;
    // 2、将【当前】节点指向【前一个】节点，反转
    cur.next = pre;
    // 3、【前一个】节点向前移动至【当前】
    pre = cur;
    // 4、【当前】节点向前移动至【下一个】
    cur = temp;
  }

  return pre;
}