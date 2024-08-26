
//0 1 1 2 3 5 8 13
function fib(number) {
    if (number<1)
    return "incorrect input"

    if(number===1)
    return 0

    if (number ===2){
        return 1
    }

    else return fib(number-1) +fib(number -2)
}


let ans = fib(8)
console.log(ans)