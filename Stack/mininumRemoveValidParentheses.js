/**
 * @param {string} s
 * @return {string}
 */
 var minRemoveToMakeValid = function(s) {

    s = s.toLowerCase()
    s_array = Array.from(s)
    const stack = []
 
   
    for(let i = 0; i< s_array.length; i++){
        if(s_array[i] === '('){
            stack.push(i) //storing the index not the element
        }
        else if(s_array[i] === ')' ){
            if(stack.length > 0){
            stack.pop()
            }else{
                s_array[i] = ''
                            } 
        }
   }

    for(let i = 0; i< stack.length; i++){
        s_array[stack[i]] = ''
    }

    return s_array.join('')
    
};