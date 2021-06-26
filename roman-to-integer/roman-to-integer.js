/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let count = 0;
    let current;
    let prev = s[s.length-1];
    let map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    for(let i=s.length-1; i>=0; i--){
        current = map[s[i]]
        if(current < prev)
            count -= current
        else
            count += current
        prev = current
    };
    return count;
};