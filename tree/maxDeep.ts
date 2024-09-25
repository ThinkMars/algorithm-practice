import type { TreeNode } from './treeNode';

// 求树的最大深度
export function maxDepth(root: TreeNode | null): number {
  // 二叉树的 最大深度 是指从根节点到最远叶子节点的最长路径上的节点数。
  let deep = 0;

  if (!root) {
    return deep;
  }

  const stack = [root];

  while(stack.length) {
    const len = stack.length;

    deep++;

    for (let i = 0; i < len; i++) {
      const node = stack.shift()!;
      if (node.left) {
        stack.push(node.left);
      }
      if (node.right) {
        stack.push(node.right);
      }
    }
  }

  return deep;
}