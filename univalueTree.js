// Given a binary tree root, return whether all values in the tree are the same.

class Solution {
    solve(root) {
        const check = root.val
        let final = true
        const checkTree = (tree) => {
            if (tree.val !== check) {
                final = false
                return
            }
            if (tree.left) {
                checkTree(tree.left)
            }
            if(tree.right) {
                checkTree(tree.right)
            }
        }
        checkTree(root)
        return final
    }
}