/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    let res = new Array (nums.length)    
    let left = 0;
    let right = nums.length - 1
    let i = nums.length - 1
    while(left <= right){
        if(Math.abs(nums[left]) > Math.abs(nums[right])){
            res[i] = nums[left] * nums[left]
            left ++
        }else{
            res[i] = nums[right] * nums[right]
            right --
        }
        i--
    }

    return res
};