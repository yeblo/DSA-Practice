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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 var rangeSumBST = function(root, low, high) {
    
    this.total = 0
   
    rangeSumBSTHelper(root,low,high,total)
    return total
};

var rangeSumBSTHelper = function(root,low,high,total){


    let currNode = root

    
    if(currNode === null) {
        return
    }
    if(currNode.val >= low && currNode.val <= high){
        this.total += currNode.val
    }
    
    console.log(this.total)
    if(low < currNode.val){
       rangeSumBSTHelper(root.left, low, high,total)
    }
    if(high > currNode.val){
       rangeSumBSTHelper(root.right, low, high,total)
    }
}