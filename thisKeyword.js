
/******************************************************** */
//for all regular function call, 'this' points to window object
/*
### Normal function
* If we call a function with *.funcName -> 'this' inside function points to '*'
* calling regular function without '*.' -> 'this' points to global

### Arrow function
* One cannot bound any context to arrow function
* It takes the context from the location it is being executed
*/
console.log(this)


var user={
    name:'naj',
    firstFunc: function(){
        console.log('firstFunc', this.name)
        function second(){
            console.log('second', this.name)
        }
        second() //regular regular function call, hence pointing to Object Global
    },

    arrowFunc:()=>{
        console.log('arrowFunc', this.name)
        function second(){
            console.log('second Arrow', this.name)
        }
        third=()=>{
            console.log('third Arrow', this.name)
        }
    
        second()
        third()
    },

    arrowInsideFun:function(){
        var x=()=>{
            console.log("Arrow inside another function inside oject")
            console.log("value of this : ", this)
        }
        x()
    }

}
user.firstFunc() //not regular function call, pointing to user
 
//ARROW FUNC: this is bound to enclosing scope at creation time and cannot be changed
user.arrowFunc()
//here we are calling normal function, hence this is obj
//later this func is calling arrow inside obj, arrow is ceated inside obj
user.arrowInsideFun()


function first(){
    //console.log('first', this)
    function second(){
        console.log('second', this)
    }
    arrowFunc=()=>{
        console.log('arrowFunc', this.name)
        function second(){
            console.log('second Arrow', this.name)
        }
        third=()=>{
            console.log('third Arrow', this.name)
        }
        second()
        third()
    }
    arrowFunc()
    //second() //regular regular function call, hence pointing to Object Global
}

first() //regular function call

/******************************************************** */
 
//NEVER USE ARROW FUNCTION IN CONSTRUCTOR AND METHOD
