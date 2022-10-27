/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//Approach - brute force
    //while node.next is not null
        //push node value into an array
    //create a variable mid
    //mid = divide array length by 2
    //return that mid element of array

//approach 2 - Two pointer approach with fast pointer and slow pointer
   //declare two pointers and point to the head
   //fast pointer
   //slow pointer

   //if fast pointer does not equal null 
    //update fast pointer to fastpointer.next.next
    //update slow pointer to slowpointer.next
    //return slowpointer

    const middleNode = function(head) {
        //   let fast_pointer = new ListNode()
        //   let slow_pointer = new ListNode()
        
          fast_pointer = head
          slow_pointer = head
        
          while(fast_pointer != null && fast_pointer.next != null){
              fast_pointer = fast_pointer.next.next
              slow_pointer = slow_pointer.next
          }
        
          return slow_pointer
        };