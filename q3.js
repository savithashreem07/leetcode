/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0
    let start = 0
    let charSet = new Set()

    for (let i=0; i<s.length; i++) {
        while (charSet.has(s[i])) {
            charSet.delete(s[start])
            start += 1
        }
        charSet.add(s[i])
        max = Math.max(max, i - start + 1)
    }

    return max
};
