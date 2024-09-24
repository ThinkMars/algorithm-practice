import type { TreeNode } from './treeNode.ts'

// 层序遍历，一个打十个
export function levelOrder(root: TreeNode | null): number[][] {
  let res: number[][] = [];
  if (!root) return res;

  let queue: TreeNode[] = [root];

  let tempArr = [];

  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift()!;
      tempArr.push(node!.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    res.push([...tempArr]);
    tempArr = [];
  }

  return res;
  // return res.reverse(); // 如果需要从底层往上，则反转
}