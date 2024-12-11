/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let anaMap = new Map()

  for (let i=0; i<strs.length; i++) {
    let sorted = strs[i].split('').sort().join('')

    if (!anaMap.has(sorted)) {
        anaMap.set(sorted, [])
    }

    anaMap.get(sorted).push(strs[i])
  }

  return Array.from(anaMap.values())
};
