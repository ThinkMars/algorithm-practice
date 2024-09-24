import { ListNode } from './listNode.ts'

export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const virtualHead = new ListNode(0, head);

  let slow = virtualHead;
  let fast = virtualHead;

  while(n--) {
    fast = fast.next!; // fast.next is not null，因为多了一个虚拟节点，所以此时会到达n+1的位置
  }
  
  while(fast.next) { // 遍历直至fast.next为null，此时slow为第n-1个节点
    fast = fast.next;
    slow = slow.next!;
  }

  slow.next = slow.next!.next;

  return virtualHead.next;
}

// function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
//   let curNode: ListNode | null = head;
//   let listSize: number = 0;
//   while (curNode) {
//       curNode = curNode.next;
//       listSize++;
//   }
//   if (listSize === n) {
//       head = head.next;
//   } else {
//       curNode = head;
//       for (let i = 0; i < listSize - n - 1; i++) {
//           curNode = curNode.next;
//       }
//       curNode.next = curNode.next.next;
//   }
//   return head;
// };