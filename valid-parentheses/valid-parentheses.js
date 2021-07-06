/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const array = s.split('');
    const bracketDict = {"(": ")", "{": "}", "[": "]"};
    const openBrackets = [];
    
    const valid = array.every(item => {
        if (Object.keys(bracketDict).includes(item)) {
            openBrackets.push(item);
            return true;
        }
        return (openBrackets.length > 0 && bracketDict[openBrackets.pop()] === item);
    });
    
    if (openBrackets.length > 0) return false;
    return valid;
};