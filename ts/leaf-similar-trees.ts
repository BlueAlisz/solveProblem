//Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const root1 = new TreeNode(
  3,
  new TreeNode(
    5,
    new TreeNode(6),
    new TreeNode(2, new TreeNode(7), new TreeNode(4))
  ),
  new TreeNode(1, new TreeNode(9), new TreeNode(8))
);

const root2 = new TreeNode(
  3,
  new TreeNode(5, new TreeNode(6), new TreeNode(7)),
  new TreeNode(
    1,
    new TreeNode(4),
    new TreeNode(2, new TreeNode(9), new TreeNode(8))
  )
);

const root3 = new TreeNode(1, new TreeNode(2), new TreeNode(3));

const root4 = new TreeNode(1, new TreeNode(3), new TreeNode(2));

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  const leafValues1 = getLeafValues(root1);
  const leafValues2 = getLeafValues(root2);

  return (JSON.stringify(leafValues1) == JSON.stringify(leafValues2)) ? true : false;
}

function getLeafValues(root: TreeNode | null): number[] {
  const leafValues: number[] = [];

  function traverse(node: TreeNode | null): void {
    if (!node) {
      return;
    }
    if (!node.left && !node.right) {
      leafValues.push(node.val);
    }
    traverse(node.left);
    traverse(node.right);
  }

  traverse(root);
  return leafValues;
}

console.log(leafSimilar(root1, root2));
