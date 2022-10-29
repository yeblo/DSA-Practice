const rotateRight = function(head, k) {
    let curr = head
    let prev = null
    let i=1
    if(head === null ||head.next === null){
    return head
}
    while(curr.next != null){
        curr = curr.next
        i++;
    }


    //this is very important
    //if k is greater than length of the list, you want to reduce k to a number that is easy to work with, hence modulus
    k = k % i

    if( k === 0){
        return head
    }
    
    let newHead = head

    //remember that you want to stop the pointer at i-1
    // because the pointer at i should be the new head
    //the pointer at i - 1 should point to null
    while(k < i-1 ){
        newHead = newHead.next
        k++ // k is incremented
    }

   
    let finalHead = newHead.next
    newHead.next = null
    curr.next = head
    return finalHead

  
};