var grandparent =document.querySelector("#grandparent")
grandparent.addEventListener('click',()=>{
    document.querySelector("#msg").innerHTML+='GrandParent is clicked <br>'
    console.log('GrandParent is clicked')
},false)


var grandparent =document.querySelector("#parent")
grandparent.addEventListener('click',()=>{
    document.querySelector("#msg").innerHTML+='Parent is clicked<br>'
    console.log('Parent is clicked')
},false)


var grandparent =document.querySelector("#child")
grandparent.addEventListener('click',()=>{
    document.querySelector("#msg").innerHTML+='child is clicked <br>'
    console.log('child is clicked')
},false)
