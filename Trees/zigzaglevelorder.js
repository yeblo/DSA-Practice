var zigzagLevelOrder = function(root) {
    let queue = [root];
    let res = [];
    if (root === null) {
        return res
    } 
    let depth = 0
    while(queue.length != 0){
        let n = queue.length
        let list = []
        for(let i = 0; i < n; i++){
           let currnode = queue.pop()
           list.push(currnode.val)


            if(currnode.left != null){
                queue.unshift(currnode.left)
            }
            if(currnode.right != null){
                queue.unshift(currnode.right)
            }
        }
        if(depth % 2 != 0){
            list.reverse()
        }
        res.push(list) 
        depth++
        
    }
    return res
};