
//https://leetcode.com/problems/asteroid-collision/solution/

var asteroidCollision = function(asteroids) {

    const stack = [];

    for(let i  = 0; i < asteroids.length; i++){

        if(stack.length === 0 || asteroids[i] > 0){
             stack.push(asteroids[i]);
        }
        else{
            while(true){
                let peek = stack[stack.length - 1] 
                if(peek < 0){
                    stack.push(asteroids[i])
                    break
                }
                else if(peek === Math.abs(asteroids[i])){
                    stack.pop()
                    break
                }else if(peek > Math.abs(asteroids[i])){
                    break
                }else{
                    stack.pop()
                    if(stack.length ===0){
                        stack.push(asteroids[i])
                        break
                    }
                }
                     }
        }
       
        
    }
    
    return stack;
};




     // if(asteroids[i] < 0 && peek > 0){
                //     if(Math.abs(asteroids[i]) > Math.abs(peek)){
                //         stack.pop();
                //         if(stack.length === 0){
                //             stack.push(asteroids[i]);
                //             break;
                //         }
                //         }else if (Math.abs(asteroids[i]) === Math.abs(stack[stack.length - 1]))
                //         {
                //             stack.pop();
                //             break;
                //             }
                //             else{
                //                 break
                //                 }
                //                 }