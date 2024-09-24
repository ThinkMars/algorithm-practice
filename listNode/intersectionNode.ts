import { ListNode } from './listNode.ts'

export function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let sizeA = 0;
  let sizeB = 0;
  let curA = headA;
  let curB = headB;

  // 计算链表长度
  while (curA) {
    sizeA++;
    curA = curA.next;
  }

  while (curB) {
    sizeB++;
    curB = curB.next;
  }

  // 从头开始
  curA = headA;
  curB = headB;
  
  // 这里的逻辑是，如果A链表长度小于B链表，那么就交换A和B，这样就可以保证A链表长度大于等于B链表长度
  if (sizeA < sizeB) {
    [curA, curB] = [curB, curA];
    [sizeA, sizeB] = [sizeB, sizeA];
  }

  const gap = sizeA - sizeB;
  // 让A链表先走sizeA - sizeB步，这样A和B链表就处于同一起点
  // 因为前面的节点不会重复，所以只需要计算长度差，然后让长的链表先走长度差步，这样两个链表就处于同一起点
  for (let i = 0; i < gap; i++) {
    curA = curA!.next;
  }

  // 遍历A和B链表，找到第一个相同的节点
  while (curA && curB) {
    if (curA === curB) {
      return curA;
    }
    curA = curA.next;
    curB = curB.next;
  }

  return null;
}