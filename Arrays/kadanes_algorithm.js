function kadanesAlgorithm(array) {
    // Write your code here.
      let maxSum = array[0];
      let sum = array[0];
    
      for(let i = 1; i< array.length; i++){
        sum = Math.max(array[i], array[i] + sum);
        maxSum = Math.max(sum,maxSum)
      }
  
    return maxSum
  }
  
  // Do not edit the line below.
  exports.kadanesAlgorithm = kadanesAlgorithm;
  