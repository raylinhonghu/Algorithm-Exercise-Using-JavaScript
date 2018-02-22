/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var length = nums.length;
    for (var i = 0; i < length; i ++){
        for (var j = 1; j < length; j++){
            if (nums[i]+nums[j] == target && i!=j){
                return [i,j];
            }
        }
    }
    alert('NO MATCH FOUND');
};

// NOTE:for iterating arrays for-in should be avoided,
// that statement is meant to enumerate object properties.
