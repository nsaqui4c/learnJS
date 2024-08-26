//Write a function to conver a sentence into title case
//hello how are you  -> Hello How Are You
// hELLO hOW -> Hello How


function converToTitle(str) {
    const words = str.split(' ')
    let wor =words.map(el => {
        return el.split('').map((char,index) =>{
            if(index ===0)
            return char=char.toUpperCase()
            else
            return char=char.toLowerCase()
        
            
        }).join('')
    }).join(' ');

    return wor

}

// hELLO hOW -> Hello How
console.log(converToTitle('hELLO hOW -> Hello How'))
console.log(converToTitle('hELLO hOW -> am fine Hello How'))

////////////////////////////////////////////////////////////////////////////

function converToTitleCase(str) {
    return str.split(' ').map(word=> {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }).join(' ')
}
console.log(converToTitleCase('hELLO hOW -i am fine Hello How'))
