const { ComputerRounded } = require("@material-ui/icons")

class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}



class BinarySearchTree{
    constructor(){
        this.root = null
    }
    insert(value){
        const newNode = new Node(value)
        if(this.root === null){
            this.root = newNode
        }
        else{
            let curr = this.root

            while(curr != null){ //while true
                if(value < curr.value){
                    if(!curr.left){
                        curr.left = newNode
                        return this
                    }
                    curr = curr.left
                }else{
                    if(!curr.right){
                        curr.right = newNode
                        return this
                    }
                    curr = curr.right
                }
                
            }
        }
    }

    lookup(value){

        if(!this.root){
            return false
        }
        let curr = this.root

        while(curr){
            if(value < curr.value){
                curr = curr.left
            }
            else if(value > curr.value){
                curr = curr.right
            }else{
                return curr
            }
        }
        return `${value} does not exist in tree`
    }

    remove(value){

    }
}