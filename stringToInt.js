// You are given a string s containing digits from "0" to "9" and lowercase alphabet characters. Return the sum of the numbers found in s.

class Solution {
    solve(s) {
        let final = 0
        let toAdd = ''
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '0' || s[i] === '1' || s[i] === '2' || s[i] === '3' || s[i] === '4' || s[i] === '5' || s[i] === '6' || s[i] === '7' || s[i] === '8' || s[i] === '9') {
                toAdd += s[i]
            } else {
                if (toAdd.length !== 0) {
                    final += parseInt(toAdd, 10)
                    toAdd = ''
                }
            }
        }
        console.log(final)
        if(toAdd.length !== 0) {
            final += parseInt(toAdd, 10)
        }
        return final
    }
}