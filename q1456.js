/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let currentLen = 0
    let maxLen = 0

    for (i=0; i<k; i++) {
        if (vowels.includes(s[i])) currentLen++
    }
    
    maxLen = currentLen

    for (i=k; i<s.length; i++) {
        if (vowels.includes(s[i-k])) currentLen--
        if (vowels.includes(s[i])) currentLen++
        maxLen = Math.max(maxLen, currentLen)
    }

    return maxLen
};
