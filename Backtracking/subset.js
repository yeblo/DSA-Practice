//time complexity : O(N*2^N)

let subsets = function(nums) {
    let result = []
    let subset = []
    depth = 0
    return subsetsHelper(nums, depth, subset, result)
};


let subsetsHelper = function(nums, depth,subset, result) {
    if(depth === nums.length){
        console.log(`subset before push ${subset}`)
         result.push([...subset])
         console.log(`subset after push ${subset}`)
    }else{
        subsetsHelper(nums, depth + 1, subset,result) //not including the current element
        subset.push(nums[depth])
        subsetsHelper(nums, depth + 1, subset,result)//including the current element
        subset.pop()
    }
    return result
};


console.log(subsets([1,2,3]))