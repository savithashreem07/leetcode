/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
var maxFreq = function(s, maxLetters, minSize, maxSize) {
    let occMap = new Map()
    let max = 0

    var countUnique = function(subString) {
        let uniqueSet = new Set(subString)

        return uniqueSet.size
    }

    for (let i=0; i <= s.length-minSize; i++) {
        let substring = s.substring(i, i+minSize)

        if (countUnique(substring) <= maxLetters) {
            occMap.set(substring, (occMap.get(substring) || 0 ) + 1)
            max = Math.max(max, occMap.get(substring))
        }
    }

    return max
};
