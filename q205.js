/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let isoMapS = {}
    let isoMapT = {}

    for (i=0; i<s.length; i++) {
        if ((isoMapS[s[i]] && isoMapS[s[i]] !== t[i]) || (isoMapT[t[i]] && isoMapT[t[i]] !== s[i])) {
            return false
        }

        isoMapS[s[i]] = t[i]
        isoMapT[t[i]] = s[i]
    }

    return true
};
