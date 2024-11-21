/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let index = digits.length - 1

    for (i=index; i>=0; i--) {
        if (digits[i] < 9) {
            digits[i]++
            return digits
        }

        digits[i] = 0
    }

    digits.unshift(1)
    return digits


};
