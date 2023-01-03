# learnJS
## ExecutionContext
* When code is executed an execution is created. There are two Phase in execution.
    * Memory creation phase
        - Allocate memory to all var and func.
        - in case of variable or arrow function it will hoist the variable and assigned it to undefined
        - in case of function it will hoist the function with all its definition.
    * Code execution phase
        - Execute the whole code line by line.
        - Here it will populate the correct value of varibles and arrow function.
        - when a function invocation comes it will create a whole new execution context with both the phase.
* Even for blank JS file engine will create GCE create window keyword and this keyword which will point to window.        
```js
// Start of file -> create a global execution context
var x=1;
a() //10    // function invoked -> will create a new execution context.
            // this context will have access to all global variable + its own variable
            // it will overide x for its own context
            
// Execution context of 'a' if removed from stack 
// even though it is deleted along with all its local variable, it return a function which uses local value. therefore the function will still have access to local variable (lexical env)
//Now we are in global context and value of 'x' is 1 again.
 


b() //100
console.log('global :' ,x) //1


 function a (){
    var x=10
    console.log('function a :' ,x)
    let lex= 20
    return function(){console.log(lex}
 }


 function b(){
    var x=100
    console.log('function b :' ,x)
 }


 //OUTPUT
//function a : 10
//function b : 100
//global : 1
 ```
## Lexical Environment
* local environment along with lexical env of its parent.
* Block B will have refrence of Block A and A will have reference of GCE and GCE will point to null
    * Scope chain -> looking for variable in parents
* let and const will always store in local environment. (lexical = local +lexical of parents)
* child block will have access to lexical variable of parents.(block B will have access to myVar)

![1](https://user-images.githubusercontent.com/45531263/210160827-876fd043-522f-4dc6-ac77-e6f639ee2c22.png)
* Scope chain -> looking for variable in parents

## Temporal DeadZone
* let and const are not hoisted in global scope rather local(script) scope
* We cannot access them until they are initialized
* even though they are undefined and hoiste, but they are in different scope then global
* Once initialized, they will still remain in different scope but accessible
```js
console.log(a) //undefined
console.log(b) // error ->Uncaught ReferenceError: Cannot access 'b' before initialization
var a=1  
let b=2  
```
* firstName is 'let' therefore it will be hoisted in script scope.
![2](https://user-images.githubusercontent.com/45531263/210160836-34264d5a-6e2a-438f-be5b-9ee3f8865016.png)



## Shadowing and illegal shadowing
```js
var a=10
{
    var a=100 // this scope has override value of a, for this scope only
}
// here value will be 10 again.
```

### Illegal shadowing
* we cannot declare let or const twice in same lexical env
   * creating new block '{}' will create new lexical env
```js
let a=10
{
    var a=100  // we cannot shadow let with var since var is global, block does not make any difference.
}

```
* However it is legal to shadow let with another let in sifferent scope/block
```js
let a=10
{
    let a=100 //let is in another scope/lexical env
}
// here value will be 10 again.
```
### Binding
* when we assign any value to variable we are binding a memory location to the variable, and that memory location holds a value.
* So in case we update the value in that memory, the binding will still remain the same, but the variable will now have new value.

### const
* When we assign new value to const, we are actually [binding](#binding) it to new memory location, which is not allowed.
 ```js
const firstName= 'ANthony'
firstName='Tony'  // Not allowed, as we are binding/assigning new memory location to const
```
* But, if we update the property/value of const object instead of assigning new memory, then it is allowed.
```js
const user={firstName:'Anthony'}
user.firstName='tony' //Allowed because const is pointing to same memory, we are changing the value of object
```

*****************************************
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
## Dynamics object keys

if the key of any object is string then we cannot access the value using dot notation
```
const item = { 'item-hat' : 'cap'}
// we cannot access as below
item.item-hat or item.'item-hat'

//We have to use as 

item['item-hat']

// We can utilize square bracket for normal keys also
app={key:'value'}

console.log(app[key]

```

* We can also square bracket to create dynamic object key

```
let appstate='loading'
const app={ [appstate]:'true'}
console.log(app)
// 'loading' : 'true'
```
* In case of react, we need to map e.target.value with the value of field not field itself
```js
  handleChange={(e) => updateField(e, "name")
 const updateField = (e, field) => {
    setValues({ ...values, [field]: e.target.value });
  };

```
*******************************************
