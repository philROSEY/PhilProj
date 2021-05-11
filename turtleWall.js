// You are given a list of integers nums representing stock prices of a company in chronological order. 
// You can buy at most one share of stock per day, but you can hold onto multiple stocks and can sell stocks on any number of days. 
// Return the maximum profit you can earn.





class Solution {
    solve(nums) {
        let final = 0
        let max = 0
        let bought = []
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > max) {
                max = nums[i]
            }
        }
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === max) {
                for (let j = 0; j < bought.length; j++) {
                    if (max-bought[j] > 0)
                    final += (max-bought[j])
                }
                bought = []
                max = 0
                for (let k = i+1; k < nums.length; k++) {
                    if (nums[k] > max)
                    max = nums[k]
                }
            }
            else {
                bought.push(nums[i])
            }
        }
        return final
    }
}