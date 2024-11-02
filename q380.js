
var RandomizedSet = function() {
    this.randomSet = new Map()
    this.list = []

};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.randomSet.has(val)) {
        return false
    } else {
        this.randomSet.set(val, this.list.length)
        this.list.push(val)
        return true
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.randomSet.has(val)) {
        return false
    }
    let index = this.randomSet.get(val)
    let element = this.list[this.list.length - 1]

    this.list[index] = element
    this.randomSet.set(element, index)
    this.list.pop()
    this.randomSet.delete(val)
    return true
    
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let randomIndex = Math.floor(Math.random() * this.list.length)
    return this.list[randomIndex]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
