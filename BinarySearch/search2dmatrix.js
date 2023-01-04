const searchMatrix = function(matrix, target) {
    let row = matrix.length;
    let col = matrix[0].length - 1


    for(let i = 0; i< row ;i++){
        if(matrix[i][col] === target){
            return true
        }

        if(matrix[i][col] > target){
              let left = 0
              let right =  matrix[i].length -1

            while(left <= right){
                let mid = parseInt((left + right)/2)
                
                if(matrix[i][mid] === target){
                    return true
                }

                 if(matrix[i][mid] < target){
                    left = left + 1
                }else{
                    right = mid - 1
                }

            }
        }
    }

   

    return false
}
