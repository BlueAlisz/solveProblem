//Definition for a binary tree node.
class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
const root1 = new TreeNode(3, new TreeNode(5, new TreeNode(6), new TreeNode(2, new TreeNode(7), new TreeNode(4))), new TreeNode(1, new TreeNode(9), new TreeNode(8)));
const root2 = new TreeNode(3, new TreeNode(5, new TreeNode(6), new TreeNode(7)), new TreeNode(1, new TreeNode(4), new TreeNode(2, new TreeNode(9), new TreeNode(8))));
const root3 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const root4 = new TreeNode(1, new TreeNode(3), new TreeNode(2));
function leafSimilar(root1, root2) {
    const leafValues1 = getLeafValues(root1);
    const leafValues2 = getLeafValues(root2);
    return (JSON.stringify(leafValues1) == JSON.stringify(leafValues2)) ? true : false;
}
function getLeafValues(root) {
    const leafValues = [];
    function traverse(node) {
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
