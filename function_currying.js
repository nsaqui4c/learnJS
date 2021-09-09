

// function for currying
let multiplyBind= function(x,y){
    console.log(x*y)
}


//instead of binding with other function we are binding with same func
//copying the same method and putting x=2
let multiplyByTwo =multiplyBind.bind(this,2)
multiplyByTwo(5) // this will return 10


/*---------------------Using function closure------------------------------*/


let multiply = function (x){
    return function (y){  //this is the returning fn which we are storing in multiplyByThree
        console.log(x*y)
    }
}


multiplyByThree=multiply(3) //passing 3 in place of x
multiplyByThree(2) //passing 2 in place of y