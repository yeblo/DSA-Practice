//BFS
//main node and children


const BST = (list, root)=>{
    let currentNode = root;
    let queue = []
    queue.push(currentNode)
    let list = []
    while(queue.length !== 0){
        let currentNode = queue.shift()
        list.push(currentNode.val)
        if(currentNode.left){
            queue.push(currentNode.left);
        }
        if(currentNode.right){
            queue.push(currentNode.right);
        }
    }
    return list
}


const BSTRecursion = (root, array, list)=>{


}

//DFS
// - InOrder - left, Mid, right
// - PreOrder  - mid, left, right
// - Post Order - left, right, mid