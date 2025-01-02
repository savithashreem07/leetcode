var minDuration = function(slot1, slot2, duration) {
    slot1.sort((a, b) => a[0] - b[0])
    slot2.sort((a, b) => a[0] - b[0])

    let i=0
    let j=0
    while (i<slot1.length && j<slot2.length) {
        let start = Math.max(slot1[i][0], slot2[j][0])
        let end = Math.min(slot1[i][1], slot2[j][1])

        if (end - start >= duration) {
            return [start, start + duration]
        }

        if (slot1[i][1] < slot2[j][1]) {
            i++
        } else {
            j++
        }
    }

    return []
}
