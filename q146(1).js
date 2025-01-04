/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.cache = new Map()
    this.head = {}
    this.tail = {}
    this.head.next = this.tail
    this.tail.prev = this.head
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.cache.has(key)) {
        return -1
    }

    const node = this.cache.get(key)
    this.removeNode(node)
    this.addToFront(node)
    return node.value
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        this.removeNode(this.cache.get(key))
    } else if (this.cache.size === this.capacity) {
        const lru = this.tail.prev
        this.removeNode(lru)
        this.cache.delete(lru.key)
    }

    const node = {key, value}
    this.addToFront(node)
    this.cache.set(key, node)
};

LRUCache.prototype.addToFront = function(node) {
    node.next = this.head.next
    node.prev = this.head
    this.head.next.prev = node
    this.head.next = node
}

LRUCache.prototype.removeNode = function(node) {
    node.next.prev = node.prev
    node.prev.next = node.next
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
