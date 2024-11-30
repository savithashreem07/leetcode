/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (!preorder.length || !inorder.length) return null

    const rootVal = preorder[0]
    let root = new TreeNode(rootVal)

    const rootIndex = inorder.indexOf(rootVal)

    const leftInorder = inorder.slice(0, rootIndex)
    const rightInorder = inorder.slice(rootIndex + 1)

    const leftPreorder = preorder.slice(1, leftInorder.length + 1)
    const rightPreorder = preorder.slice(leftInorder.length + 1)

    root.left = buildTree(leftPreorder, leftInorder)
    root.right = buildTree(rightPreorder, rightInorder)

    return root
};
