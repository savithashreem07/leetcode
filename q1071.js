/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) return ""

    var gcdLen = function (a, b) {
        while (b) {
            let temp = b
            b = a % b
            a = temp
        }
        return a
    }

    let len = gcdLen(str1.length, str2.length)

    return str1.substring(0, len)
};
