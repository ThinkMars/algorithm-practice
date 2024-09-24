import { ListNode } from './listNode.ts'

export function swapPairs(head: ListNode | null): ListNode | null {
  if (head === null) return null

  const virtualHead = new ListNode(0, head)

  let cur = virtualHead

  while (cur.next !== null && cur.next.next !== null) {
    // 获取第一个节点
    const first = cur.next
    const second = cur.next.next
    const third = cur.next.next.next

    // 虚拟头指向第二个节点
    cur.next = second

    // 第二个节点指向第一个节点
    second.next = first

    // 第二个节点指向第三个节点
    first.next = third

    // cur指向第一个节点，此时cur指向第二个节点，值为first
    cur = first
  }

  return virtualHead.next
}