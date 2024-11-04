/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let currentTank = 0
    let totalTank = 0
    let startIndex = 0

    for (i=0; i<gas.length; i++) {
        totalTank += gas[i] - cost[i]
        currentTank += gas[i] - cost[i]


        if (currentTank < 0) {
            startIndex = i + 1
            currentTank = 0
        }
    }

    if (totalTank >= 0) {
        return startIndex
    }
    return -1
};
