# learnJS

## Function Borrowing
* polyfill is fallback for browser func
* call ->  func.call(context,args)
* apply ->  func.apply(context,[args])
* bind -> newFunc= func.bind(context,args)


****************************************
##  HTML
### calling script
* normal -> when script tags come download, execute and then continue  
* async  -> download in background with html parsingand execute when tag come and then html parsing continues  
* defer  -> download in background, executed once html parsing is completed
```html
<script defer src= ''>
```  

*******************************************
## Inheritance

When we use arr.* first it will lok for the property in arr.__proto__.* if  not found then look in arr.__proto__.__proto__.* and so on
```
let arr=[]
arr.__proto__.*
    all the method which arr has inside __proto__
    This is equal to Array.prototype -> arr is Array
arr.__proto__.__proto__
    This is equal to  Object.prototype

Check code for detail:
console.log("----------------------------------------")
console.log("calling intro function from obj2.")
console.log("since obj2 has name it will take it from obj2.")
console.log("but rest value it will take from parent obj1")
obj2.getIntro()

```

*******************************************
## This Keyword

### Normal function
* If we call a function with *.funcName -> 'this' inside function points to '*'
* calling regular function without '*.' -> 'this' points to global

### Arrow function
* One cannot bound any context to arrow function
* It takes the context from the location it is being executed
```
var obj={
    fn:function(){
        console.log("this in function : ",this)
        console.log(this.v,'\n')
    },

    ar:()=>{
        console.log("this in arrow : ",this)
        console.log("this ===module.exports ", this===module.exports)
        console.log(this.v,'\n')
    },
    arrowInsideFun:function(){
        var x=()=>{
            console.log("Arrow inside another function inside oject")
            console.log("value of this : ", this)
        }
        x() //calling arrow function inside Obj block
    }

}

obj.fn()  // will retain context of obj
obj.ar()  //since function is called in global, 'this' points to global
obj.arrowInsideFun() // arrow function is called inside obj, hence 'this' will point to obj

```

*******************************************