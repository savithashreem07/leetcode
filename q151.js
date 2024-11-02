/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.split(' ').filter(word => word !== '')
    words.reverse()
    // reverse(0, words.length-1)

    // function reverse (start, end) {
    //     while (start < end) {
    //         let temp = words[start]
    //         words[start] = words[end]
    //         words[end] = temp
    //         start++
    //         end--
    //     }
    // }

    return words.join(' ')
};
