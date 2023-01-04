/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
 var searchBST = function(root, val) {

    while(root != null){
        if(val > root.val){
            root = root.right
        }else if(val < root.val){
            root = root.left
        }else{
            return root
        }
    }
    
    return null
};

//height is log(n) of a tree

//2^(n+1) - 1 = n => this is only for a full binary tree
//the time complexity is o(h) because h can be O(log(n)) and worst case O(n)

const searchBST = function (root,val){

    if(root === null){
        return null
    }

    if(val > root.val){
        return searchBST(root.right,val)
    }else if(val < root.val){
         return searchBST(root.left,val)
    }

    return root
}




