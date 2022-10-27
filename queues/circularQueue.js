/**
 * @param {number} k
 */
 class MyCircularQueue {
    constructor(k){
        this.k = k
        this.array = new Array(this.k)
        this.head = -1
        this.tail = -1
        this.size = 0 //very important!!!!
        
    }
    enQueue(value){
        //[1,'',3,4,]
        //handles insertion
        //check if the queue is full
            //if this operaration is true return false
        //else
            //increment tail and divide by total capacity
            //add value to the index where tail is currently represented
            //return true
        if(this.head === -1){
            this.head = 0
        }

        if(this.isFull()){
            return false
        }else{
            this.tail = (this.tail + 1) % this.k
            this.array[this.tail] = value
            this.size++
            return true
        }
        
    }
    deQueue(){
        //handles deletion
        if(this.isEmpty()){
            // this.head = -1
            // this.tail = -1
            return false
        }
        
        this.head = (this.head + 1) % this.k
        this.size--
        return true;
    }
  //  [12]
    Front(){
        if(this.isEmpty()){
            return -1
        }
    return this.array[this.head]
    }

    Rear()
    {
        if(this.isEmpty()){
            return -1
        }
        
         return this.array[this.tail]
    }

    isEmpty(){
       if(this.size === 0){
           return true
       }
       return false
    }

    isFull(){
       if(this.size  === this.k){
            return true
        }
       return false
    }
};

// /** 
//  * @param {number} value
//  * @return {boolean}
//  */
// MyCircularQueue.prototype.enQueue = function(value) {
    
// };

// /**
//  * @return {boolean}
//  */
// MyCircularQueue.prototype.deQueue = function() {
    
// };

// /**
//  * @return {number}
//  */
// MyCircularQueue.prototype.Front = function() {
    
// };

// /**
//  * @return {number}
//  */
// MyCircularQueue.prototype.Rear = function() {
    
// };

// /**
//  * @return {boolean}
//  */
// MyCircularQueue.prototype.isEmpty = function() {
    
// };

// /**
//  * @return {boolean}
//  */
// MyCircularQueue.prototype.isFull = function() {
    
// };

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */


