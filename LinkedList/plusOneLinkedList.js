var plusOne = function(head) {
    let i = 0;
     let storNum = ''
     let curr = head
     storNum += `${curr.val}`
     
     while(curr.next != null)
     {
         curr = curr.next
         storNum += `${curr.val}`
         i++;
     }
     
     let sum = Number(storNum) + 1
     console.log(sum)
 
     let dummyNode = new ListNode(0)
     let copyNode = dummyNode
 
     let newSum = sum.toString()
     for(let j = 0; j< newSum.length; j++)
     {
         let newNode = new ListNode()
         newNode.val = newSum.charAt(j)
         copyNode.next = newNode
         copyNode = copyNode.next
     }    
 
     return dummyNode.next
 };