/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 const searchInsert = function(nums, target) {
    
    let left = 0
    let right = nums.length - 1
    
    while(left <= right){
        let mid = parseInt((left + right)/2)

        if(nums[mid] === target){
            return mid
        }

        if(target < nums[mid]){
            right = mid - 1
        }else{
            left = mid + 1
        }
    }

//return left or right + 1
return left
};