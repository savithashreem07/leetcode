/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return []

    let result = []
    let queue = [root]

    while (queue.length) {
        let levelSize = queue.length
        let level = []

        for (let i=0; i<levelSize; i++) {
            let node = queue.shift()
            level.push(node.val)

            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        
        if (!result.length || result.length % 2 == 0) result.push(level)
        else result.push(level.reverse())
    }

    return result
};
