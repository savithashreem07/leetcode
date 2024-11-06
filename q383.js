/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let ransomMap = {}

    for (char of magazine) {
        ransomMap[char] = (ransomMap[char] || 0) + 1
    }

    for (char of ransomNote) {
        if (!ransomMap[char] || ransomMap[char] <= 0) {
            return false
        }
        ransomMap[char]--
    }

    return true
};
