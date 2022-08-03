var maxArea = function(height) {
    let maxArea = 0
    let left = 0
    let right = height.length - 1
    
    
    while (left < right){
        
        width = right - left
        const temp = width * Math.min(height[left], height[right])
        maxArea = Math.max(maxArea, temp)
        
        if(height[left] > height[right]){
            right--;
        }
        else{
            left++
        }
    }
    
    
    return maxArea
};
