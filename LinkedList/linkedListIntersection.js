/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

//figure out length of both linked list
//if the length of list A is greater than length b
    // move head to number of iteration
//vice versa
//if the length = 0

 
const getIntersectionNode = function(headA, headB) {
    let countA = getLength(headA)
    let countB = getLength(headB)
    let head1 = headA
    let head2 = headB
    let diff = 0
    if(countA > countB){
        diff = countA - countB
        for(let i = 0; i< diff; i++){
            head1 = head1.next
       }
    }
    if(countB > countA){
        diff = countB - countA
        for(let i = 0; i < diff; i++){
            head2 = head2.next
       }
    }
   
    while(head1 != null && head2 != null){
        if(head1 === head2){
            return head1
        }
        head1 = head1.next
        head2 = head2.next
    }
   
    return null
   };
   
   
   const getLength = function(head){
       let count = 0
       while(head != null){
           head = head.next
           count++
       }
       return count
   }