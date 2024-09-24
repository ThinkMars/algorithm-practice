import type { TreeNode } from './treeNode.ts'

// N叉树遍历

export function levelN(root: TreeNode | null) {
  if (!root) return []
  const res: number[][] = []
  const queue: TreeNode[] = [root]

  while (queue.length) {
    const len = queue.length
    const level: number[] = []

    for (let i = 0; i < len; i++) {
      const node = queue.shift()!
      level.push(node.val)
      // 这里的children是数组，代表着有多个子节点
      queue.push(...node.children)
    }
    res.push(level)
  }

  return res
}