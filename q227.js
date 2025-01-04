/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let stack = []
    let operator = '+'
    let currNum = 0

    for (let i=0; i<s.length; i++) {
        let char = s[i]

        if (/\d/.test(char)) {
            currNum = currNum * 10 + (char - '0')
        }

        if ((!(/\d/.test(char)) && s[i] !== ' ') || i == s.length-1) {
            if (operator == '+') {
                stack.push(currNum)
            } else if (operator == '-') {
                stack.push(-currNum)
            } else if (operator == '*') {
                stack.push(stack.pop() * currNum)
            } else if (operator == '/') {
                stack.push(Math.trunc(stack.pop() / currNum))
            }

            operator = char
            currNum = 0
        }
    }

    return stack.reduce((sum, num) => num + sum, 0)
};
