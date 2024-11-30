/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (!inorder.length || !postorder.length) return null

    let rootVal = postorder.pop()
    let root = new TreeNode(rootVal)

    let rootIndex = inorder.indexOf(rootVal)

    let rightInorder = inorder.slice(rootIndex + 1)
    let leftInorder = inorder.slice(0, rootIndex)

    let rightPostorder = postorder.slice(leftInorder.length)
    let leftPostorder = postorder.slice(0, leftInorder.length)

    root.right = buildTree(rightInorder, rightPostorder)
    root.left = buildTree(leftInorder, leftPostorder)

    return root
};
