var levelOrderBottom = function(root) {
    let res = []
    if(root === null){
        return res
    }
    let queue = [root]

    while(queue.length > 0){
        let len = queue.length
        let children = []
        for(let i = 0; i<len; i++){
            let currNode = queue.pop()
            children.push(currNode.val)
            if(currNode.left != null){
                queue.unshift(currNode.left)
            }
            if(currNode.right != null){
                queue.unshift(currNode.right)
            }
        }
        res.push(children)
    }
    return res.reverse()
};