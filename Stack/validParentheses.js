/**
 * @param {string} s
 * @return {boolean}
 */
//add all possible character to a hashmap.


//the open parenthesis is the key
//the closed parenthesis is the value

//declare an array as a stack


//write a for loop that loops through the string
    //if we encounter a open string, we add to the stack

    // if we encounter a closed string
    // we peek at what is at the top of the stack pop the stack to see if it is the the coinciding open bracket
    //else return false


//check if the array is empty and return true if empty and false if not
const character = {
    '{':'}',
    '(' : ')',
    '[' : ']'
};

let stack = [];

const isValid = (s)=> {

for(let i =0; i< s.length; i++){

    if(Object.keys(character).includes(s[i])){
        stack.push(s[i])
        
    }
    if(Object.values(character).includes(s[i])){

        if(character[stack [stack.length - 1]] === s[i]){
            stack.pop()
        }
        else{
            return false
        }    
    }
    
}

if(stack.length > 0){
    return false
}


return true


};




