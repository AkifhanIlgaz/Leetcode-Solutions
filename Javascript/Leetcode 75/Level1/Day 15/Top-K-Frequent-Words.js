/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
 const topKFrequent = function(words, k) {
    let map = new Map();
    words.forEach(word => {
        if(map.has(word)) {
            map.set(word, map.get(word) + 1);
        }
        else {
            map.set(word, 1);
        }
    });

    return [...map].sort((x, y) => {
        const f1 = x[1], f2 = y[1]
        if (f1 < f2) return 1;
        if (f1 > f2) return -1;
        return x[0].localeCompare(y[0]);
    }).map(x => x[0]).slice(0, k);
};