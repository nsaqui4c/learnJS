//undefined - var is hoisted but value not defined.

let var1;
console.log(var1);
console.log(typeof var1);

//null
let var2 = null;
console.log(var2);
console.log(typeof var2);


// this will work, because foo wil be hoisted first
foo= 3
console.log(foo)
var foo

//not defined
console.log(var3);
console.log(typeof var3);
var3 =1  // it will be hoistetd as let

// USE CONST AND LET TO AVOID HOISTING RELATED ISSUES