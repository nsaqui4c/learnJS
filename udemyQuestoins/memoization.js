
// return value from cache if already calculated
// if not available in cache than calculate and save it in cache

const cache ={}
function memoize(func) {
    
    console.log(func.toString(),cache[func.toString()],cache[func.toString()]!=='undefined')
    if (!cache[func.toString()]==='undefined'){
        return cache[func.toString()]}

    console.log("cache not found")
    let result = func()
    cache[func.toString()]=result
    return result
}



console.log(memoize(()=>1+2))
console.log(cache)