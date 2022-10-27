
//using arrays
const isPalindrome = function (head){
    let array = []
    let curr = head
    

    while(curr != null){
        array.push(curr.val);
        curr = curr.next
    }
    let left = 0
    let right = array.length - 1
    while(left < right){
        if(array[left] !== array[right]){
            return false
        }
        left++
        right--
    }

    return true
}
