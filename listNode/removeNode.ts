import { ListNode } from './listNode.ts'
/**
 * 删除链表的节点
 */
export function removeNode(head:ListNode, val:number):ListNode|null{
  // 使用虚拟节点，避免删除头节点
  // 虚拟节点的next指向头节点
  const virtualHead = new ListNode(0,head)

  let pre = virtualHead
  let cur = virtualHead.next // 当前从头结点开始遍历

// 遍历链表
  while(cur){
    // 如果当前节点的值等于val
    if (cur.val === val) {
      // 将当前节点的下一个节点赋值给前一个节点（删除关键）
      pre.next = cur.next
    } else {
      // 否则将当前节点赋值给前一个节点
      pre = cur
    }
    // 将当前节点赋值给下一个节点
    cur = cur.next
  }

  return virtualHead.next
}