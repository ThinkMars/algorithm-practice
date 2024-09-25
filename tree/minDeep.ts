import type { TreeNode } from './treeNode';

// 树的最小深度
// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
export function minDepth(root: TreeNode | null): number {
  let min = 0;
  if (root === null) {
    return min;
  }

  const stack = [root];

  while (stack.length) {
    const len = stack.length;
    min++;

    for (let i = 0; i < len; i++) {
      const node = stack.shift()!;

      if (node.left === null && node.right === null) {
        return min;
      } else {
        if (node.left !== null) {
          stack.push(node.left);
        }
        if (node.right !== null) {
          stack.push(node.right);
        }
      }
    }
  }

  return min;
}