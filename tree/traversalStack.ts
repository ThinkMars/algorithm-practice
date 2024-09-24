import type { TreeNode } from './treeNode'
// 使用栈来遍历二叉树

// 中左右
export function preTraversalStack(root: TreeNode) {
  if (root === null) {
    return [];
  }

  let res = []

  const stack: TreeNode[] = [root];

  while (stack.length > 0) {
    const node = stack.pop()!;

    res.push(node.val);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }

  return res;
}

// 左中右
export function inTraversalStack(root: TreeNode) {
  if (root === null) {
    return [];
  }

  let res = [];

  const stack: TreeNode[] = [];

  let curNode = root;

  while(curNode || stack.length > 0) {
    if (curNode !== null) {
      stack.push(curNode);
      curNode = curNode.left!;
    } else {
      const node = stack.pop()!;
      res.push(node.val);
      curNode = node.right!;
    }
  }

  return res;
}

// 左右中
export function postTraversalStack(root: TreeNode) {
  if (root === null) {
    return [];
  }

  let res = [];

  const stack: TreeNode[] = [root];

  while (stack.length > 0) {
    const node = stack.pop()!;
    res.push(node.val);
    if (node.left) {
      stack.push(node.left);
    }
    if (node.right) {
      stack.push(node.right);
    }
  }

  // 这里做了一个处理，上面的顺序是中右左，所以需要反转一下，变成左右中
  return res.reverse();
}