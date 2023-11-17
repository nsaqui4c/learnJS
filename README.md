# learnJS
## ExecutionContext
* Execution context is created whenever we invoke a function.
   * With execution context it also create this which poinit to the execution context.
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
* i.e in case of object -> const obj={}; obj.add=new value
![capgemini udemy com_course_understand-javascript_learn_lecture_2237510](https://user-images.githubusercontent.com/45531263/210923179-ff02fd53-41c2-4e34-917e-a79430bf88fd.png)


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
### Template String/literals
* using backtick '`' to create template literals
* we can create multiline string using this feature, as it also make sure to render 'enter'
```js
'name/nyour' 
//is equal to 
`name
 your`
 ```
 * If we are passing template literals as argument to function, then we do not need to wrap the argument in bracket.
 ```js
 function greet(string, first , last){
   console.log(strings,first, last)
  }
 const first= 'Anthony'
 const last= 'last' 
 const greet = greeting`Hello, ${first} ${last}`
 console.log(greet)
 // POINT TO NOTE
 //string will not jsut be 'Hello, ' but will be an array ['Hello, ' , ' ','']
 //because ${first} and ${last} will get interpolated leaving some chracters, which will be part of string
 ```
 * string will not jsut be 'Hello, ' but will be an array ['Hello, ' , ' ','']
 * because ${first} and ${last} will get interpolated leaving some chracters, which will be part of string

## function statement and expression
* if any function return value then it is a expression
* if it doesnot then it is a statement
```js
// this is just a statement because we are just adding this fucntion to memory
function hello(){
return 'hello'
}
//but in this case we are assigning value to var, hence expression
var fn = function(){..}
```
## By value vs by reference
* In case of primitive type, var points to two different memory location
```js
var a=3;
b;
b=a;
//b and a point to two different memory location. changin b will not affect a.
b=5; // still a will remain 3
```
* In case of Object var point to same memory location
```js
var c={greeting:'hi'}
var d;
d=c;
// now any chnage in c will also effect d

function changeGreet(obj){
  obj.greeting='hola'
  }
changeGreet(d)  //since d and c pointing to same object greeting of both will be changed.
console.log(c)  //{grreting:'hola'}
console.log(d)  //{grreting:'hola'}

```
** equal operator set new memory location 
```js
c = {greeting: 'howdy'}  // now c has all new memory location differnt than d
console.log(c) //{grreting:'howdy'}
console.log(d) //{grreting:'hola'} -> d is still pointing to same memory location 

## constructor
* Constructor is nothing but function which return new object
  * when we use keyword 'new' it creates a blank object -`{}`
  * then assign the values as instructed in constructor
  * then return the newly created object.
* If we explicitly return something from function constructor then it will not return the created object
```js
function Person(fname,lname){
    console.log(this)
    this.fname=fname
    this.lname=lname
}

var john = new Person('john','doe')
```
* since it is a kind of function, we can also execute function constructor without new keyword
* It will execute, but it will not return anything. so no new object will get created
* so also use function constructor with capital first letter for easy recognition 
```js
function Person(fname,lname){
    console.log(this)
    this.fname=fname
    this.lname=lname
}
var john =  Person('john','doe')
console.log(john1)  *- > undefined
```
* Built-in function constructor
```js
var str= new String('john')
console.log(str.length)

//js also convert normal string to String object
console.log("john".length)

//but does not convert number to Number object
var a = new Number(3)
console.log(a.toString())

3.toString() * syntax error

// since Number or String are inbuilt function constructor we can add new method using prototype
String.prototype.newMethod=()=>{
    
}
```
## class
* class is nothing but a function, with just one additional property -> isClassConstructor=true
   * this additional property makes invoking the function only through 'new' keyword.
   * new keyword will create new instance of object.
   
* constructor: 
   * 
```js
class Person{
}
let p= class{
}
typeOf(p)   -> function

//INVOKING
let me = new Person()  // invoking using new keyword


//CONSTRUCTOR
class Person{
   constructor(name)
   {
   this.firstName= name;   // we do need to explicitly provide field name
   }
}
//////////////////////////////////////////////
class Person{
   firstName // good to define field names
   constructor(name)
   {
   this.firstName= name; 
   }
}
```
* static keyword will create variable attach to class not to any instance/object
```js

//static key word
class Person{
   firstName // good to define field names
   constructor(name)
   {
   this.firstName= name; 
   }
   greet(){
   return `welcome ${firstName}`
   }
   static residence='Earth'
}
let me = new Person()
console.log(Person.residence)  //Earth
console.log(me.residence) // Error not found

```
* private variable with getter and setter
   * just add # ini front of variable and it will not be accessible from ouside of class
   * we can make function private also using #
```js
class Person{
   #firstName 
   constructor(name){   {
   this.firstName= name; 
   }
   greet(){
   return `welcome ${firstName}`
   }
   get fname(){
   return this.#firstName
   }
   set fname(name){
    this.#firstName =name
   }
   
}
```
* Prototypal Heirarichy
```js
class Person{
    firstName
    constructor(name)
    {
    this.firstName= name;
    }
    greet(){
        console.log `Hello nice to greet you ${this.firstName}`
    }
 }
 class Tony extends Person{
 //If no constructor is defined in derived class, compiler will automatically call super() and pass the arguments to parent class
 //But if create a constructor for this class also then we have to call super() explicitly and pass the argument manually
 //we can access parent class method using super keyword
   // super.greet()
    meet(){
        console.log `nice to meet you`
    }
 }


 const me= new Tony('saq')
 me.greet() //(2) ['Hello nice to greet you ', '', raw: Array(2)] 'saq'
 me.meet()  //['nice to meet you', raw: Array(1)]

 console.log(me.__proto__) //Person {constructor: ƒ, meet: ƒ} 
 console.log(me.__proto__.__proto__) //{constructor: ƒ, greet: ƒ}
 console.log(me.__proto__===Tony.prototype)              //true
 console.log(me.__proto__.__proto__===Person.prototype)  //true
 ```

### extends
* We can use extends to existing/native js type to enhance the property using prototypical inheritance
```js
class fn extends Function{
    add (){
        console.log("new function added")
    }
}

const a= new fn()
a.bind() //function property is also available to fn
```

## Symbol
* The JavaScript ES6 introduced a new primitive data type called Symbol. Symbols are immutable (cannot be changed) and are unique.
* We use it to create a unique name, so that one cannot accidentally over ride the value or fucntion definition.
```js
let fn = Symbol("id");

let person = {
    name: "Jack",

    // adding symbol as a key
    [fn]: ()=>{...}  //some important function that you do not want to get override.
                     // using [] to map the value of fn with the definition.
                     // other wise fn will be the key for definition
};

console.log(person); // {name: "Jack", Symbol(fn): func()}
```


## Default Parameters
* function print(fname,lname='singh')
* as long as we invoke this function with lname=undefined it will use default param
* we can even pass print('hllo',undefined) -> will use default param

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
## prototype and '__proto__'

* __proto__ is created for every object and everything in js in Object. 
* __proto__ contains the property of that object along with __proto__ of its parent class.
* When we create any function, js internally also create a property for that function called 'prototype' along with __proto__.
* and whenever we create any object using function with 'new' keyword, the prototype came to action, otherwise sits there ideally.
  * All the object created using new keyword, have their __proto__ created using function.prototype.
  * so if we add any function in prototype it will be available to all object of that function.
    * even if we add the method after creating the object, because there proto is pointing to function.prototype
* all the methods in class are store in prototype and variable in their object
```js
class Animal{
    name='dog'
}

class Dog extends Animal{
    sound='bark'
    makeSound(){
        console.log(this.sound)
    }
}

let dog = new Dog()
dog.__proto__.add=()=>{console.log('add new items here')}


for (const prop in dog){
    console.log(prop)         //-> name, sound
}


console.log('Dog Prototype')
console.log(Dog.prototype)    //->Animal {constructor: ƒ, makeSound: ƒ}
console.log('dog.__proto__')
console.log(dog.__proto__)    //->Animal {constructor: ƒ, makeSound: ƒ}
console.log('is equal' , Dog.prototype===dog.__proto__) 
//becasue dog.__proto__ is pointing to Dog.prototype
// adding method in dog.__proto__ OR to Dog.prototype will result in changes in same memory location

```

*******************************************
## This Keyword
* Whenever a execution context is created it also create this for that context.
   * if we print value of 'this' in that execution context it will print that function for which EC is created.
* in case of arrow function no 'this' is assigned to execution context.
   * so it will look for value in parent execution context and keep going up till it gets the value.

![arrow this](https://user-images.githubusercontent.com/45531263/210327251-ea6a140e-ed0a-4357-9305-d2f66c881e7a.png)


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
## Iterators and Iterables
* looping using 'in' and 'of'
```js
let names =['a','b','c','d']

// in will return key/properties of an object.
for(name in names){
    console.log(name)  //-> 0,1,2,3
}

// of will return value
for(name of names){
    console.log(name) //-> a,b,c,d
}
```
### looping using 'in' on object 
* If we create a object of class, then
  * all the properties are emurable (including of parent class)
  * but methods are not part of object, but class prototype, so it will not available

```js
//Objects
class Animal{
    name='dog'
}

class Dog extends Animal{
    sound='bark'
    makeSound(){
        console.log(this.sound)
    }
}

let dog = new Dog()


for (const prop in dog){
    console.log(prop)         //-> name, sound
}
console.log(Dog.prototype)    //->Animal {constructor: ƒ, makeSound: ƒ}
```

* If we create normal object then all properrty including methods are emurable
  * even the properties of emurable objects down its prototype chain
```js
const dog2={
    sound:'bark',
    makeSound(){
        console.log(this.sound)
    }
}
dog2.__proto__={
residence:'Earth'
}
for (const prop in dog2){
    console.log(prop)         //->  sound, makeSound, residence
}
```
### 'in' for array
* 'in' will return the property of array, which is key
* in background when we are adding element in array, it is creating new object {key:value}
* where key is the property and value is value of property(element in array)
 ```js
let names =['a','b','c','d']

for(prop in names){
    console.log(prop)  //-> 0,1,2,3
}
```


* if we add new property in Array using prototype, then it will also come in iteration
```js
Array.prototype.newMethod=()=>{}

for(prop in names){
    console.log(prop , ':' ,names[prop])  

    //  0 : a
    //  1 : b
    //  2 : c
    //  3 : d
    //  newMethod : ()=>{}
```
## Extra
* console.log(typeOf null) //-> object  -> bug since like forever
* issue with 'this' in normal function
```js
var c = {
    name: 'The c object',
    log: function() {
        
        this.name = 'Updated c object';       // this will point to c
        console.log(this);
        
        var setname = function(newname) {
            this.name = newname;              // this will point to global, because called without any object. SEE BELOW LINE
        }
        setname('Updated again! The c object');  // called without any object
        console.log(self);
    }
}

c.log();
```
  * to resolce above issue we use
    * var self= this at top
```js
var c = {
    name: 'The c object',
    log: function() {
        var self = this;
        
        self.name = 'Updated c object';
        console.log(self);
        
        var setname = function(newname) {
            self.name = newname;   
        }
        setname('Updated again! The c object');
        console.log(self);
    }
}

c.log();
```
* never press enter JUST AFTER return, because syntax parser will add semicolon at end of line resultin in no return value
```js
return  // parser will add seicolon here
  {
  //something
}
```

## Async and defer
* <script src= ""> -> In this case html start rendering then script download, then execute then html rendering continue
* <script async src=""> -> In this case html start rendering, download script in async and then execute script by stoping rendering and then render html
* <>script defer src=""> -> download script in async and execute script once rendering is completed.
* Async does not maintain the execution of script which may break the code, while defer maintain the execution of code.


## event bubling and capturing/trickeling
![image](https://github.com/nsaqui4c/learnJS/assets/45531263/11acff7f-1b50-494e-8e7b-d11794e6e776)

* addEventListener('click',()=>{},true/false)
  * we can pass second paramter true or false.
  * True for event capturing
  * if we do not pass any value it will be false by default and event bubbling will take place.
