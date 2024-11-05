/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0
    let right = s.length - 1

    while  (left < right) {
        const isLeft = s[left].match(/^[a-zA-Z0-9]$/)
        const isRight = s[right].match(/^[a-zA-Z0-9]$/)
        if (isLeft && isRight) {
            if (s[left].toLowerCase() === s[right].toLowerCase()) {
                left++
                right--
            } else {
                return false
            }
        } else {
            if (isLeft) right--
            else left++
        }
    }

    return true
};
