// 1. Object.create(proto[, propertiesObject])
// Creates a new object with the specified prototype object and optional properties.


const person = { isHuman: false };
const newPerson = Object.create(person);
console.log(newPerson.isHuman); // false


// 2. Object.assign(target, ...sources)
// Copies the values of all enumerable own properties from one or more source objects to a target object.


const target = { a: 1 };
const source = { b: 2 };
const result = Object.assign(target, source);
console.log(result); // { a: 1, b: 2 }


// 3. Object.keys(obj)
// Returns an array of a given object's own enumerable property names.


const obj = { a: 1, b: 2 };
console.log(Object.keys(obj)); // ["a", "b"]


// 4. Object.values(obj)
// Returns an array of a given object's own enumerable property values.


const obj1 = { a: 1, b: 2 };
console.log(Object.values(obj1)); // [1, 2]


// 5. Object.entries(obj)
// Returns an array of a given object's own enumerable property [key, value] pairs.


const obj2 = { a: {c:2}, b: 2 };
console.log(Object.entries(obj2)); // [ [ 'a', { c: 2 } ], [ 'b', 2 ] ]


// 6. Object.freeze(obj)
// Freezes an object, preventing new properties from being added to it and existing properties from being removed or changed.


const obj3 = { a: 1 };
Object.freeze(obj3);
obj3.a = 2; // Does nothing, as the object is frozen
console.log(obj3.a); // 1


// 7. Object.seal(obj)
// Seals an object, preventing new properties from being added to it, but allowing the modification of existing properties.


const obj4 = { a: 1 };
Object.seal(obj4);
obj4.a = 2; // Allowed
delete obj4.a; // Not allowed
console.log(obj4.a); // 2

// 14. Object.getOwnPropertyNames(obj)
// Returns an array of all properties (including non-enumerable properties except for symbols) found directly on an object.


const obj5 = { a: 1 ,b:2};
console.log('obj5',Object.getOwnPropertyNames(obj5)); // ["a"]
//if we pass string it will return index and length property
console.log('obj5',Object.getOwnPropertyNames([])); // [ '0', '1', '2', '3', 'length' ]

// 20. Object.fromEntries(iterable)
// Transforms a list of key-value pairs into an object.


const entries = [['a', 1], ['b', 2]];
const obj6 = Object.fromEntries(entries);
console.log(obj6); // { a: 1, b: 2 }
