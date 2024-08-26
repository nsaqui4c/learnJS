//function which  gets array and an element and return array with element in the end

const modarr=[1,2,3]
const fixarr=[1,2,3]
function elementAtEnd(array,e){
     array.push(e) // modify the existing array
     return array
}

elementAtEnd(modarr,4)
console.log(modarr)


function elementAtEndfix(array,e){
     // creating new array
    return [...array,e]
}

console.log(elementAtEndfix(fixarr,4))
console.log(fixarr)



// Remove all duplicates from array

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

