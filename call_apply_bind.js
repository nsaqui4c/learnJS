let myName={
    firstName:'naj',
    lastName:'saq',
}

let newName={
    firstName:'akhlad',
    lastName:'khan'
}


//function for re-useability
let printFullName =function(param1, param2){
    console.log(this.firstName+' '+this.lastName+' '+param1+' '+param2)
}

//function borrowing using apply 
console.log('apply')
printFullName.apply(newName,['alld','up'])


//function borrowing using call 
console.log('call')
printFullName.call(newName,'alld','up')

//function borrowing using bind 
console.log('bind')
let newfn=printFullName.bind(newName,'alld','up')
newfn()
