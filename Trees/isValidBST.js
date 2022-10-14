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
 * @return {boolean}
 */
 var isValidBST = function(root) {
    if (!root) {
         return true; 
     }
 
     const isValidBSTHelper=(root, low, high)=>{
      if(!root){
        return true
    }

 
    if(( low !== null && root.val <= low)  || (high !== null && root.val >=high)){
        return false
    }
     return isValidBSTHelper(root.left, low, root.val) && isValidBSTHelper(root.right, root.val, high)
 }
    return isValidBSTHelper(root, null, null)
 };
 
 
 