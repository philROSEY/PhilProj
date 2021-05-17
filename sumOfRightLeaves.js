

//Given a binary tree root, return the sum of all leaves that are right children.


class Solution {
    solve(root) {
        if (!root) {
            return 0
        }
        let final = 0
        const adder = (tree) => {
            if (tree.right) {
                if(!tree.right.right && !tree.right.left) {
                    final += tree.right.val
                }
                adder(tree.right)
            }
            if (tree.left) {
                adder(tree.left)
            }
        }
        adder(root)
        return final
    }
}