// Constructor is nothing but function which return new object
  // when we use keyword 'new' it creates a blank object -`{}`
  // then assign the values as instructed in constructor
  // then return the newly created object.
// If we explicitly return something from function constructor then it will not return the created object

function Person(fname,lname){
    console.log(this)
    this.fname=fname
    this.lname=lname
}

var john = new Person('john','doe')

// since it is a kind of function, we can also execute function constructor without new keyword
// It will execute, but it will not return anything. so no new object will get created
// so also use function constructor with capital first letter for easy recognition 
var john =  Person('john','doe')
console.log(john1)  //- > undefined

//Builtin function constructor
var str= new String('john')
console.log(str.length)

//js also convert normal string to String object
console.log("john".length)

//but does not convert number to Number object
var a = new Number(3)
console.log(a.toString())

3.toString() // syntax error

//since Number or String are inbuilt function constructor we can add new method using prototype
String.prototype.newMethod=()=>{
    
}

