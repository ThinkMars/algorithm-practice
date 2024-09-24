import type { TreeNode } from './treeNode';

// 返回二叉树的右视图，相当于把最右边的值放入结果数组
export function rightSideView(root: TreeNode | null): number[] {
  if (!root) return [];

  const res: number[] = [];
  const queue: TreeNode[] = [root];

  while (queue.length) {
    for (let i = 0; i < queue.length; i++) {
      const tempNode = queue.shift()!;

      // 当i为当前层最后一个节点时，把当前节点值加入结果数组
      if (i === queue.length - 1) {
        res.push(tempNode.val);
      }

      if (tempNode.right) {
        queue.push(tempNode.right);
      }
      if (tempNode.left) {
        queue.push(tempNode.left);
      }
      
    }
  }

  return res;
}