
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



## prbolem when calling function in callback which has this
Consider this class:
//////////////////////////
class MyClass {
  constructor() {
    this.name = "MyClass Instance";
  }

  showName() {
    console.log(this.name);
  }
}

const obj = new MyClass();
setTimeout(obj.showName, 1000); // Undefined or error!

////////////////////////////
 
Why does it fail?
setTimeout(obj.showName, 1000); passes showName as a reference without its original this context.
Inside showName(), this no longer refers to obj. Instead, it refers to window (in browsers) or undefined (in strict mode), causing the issue.

    
Solution: Using bind(this)
Now, let’s fix this using bind(this):

js
class MyClass {
  constructor() {
    this.name = "MyClass Instance";
    this.showName = this.showName.bind(this); // Bind `this` in constructor
  }

  showName() {
    console.log(this.name);
  }
}

const obj = new MyClass();
setTimeout(obj.showName, 1000); // Now it prints "MyClass Instance"
What changed?
this.showName = this.showName.bind(this); ensures that this inside showName always refers to the instance of MyClass, no matter where it is called.

Alternative Approach (Using Arrow Functions)
Instead of using .bind(this), you can also use arrow functions:

js
Edit
class InventoryConroller {
  constructor() {
    this.KafkaService = new KafkaService();
    this._InventoryService = new InventoryService();
  }

  allItem = () => {
    console.log("Fetching inventory...");
    console.log(this._InventoryService);
  };
}

const obj = new InventoryConroller();
setTimeout(obj.allItem, 1000); // Works fine, no need for bind
Arrow functions automatically bind this to the class instance, so you don’t need .bind(this).

