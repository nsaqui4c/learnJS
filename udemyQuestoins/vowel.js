// count no of vowel in given string

const vowel =['a', 'i', 'e', 'o', 'u']
function count(str) {
    let count =0
    str.toLowerCase().split('').forEach(element => {
        if( vowel.includes(element))
            count++;
    });

    return count
}


let ans =count('helloaeaeae  eioyy')
console.log(ans)


/////////////////////////////////

function countVowel(str){
    return str.toLowerCase().split('').reduce((acc,char)=>{
        if(vowel.includes(char))
            return acc=acc+1
        else
        return acc
    },0)
}

let ans1 =countVowel('helloaeaeae ')
console.log(ans1)

/////////////////////////////////

function countVowel2(str){
    let count =0;
    for (let char of str.toLowerCase()){
        if( vowel.includes(char))
            count++;
    };

    return count
}

let ans2 =countVowel2('helloaeaeae how are you ')
console.log(ans2)