const peakIndexInMountainArray = function(arr) {
    let left = 0
    let right = arr.length - 1
    
    return binarySearchHelper(arr,left,right)
};

let binarySearchHelper = function(arr,left,right){
    
    while(left < right){
        
      let mid = parseInt((left + right)/2)
        if(arr[mid]< arr[mid + 1]){
            left = mid + 1
        }else{
            right = mid
        }
    }
    
return left 
}
