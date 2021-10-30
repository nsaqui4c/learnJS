/*
an object can be use as map, but it has limitation
object can only have 1 key as object, while map can have multiple objects as key
*/

var a={}
var b={"key":1}
var c={"name":"naj"}


someObject={
    a:1,
    b:2
}
someObject2={
    a:1,
    b:2
}

var d={someObject:1,
    "name":"naj",
    someObject2:2}
     
console.log(d)   
console.log(someObject)

set = new Set([1,2,4,3,3])
set.add(5)
console.log(set)


map = new Map()
console.dir(map)
map.set(a,1).set(b,2).set(a,2).set(set,3)
console.dir(map)
console.log(map.get(set))
console.log(map.has(set))

