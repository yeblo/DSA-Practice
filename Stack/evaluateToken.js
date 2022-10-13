/**
 * @param {string[]} tokens
 * @return {number}
 */

 //if the token is a number add to the stack
 //if the token is an arithmetic expression, pop the last two values from the stack
 //solve the equation based on the arithmetic operatiom
 var evalRPN = function(tokens) {
    const stack = [];
    let res = 0;
    // let operators = ["*","-","/","+"]

    
    for(let i = 0; i< tokens.length; i++){
        
        if(!isNaN(parseFloat(tokens[i]))){
           let num = Number(tokens[i])
            stack.push(num)
        }
        else{
            let x = stack.pop();
            let y = stack.pop();
            console.log(x)
            console.log(y)
            if(tokens[i] === "*"){
                res = x * y
                stack.push(res)
                console.log(res)
            }else if(tokens[i] === "+"){
                res = x+y
                stack.push(res)
                console.log(res)
            }
            else if(tokens[i] === "-"){
                    res = y-x
                stack.push(res)

            }else{
                res = parseInt(y/x)
                stack.push(res)
            }
        }
    }
    if(stack.length > 0){
        return stack.pop()
    }
    return res
};