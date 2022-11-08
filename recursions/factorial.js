
const factorial = function(n){
    if(n === 0){
        return 1
    }
    console.log(n)
    //console.log(n * factorial(n-1))
    return n * factorial(n-1)
}

console.log(factorial(5))


let subset = [1,2,3]
let res = [...subset,5]

console.log(subset)
console.log(res)