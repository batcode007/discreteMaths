/**
 * @param {TreeNode} root
 * @return {number}
 */
const heightOfTree = function(root) {
    if(!root)   return 0
    return 1 + Math.max(heightOfTree(root.left), heightOfTree(root.right))
};
