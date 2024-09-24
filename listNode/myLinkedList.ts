import { ListNode } from './listNode.ts'

export class MyLinkedList {
  // 记录列表长度
  private size: number;
  private head: ListNode | null;
  private tail: ListNode | null;
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  get(index: number): number {
    // 索引无效
    if (index < 0 || index >= this.size) {
      return -1;
    }

    const curNode = this.getNode(index);
    // 理论上不会出现null
    return curNode.val;
  }

  // 在链表头部添加一个节点
  addAtHead(val: number) {
    // 创建一个节点，next指向当前头节点
    const node = new ListNode(val, this.head);
    this.head = node;

    if (!this.tail) {
      // 链表为空时，头节点指向该节点
      this.tail = node;
    }

    this.size++
  }

  addAtTail(val: number) {
    // 以尾节点创建一个节点，next指向null
    const node = new ListNode(val, null);

    if (this.tail) {
      this.tail.next = node;
    } else {
      // 链表为空时，头节点指向该节点
      this.head = node;
    }

    this.tail = node;
    this.size++
  }

  addAtIndex(index: number, val: number) {
    if (index === this.size) {
      this.addAtTail(val);
      return
    }

    if (index > this.size) {
      return
    }

    // <=0 的情况，直接添加到头部
    if (index <= 0) {
      this.addAtHead(val);
      return
    }

    // 正常情况
    // 获取插入位置的前一个node
    const curNode = this.getNode(index - 1);
    // 创建一个节点，next指向当前节点next
    const node = new ListNode(val, curNode.next);
    // 前一个节点next指向新节点
    curNode.next = node;
    this.size++
  }

  deleteAtIndex(index: number) {
    if (index < 0 || index >= this.size) {
      return
    }

    // 处理头节点
    if (index === 0) {
      this.head = this.head!.next

      // 如果链表中只有一个元素，删除头节点后，需要处理尾节点
      if(index === this.size - 1) {
        this.tail = null
      }

      this.size--
      return
    }

    const curNode = this.getNode(index - 1);
    // 前一个指向当前的下一个
    curNode.next = curNode.next!.next

    // 处理尾节点
    if (index === this.size - 1) {
      this.tail = curNode
    }

    this.size--

  }

  // 获取指定索引的节点
  private getNode(index: number): ListNode {
    // 创建虚拟节点0, 则第n个节点直接取next[n]
    let curNode = new ListNode(0, this.head);

    for (let i = 0; i <= index; i++) {
      curNode = curNode.next;
    }
    // 理论上不会出现null
    return curNode;
  }
}