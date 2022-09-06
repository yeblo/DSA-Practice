/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    const freq = {}
    const res =[]
    for(let num in nums){
        
        if(num in freq){
            freq[num]++
        }else{
            freq[num] = 1
        }
        
    }
    
    for (let key in freq){
        if(freq[key] === k){
            res.push(key)
        }
    }
    
    return res;
};
