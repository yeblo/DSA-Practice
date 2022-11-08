//DFS
// - InOrder - left, Mid, right
// - PreOrder  - mid, left, right
// - Post Order - left, right, mid

class Node {
    constructor(val) {
        this.key = val;
        this.left = null;
        this.right = null;
    }
}



//Iterative Approach
const inorderTraversalIterative = function(root) {

   
    let stack = []
    let res = []
 if(root === null){
        return res
    }
    while(root !== null || stack.length > 0){
        while(root != null){
            stack.push(root)
            root = root.left
        }

        root = stack.pop()
        res.push(root.val)
        root = root.right
    }

    return res
}




const inorderTraversalRecursive = function(root) {
    let res = []
    if(root === null){
        return res
    }
    return inOrderTraversalHelper(root,res)
};



let inOrderTraversalHelper = function(root ,res){
    if(root === null){
        return
    }

    inOrderTraversalHelper(root.left,res)
    res.push(root.val)
    inOrderTraversalHelper(root.right,res)

    return res
}



let inorder = function(root){
    if(root!=null){
        return
    }
    
        printInorder(root.left)
        print(root.val)
        printInorder(root.right)
    
}


//recursive
let preOrder = function(root){
    if(root!=null){
        return
    }
        print(root.val)
        preOrder(root.left)
        preOrder(root.right)
    
}

//iterative
const preorderTraversal = function(root){
    let res = []
    let stack = [root]
    if(root === null){
        return []
    }

    while(stack.length > 0){
        let currNode = stack.pop()
        res.push(currNode.val)

        if(currNode.right != null){
            stack.push(currNode.right)
        }
        if(currNode.left != null){
            stack.push(currNode.left)
        }
        
    }
    return res
}


let postOrder = function(root){
    if (root == null)
            return;
        preOrder(root.left)
        preOrder(root.right)
        print(root.val)
    
}