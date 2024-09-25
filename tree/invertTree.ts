import type { TreeNode } from './treeNode.ts'

// 翻转二叉树（递归法）
export function invertTree(root: TreeNode | null): TreeNode | null {
  
  if (!root) return null

  let tempNode = root.left
  root.left = root.right
  root.right = tempNode

  invertTree(root.left)
  invertTree(root.right)
  
  return root
}

// 使用层次遍历
export function invertTree2(root: TreeNode | null): TreeNode | null {
  if (!root) return null

  const stack = [root]

  while (stack.length) {
    const node = stack.pop()!;
    
    // 把左右做个交换

    let tempNode = node.left
    node.left = node.right
    node.right = tempNode

    if (node.left) stack.push(node.left)
    if (node.right) stack.push(node.right)
  }

  return root
}