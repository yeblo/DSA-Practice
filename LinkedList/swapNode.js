https://leetcode.com/problems/swap-nodes-in-pairs/

//Review
var swapPairs = function(head) {

    if(head === null|| head.next === null){
        return head
    }

    let dummy = new ListNode()
    prev = dummy
    curr = head
    
    while(curr !== null && curr.next !== null){
        //save ptrs
        let temp = curr.next.next
        let temp2 = curr.next

        //reverse pairs
        temp2.next = curr
        prev.next = temp2
        curr.next = temp

        //update ptrs
        prev = curr
        curr = curr.next
    }
   
    return dummy.next
};