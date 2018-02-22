/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var newNum = nums1.concat(nums2);
    for(var i =0; i < newNum.length; i ++){
        for(var j =0; j < newNum.length; j ++){
            if(newNum[i]<newNum[j]){
                var tmp = newNum[i];
                newNum[i] = newNum[j];
                newNum[j] = tmp;
            }
        }
    }
    if(newNum.length ==1){
        return newNum[0];
    }

    if(newNum.length%2 == 0){
        return (newNum[newNum.length/2-1]+newNum[newNum.length/2])/2;
    }else{
        return newNum[Math.floor(newNum.length/2)];
    }
};
