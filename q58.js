/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // s = s.trim().split(' ')
    // return s[s.length - 1].length

    // Alternate solution
    let lastWord = s.split(' ').filter(word => word !== '')
    return lastWord[lastWord.length - 1].length
};
