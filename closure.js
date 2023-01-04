//closure is function bind  together with its lexical environment
//Function with its lexical scope forms a closure


let x= function(){
    let a=7
    let y=function(){
        console.log(a)
    }
    a=100 // now 'a' is pointing to 100
    return y
}

let z=x()

console.log(z) //z=function y

// finction y is printing 'a' and now z is trying to print 'a'
z()
//once a function is returned, whole closure is returned
//since function Y is pointing to variable 'a', therefore it returned with 'a'


//Closure withTimeout

function p(){
    for(var i=0;i<6;i++){
        q(i)
    }
    function q(i){
        setTimeout(()=>{
            console.log(i)
        },i*1000)
    }
    
}

p()


//Multiplication Example
function multiply(x){
    return function(y){
        return function(z){
            return z*x*y
        }
    }
}

const a = multiply(3)(4)(5);
console.log(a)
