/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = []

    let pathArray = path.split('/').filter(val => val !== '')

    for (i=0; i<pathArray.length; i++) {
        if(pathArray[i] == '..') {
            if(stack.length > 0) {
                stack.pop()
            }
        } else if (pathArray[i] == '.') {
            continue
        } else {
            stack.push(pathArray[i])
        }
    }

    return '/' + stack.join('/')
};
