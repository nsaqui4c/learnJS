// string which is same from both end

let input = 'asdfghfdsa'
let ans = true
 for (let i=0,j=input.length-1;i<input.length/2;i++){
    console.log(input[i],input[j],input.length)
    if(input[i]===input[j]) {
        j--
    }
    else ans = false
    

 }

 console.log(ans)


 /////////////////////////////////////////////////////////////////////////////////
//VERY ELEGANT SOLUTION                                                         //
                                                                                //
 let inputone = 'asdfgfdsa'                                                     //
                                                                                //
 console.log(inputone === inputone.split('').reverse().join(''))                //
 /////////////////////////////////////////////////////////////////////////////////



