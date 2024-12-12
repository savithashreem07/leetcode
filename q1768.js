/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = ''
    let w1 = 0
    let w2 = 0

    while ((w1 < word1.length) && (w2 < word2.length)) {
        result += word1[w1] + word2[w2]
        w1++
        w2++
    }

    while (w1 < word1.length) {
        result += word1[w1]
        w1++
    }

    while (w2 < word2.length) {
        result += word2[w2]
        w2++
    }

    return result
};
