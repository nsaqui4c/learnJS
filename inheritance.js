let obj1={
    name:'naj',
    last:'saq',
    city:'alld',
    getIntro:function(){
        console.log(this.name+this.last+this.city)
    }
}

console.log("obj1 => ",obj1)
console.log("obj1.__proto__  => ",obj1.__proto__)

let obj2={
    name:'akhlad',
}

console.log("obj2 => ",obj2)
console.log("obj2.__proto__  => ",obj2.__proto__)

console.log("changing obj2 proto to obj1")
obj2.__proto__=obj1
console.log("obj2.__proto__  => ",obj2.__proto__)

console.log("Now obj2 has values of obj1")
console.log(obj2.city)


console.log("----------------------------------------")
console.log("calling intro function from obj2.")
console.log("since obj2 has name it will take it from obj2.")
console.log("but rest value it will take from parent obj1")
obj2.getIntro()