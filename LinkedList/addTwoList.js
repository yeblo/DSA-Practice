
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    var sum = 0;

    //first init
    var resNode = new ListNode();
    var copyNode = resNode;
    
    //start iteration
    while(l1!=undefined || l2!=undefined || sum!= 0)
    {
        if(l1!=undefined)
        {
            sum += l1.val;
            l1 = l1.next;
        }
        
        if(l2!=undefined)
        {
            sum += l2.val;
            l2 = l2.next;
        }
        
        var newNode = new ListNode();
        newNode.val = sum%10;
        copyNode.next = newNode;
        copyNode = newNode;
        
        sum = parseInt(sum/10);
        
    }
    
return resNode.next;

};
