/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let open = ['(', '{', '[']
    let close = [')', '}', ']']
    let stack = []

    for (i=0; i<s.length; i++) {

        if (i==0 && close.includes(s[i])) {
            return false
        }

        if (open.includes(s[i])) {
            stack.push(s[i])
        } else if (close.includes(s[i])) {
            if(open.indexOf(stack.pop()) !== close.indexOf(s[i])) {
                return false
            }
        }
    }

    if (stack.length == 0) return true
    return false
};
