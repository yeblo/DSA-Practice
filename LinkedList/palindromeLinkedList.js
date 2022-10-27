

//using fast pointer slow pointer approach
const isPalindrome1 = function(head) {
    //Approach
        //Fast Pointer, Slow Pointer
        //once slow is in the middle, reverse half of the list
        //compare it to the current list
        let fast = head
        let slow = head
        let next = null;
        let prev = null
        while(fast !== null && fast.next !== null){
            fast = fast.next.next
            slow = slow.next 
        }

    //reversed list
        while(slow != null){
            next = slow.next;
            slow.next = prev;
            prev = slow
            slow = next
        }
  
  while(prev !== null){
      if(prev.val != head.val){
          return false
      }

      prev = prev.next;
      head = head.next;
  }
return true

    
};



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
