
function typeOf(input) {
    return Object.prototype.toString.call(input).split(" ")[1].split("]")[0].toLowerCase()
}



function deepComparision(source, target) {

    if(typeOf(source) !== typeOf(target))
    return false

    if(typeOf(source)==='array'){
        console.log("inside array")
        if(source.length!== target.length)
        return false
        
        return source.every((el,index)=> deepComparision(el,target[index]))
    }

    if(typeOf(source)==='object'){
        if( Object.keys(source).length !== Object.keys(target).length)
            return false

        
        return Object.keys(source).every(key=>deepComparision(source[key],target[key]))
    }

    console.log(source,target,source===target)
    if (source === target)
        return true


}




console.log(deepComparision([[[1],[2]],[2]],[[[1],[2]],[2]]))

console.log(deepComparision({a:{a:1,b:2},b:{a:3,b:4}},{a:{a:1,b:2},b:{a:3,b:7}}))