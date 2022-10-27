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

//approach
//declare odd and even ListNode
//if index is odd add to odd list
//if index is even add to even list
// join both list 

const oddEvenList = function(head) {
    let odd_head = new ListNode(0)
    let even_head = new ListNode(0);
    let odd = odd_head
    let even = even_head
    let curr = head;
    let i = 1;
    while(curr != null){
         if(i % 2 === 0){
            even.next = curr
            even = even.next
         }else{
            odd.next = curr
            odd= odd.next
         }
         i++
         curr= curr.next
    }
    even.next = null
    odd.next = even_head.next
    return odd_head.next
};