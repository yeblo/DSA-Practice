/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */


//find Pivot using Binary search
//find correct index using binary search

 const search = function(nums, target) {
    let left = 0
    let right = nums.length - 1 

    if(target === nums[left]){
        return left
    }

    if(target === nums[right]){
        return right
    }



    let pivot = findPivot(nums,left,right)

    if(target === nums[pivot]){
        return pivot
    }
    else if(target > nums[pivot] && target < nums[right]){
        left = pivot + 1
    }
    else{
        right = pivot - 1
    }

 return findTarget(nums,left,right,target)
};


let findPivot = function(nums,left,right){
    while(left < right){
        let mid = parseInt((left + right)/2)
        if(nums[mid] < nums[right]){
            right = mid
        }

        if(nums[mid] > nums[right])
        {
            left = mid + 1
        }
    }
    return left
}

let findTarget = function (nums,left,right,target){
    

    while(left <= right){
        let mid = parseInt((left + right)/2)
    if(nums[mid] === target){
                return mid
            }

            if(target > nums[mid]){
                left = mid + 1
            }else{
                right = mid - 1
            }
    }
        return - 1
    }


