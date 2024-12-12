/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    s = s.split('')

    let left = 0
    let right = s.length - 1

    while (left < right) {
        if (vowels.includes(s[left]) && vowels.includes(s[right])) {
            let temp = s[left]
            s[left] = s[right]
            s[right] = temp
            right--
            left++
        }

        if (!vowels.includes(s[left])) {
            left++
        }

        if (!vowels.includes(s[right])) {
            right--
        }
    }

    return s.join('')
};
