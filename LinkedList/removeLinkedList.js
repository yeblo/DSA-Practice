/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

 const removeElements = function(head, val) {

    let dummyNode = new ListNode(-1);
    dummyNode.next = head
    let prev = dummyNode
    let curr = head

    while(curr !== null){
        if(curr.val === val){
            prev.next = curr.next
        }else{
            prev = curr
        }
        curr = curr.next
    }

    return dummyNode.next

}


// const removeElements = function(head, val) {
//   while(head !== null && head.val === val){
//       head = head.next
//   }
//   let currNode = head

//   while(currNode !== null && currNode.next !== null){
//       if(currNode.next.val === val){
//           currNode.next === currNode.next.next
//       }else{
//           currNode = currNode.next
//       }
//   }
//   return head
// };

// const removeElements = function(head,val){
//     let newNode = new ListNode()
//     let temp = newNode
//     let curr = head

//     while(curr !== null){
//         if(curr.val !== val){
//             temp.next = curr
//             temp = temp.next
            
//         }
//         curr = curr.next
//     }
//     temp.next = null
//     return newNode.next
// }