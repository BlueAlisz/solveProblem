//Definition for a binary tree node.
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
    return TreeNode;
}());
var root1 = new TreeNode(3, new TreeNode(5, new TreeNode(6), new TreeNode(2, new TreeNode(7), new TreeNode(4))), new TreeNode(1, new TreeNode(9), new TreeNode(8)));
var root2 = new TreeNode(3, new TreeNode(5, new TreeNode(6), new TreeNode(7)), new TreeNode(1, new TreeNode(4), new TreeNode(2, new TreeNode(9), new TreeNode(8))));
var root3 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
var root4 = new TreeNode(1, new TreeNode(3), new TreeNode(2));
function leafSimilar(root1, root2) {
    var leafValues1 = getLeafValues(root1);
    var leafValues2 = getLeafValues(root2);
    return (JSON.stringify(leafValues1) == JSON.stringify(leafValues2)) ? true : false;
}
function getLeafValues(root) {
    var leafValues = [];
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
