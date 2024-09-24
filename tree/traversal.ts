import type { TreeNode } from './treeNode.ts'
// 二叉树的三种遍历

// 前序遍历
export function preOrder(root: TreeNode | null, res: number[]) {
  if (root === null) return;
  res.push(root.val);
  preOrder(root.left, res);
  preOrder(root.right, res);
}

// 中序遍历
export function inOrder(root: TreeNode | null, res: number[]) {
  if (root === null) return;
  inOrder(root.left, res);
  res.push(root.val);
  inOrder(root.right, res);
}

// 后序遍历
export function postOrder(root: TreeNode | null, res: number[]) {
  if (root === null) return;
  postOrder(root.left, res);
  postOrder(root.right, res);
  res.push(root.val);
}
