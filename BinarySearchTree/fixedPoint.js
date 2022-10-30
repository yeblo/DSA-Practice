const fixedPoint = function(arr){

    let left = 0;
    let right = arr.length - 1
    let res = -1
    while(left <= right){
        let mid = parseInt((left + right)/2)

        if (arr[mid] === mid){
            res = mid
        }
              
        if(mid > arr[mid]){
            left = mid + 1
        }else{
            right = mid - 1
        }
    }

    return res 
}