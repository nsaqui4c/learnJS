function print(...args) {
  args.forEach((arg) => console.log(arg.toString()));
}

function shallow(source, target) {
  //check type of both
  //check for primitive
  //case for array
  //case of object
  // case for date

  console.log(Object.prototype.toString.call(source).split(" ")[1].split("]")[0].toLowerCase())

  
  if (typeof source !== typeof target) return false;

  if (typeof source === "object") {
    if (Array.isArray(source) && Array.isArray(target)) {
      if (source.length !== target.length) return false;
      let flag = true;
      source.forEach((element, index) => {
        if (element !== target[index]) flag = false;
      });
      return flag;
    }
    else if (!Array.isArray(source) && !Array.isArray(target)) {        
        if( Object.keys(source).length !== Object.keys(target).length)
            return false

        
        return Object.keys(source).every(key=>source[key]===target[key])

    }


    else return false
  }
}

console.log(shallow([1,2,3], [1,3,2]));  //false
console.log(shallow({a:1, b:1,v:1}, {a:1,b:2,v:1})); //false
