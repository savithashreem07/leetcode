/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let wordMap =new Map()
    let patternMap = new Map()
    let sArray = s.split(' ')

    if (pattern.length !== sArray.length) return false

    for (let i=0; i<pattern.length; i++) {
        let sVal = sArray[i]
        let pVal = pattern[i]
        if ((wordMap.has(sVal) && wordMap.get(sVal) !== pVal) ||
        ((patternMap.has(pVal) && patternMap.get(pVal) !== sVal))) {
            return false
        }

        wordMap.set(sVal, pVal)
        patternMap.set(pVal, sVal)
    }

    return true
};
