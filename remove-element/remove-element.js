/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    const numsWithoutVal = nums.filter(num => num !== val);
    
    numsWithoutVal.forEach((num, index) => nums[index] = num);
    
    return numsWithoutVal.length;
};