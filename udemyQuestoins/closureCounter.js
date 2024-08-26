
const privateCounter = function(){
    var value =0
     return {
        getValue : function(){ return value},
        increment :function(){value++}
    }   

}
//NOTE:  closure will have reference to variable to actual value of variable
// If value of reference change, value in closure will also change.
let counter = privateCounter()
console.log(counter.getValue()) 
counter.increment()
console.log(counter.getValue()) 
counter.increment()
console.log(counter.getValue()) 

// calling it second time
//value will start with 0, not 2
// because we are redifining the "value" to 0 and then return the function
let counter2 = privateCounter()
console.log(counter2.getValue()) 
counter2.increment()
console.log(counter2.getValue()) 
counter2.increment()
console.log(counter2.getValue()) 




////////////////////////////
function x(){
    var i=1;
    // setTimeout will be in stack with access to lexical env (i=1)
    //the function will get  executed successfully and garbage collected, setTimeout will have value of i
    //hence setTimeout is a closure
    setTimeout(()=>{console.log(i)},3000)
}
x()


// function y(){
//     for(var i=0;i<5;i++)
//     setTimeout(()=>{console.log("var",i)},i*1000)//will print 5 everytime
// }
// y()


function z(){
    for(let i=1;i<5;i++){// let has block scope. for every loop there will be new variable for i
    //for every loop setTimeout will be bounded to new copy of i
    let time = i*1000
    setTimeout(()=>{console.log("let",i)}, time )
}
}
z()


// function a(){
    
//     for(var i=0;i<5;i++){
//     function close(x){
//         setTimeout(()=>{console.log("var with closure",x)}, x*1000)
//         }
//     close(i) // we are passing a new var to setTimeout
//     }
// }
// a()


