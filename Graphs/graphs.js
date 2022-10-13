


class Graph{
    constructor(){
        this.numberOfNodes = 0;
        this.adjacentList = {}
    }

    addVertex(node){
        if(!Object.keys(this.adjacentList).includes(node)){
            this.adjacentList[node] = []
            this.numberOfNodes++
        }
        else{
            this.adjacentList[node].push(node)
            
        }
    }

    addEdge(node1, node2){
        if(Object.keys(this.adjacentList).includes(node1)){
            this.adjacentList[node1].push(node2)
        }

        if(Object.keys(this.adjacentList).includes(node2)){
            this.adjacentList[node2].push(node1)
        }
    }
}