/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sMap = {}

    if (s.length !== t.length) return false

    for (char of s) {
        sMap[char] = (sMap[char] || 0) + 1
    }

    for (char of t) {
        if (!sMap[char] || sMap[char] <= 0) return false
        sMap[char] -= 1
    }
    return true
};
