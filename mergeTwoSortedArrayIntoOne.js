const arr1 = [2, 6, 6, 8, 9];
const arr2 = [1, 4, 5, 7];
const mergeSortedArrays = (arr1 = [], arr2 = []) => {
   let m = arr1.length;
   let n = arr2.length;
   let currentIndex = m + n;
   const checkNum1HasLargerNumber = (a, b) => {
      if (a < 0) {
         return false;
      };
      if (b < 0) {
         return true;
      };
      return arr1[a] >= arr2[b];
   };
   m -= 1;
   n -= 1;
   while (currentIndex--) {
      let hasNums1LargerNumber = checkNum1HasLargerNumber(m, n);
      arr1[currentIndex] = hasNums1LargerNumber ? arr1[m] : arr2[n];
      if (hasNums1LargerNumber) {
         m -= 1;
      } else {
         n -= 1;
      }
   };
};
mergeSortedArrays(arr1, arr2);
console.log(arr1);