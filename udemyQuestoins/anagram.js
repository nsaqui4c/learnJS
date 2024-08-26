// anagrams are words which has same number of chracter in same quantity
//so that we can rearrange one word to create another

let first = "toolet";
let second = "looter";

// convert both to lower
function isAnagram(first, second) {
  if (first.length !== second.length) return false;
  let fmap = createHash(first);
  let smap = createHash(second);
  let flag = true;

  Object.keys(fmap).forEach((key) => {
    console.log(fmap[key], smap[key]);
    if (fmap[key] !== smap[key]) flag = false;
  });

  return flag;
}

function createHash(input) {
  let map = {};
  let arr = input.split("");
  arr.forEach((element) => {
    map[element] ? map[element]++ : (map[element] = 1);
  });

  return map;
}

console.log("result", isAnagram(first, second));

/////////////////ELEGANT SOLUTION ///////////////////////////////

function isAnagramElegant(first, second) {
  if (first.length !== second.length) return false;
  let firstSorted = first.toLowerCase().split('').sort().join('')   // sort function for string, does not require callback function
  let secondSorted = second.toLowerCase().split('').sort().join('')  // sort function for string, does not require callback function

  console.log(firstSorted,secondSorted)
  console.log(firstSorted===secondSorted)
}

isAnagramElegant(first, second)
