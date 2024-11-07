/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []

    for (i=0; i<tokens.length; i++) {
        if (isNaN(tokens[i])) {
            let operand1 = stack.pop()
            let operand2 = stack.pop()
            
            switch (tokens[i]) {
                case '+':
                stack.push(operand1 + operand2)
                break
                case '-':
                stack.push(operand2 - operand1)
                break
                case '*':
                stack.push(operand1 * operand2)
                break
                case '/':
                stack.push(Math.trunc(operand2 / operand1))
                break
            }
        } else {
            stack.push(parseInt(tokens[i]))
        }
    }

    return stack.pop()
};
