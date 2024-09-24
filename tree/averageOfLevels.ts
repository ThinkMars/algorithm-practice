import type { TreeNode } from './treeNode.ts'

// 二叉树的层平均值
export function averageOfLevels(root: TreeNode | null): number[] {
  const result: number[] = [];
  if (!root) return result;

  const queue: TreeNode[] = [root];

  let total = 0;

  while (queue.length) {
    const len = queue.length;
    total = 0;

    for (let i = 0; i < len; i++) {
      const node = queue.shift()!;

      // 将一层的数据相加
      total += node.val

      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }

    result.push(total / len)
  }

  return result
}