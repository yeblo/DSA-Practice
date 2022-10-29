const plusOne = function(head) {
    //reverse list
     let reverse = reverseList(head)
     
     let curr = reverse
     let previous = reverse

     let sum = curr.val + 1
     let carry =  parseInt(sum / 10)
     curr.val = sum % 10
     curr = curr.next

     while(curr != null){
         previous = curr
         sum = curr.val + carry
         curr.val = sum % 10
         carry = parseInt(sum/10)
         curr = curr.next
     }

     if(carry > 0){
         let carryNode = new ListNode(carry)
         previous.next = carryNode
     }
  

    return reverseList(reverse)
    
};


const reverseList = function(head){
    let next = null
    let prev = null
    let curr = head

    while(curr != null){
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    return prev
}


































// var plusOne = function(head) {
//     let i = 0;
//      let storNum = ''
//      let curr = head
//      storNum += `${curr.val}`
     
//      while(curr.next != null)
//      {
//          curr = curr.next
//          storNum += `${curr.val}`
//          i++;
//      }
     
//      let sum = Number(storNum) + 1
//      console.log(sum)
 
//      let dummyNode = new ListNode(0)
//      let copyNode = dummyNode
 
//      let newSum = sum.toString()
//      for(let j = 0; j< newSum.length; j++)
//      {
//          let newNode = new ListNode()
//          newNode.val = newSum.charAt(j)
//          copyNode.next = newNode
//          copyNode = copyNode.next
//      }    
 
//      return dummyNode.next
//  };