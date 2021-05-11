// You are given a two-dimensional matrix of unique strings representing city blocks, and a list of strings blocks to visit. 
// Given that you are sitting at block matrix[0][0], return the total Manhattan distance required to visit every block in order.

class Solution {
    solve(matrix, blocks) {
        let location = [0,0]
        let final = 0
        let calc = () => {
        for (let i = 0; i < blocks.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                for (let k = 0; k < matrix[j].length; k++) {
                    if (matrix[j][k] === blocks[i]) {
                        final += Math.abs(location[0] - j)
                        final += Math.abs(location[1] - k)
                        location = [j,k]
                    }
                }
            }
        }
        }
        calc()
        return final
   }
}