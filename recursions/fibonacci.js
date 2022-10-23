let calculate = 0
const fibonacci = (n)=>{
    calculate++
    if(n < 2){
        return n
    }

    return fibonacci(n-1) + fibonacci(n-2)
}

console.log(fibonacci(12))
console.log(calculate)

let calculateFaster = 0
function fibFast() {

    const cacheFib = {}

    return function fib(n) {
        calculateFaster++
        if (n in cacheFib) {
            return cacheFib[n]
        } else {
            if (n < 2) {
                return n
            }
            cacheFib[n] = fib(n - 1) + fib(n - 2)
            return cacheFib[n]
        }   
    }
}
const memoizeFib = fibFast()
console.log(memoizeFib(12))
console.log(calculateFaster)
