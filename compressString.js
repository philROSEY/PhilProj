// Given a string lowercase alphabet s, eliminate consecutive duplicate characters from the string and return it.

// That is, if a list contains repeated characters, they should be replaced with a single copy of the character. The order of the elements should not be changed.

class Solution {
    solve(s) {
        let final = ''
        for (let i = 0; i < s.length; i++) {
            if (s[i] !== s[i-1] && s[i] !== s[i+1]) {
                final += s[i]
            }
            if (s[i] === s[i-1] && s[i] !== s[i+1]) {
                final += s[i]
            }
        }
        return final
    }
}