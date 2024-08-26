//Q1: Write a function which accepts a list of users and a name to check
//if such user exists in the array.
const users = [
{id: 1, name: 'Jack', isActive: true},
{id: 2, name: 'John', isActive: true},
{id: 3, name: 'Mike', isActive: false},
];
console.log(isNameExists('Jack', users)); // true


//FILTER FUNCTION

function isNameExists(name, users){
    const userExist = users.filter(user=>user.name===name)
    //return userExist.length>0? true: false
    return Boolean(userExist.length)

}

// SOME FUNCTION

const  isUserExist= (name,users)=>users.some(user=>user.name===name)
console.log(isUserExist('John',users))

//////////////////////////////////////////////////////////////////////////////////////
//Q2 Remove all duplicates from array

console.log("uniqueArr",uniqueArr([1, 1, 2,3,3,3,3])); // [1,2]
console.log("uarr",uarr([1, 1, 2,3,3,4,4])); // [1,2]

function uniqueArr(arr) {
    const set = new Set(arr)
    console.log(set)
    return [...set]
}

function uarr(arr) {
    const result = []
    arr.forEach(element => {        
        if(!result.includes(element)){
            result.push(element)
        }
    });

    return result
}

//////////////////////////////////////////////////////////////////////////////////////
//Q3 sort array of numbers
console.log("sortNumber",sortNumber([1,6,3,9,0,-1]))
function sortNumber(arr) {
    return arr.sort((a,b)=> a-b)
}

//Q4  Sort an array of objects by author's lastname
const books = [
    {name: 'Harry Potter', author: 'Joanne Rowling'},
    {name: 'Warcross', author: 'Marie Lu'},
    {name: 'THe Hunger Games', author: 'Suzanne Collins'}
    ];

function sortObject(arr) {    
    return arr.sort((a,b)=> {
        console.log(a.author.split(" ")[1],b.author.split(" ")[1],a.author.split(" ")[1] - b.author.split(" ")[1])
        return(a.author.split(" ")[1] < b.author.split(" ")[1]?-2:2)
        // we cannot subtract string.
        // We need to compare and accordingly send -1 or 1
        //logic is whether a-b <0 or >0. We can use any number we want
    })
}

console.log("sortObject",sortObject(books))

//////////////////////////////////////////////////////////////////////////////////
//Q1: Write a function which implements a range
console.log("range",range(1, 5)) // [1,2,3,4,5...,50]
function range(a,b) {
    const result =[]
    for(i=1;i<=b;i++){
        result.push(i)
    }
    return result

}


//////////////////////////////////////////////////////////////////////////////////////
//Q1: Write a shuffle function which mixes the elements
console.log("shuffleItems",shuffleItems([1,2,3,4,5,1]))
function shuffleItems(arr) {
    return arr.map(item=>{return {sort:Math.random(),value:item}})
    .sort((a,b)=>a.sort-b.sort)
    .map(a=>a.value)
}

//////////////////////////////////////////////////////////////////////////////////////
//Q1: Find the number of occurrences of minimum value in the list of numbers

console.log("minValue",minValue([5,6,9,4,3]))
console.log("mvalue",mvalue([5,6,3,3,9,3,4,3,3]))
function minValue(arr) {
    arr.sort((a,b)=>a-b)
    let min = arr[0]
    let i=0
    for(i=0;i<arr.length;i++){
        if (arr[i] !==min){
            console.log(arr[i],i)
        break;}
    }
    console.log(arr)
    return i
}

function mvalue(arr) {
 let minValue = Math.min(...arr)
 let result=arr.filter(item=> item===minValue)
 return result.length
}
    
