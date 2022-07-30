TIme Complexity = O(N)
Space Complexity = 0(1)

//Note that you move tot the next character when you encounter a non-alphanumeric character

let isPalindrome = function(string) {
    let left = 0;
    let right = string.length -1;
    string = string.toLowerCase()
    const alpha = "abcdefghijklmnopqrstuvwxyz"
   while(left < right){
       while(left < right && !alpha.split("").includes(string[left])){
           left++
       }
       while(left < right && !alpha.split("").includes(string[right])){
           right--
       }
       
       if(string[left] != string[right]){
           return false
       }
       
       left++
       right--
   }
   
   return true
};
