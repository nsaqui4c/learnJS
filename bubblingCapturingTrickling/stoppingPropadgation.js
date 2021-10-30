var grandparent =document.querySelector("#grandparent")
grandparent.addEventListener('click',(e)=>{
    document.querySelector("#msg").innerHTML+='GrandParent is clicked <br>'
    console.log('GrandParent is clicked')
},false)


var grandparent =document.querySelector("#parent")
grandparent.addEventListener('click',(e)=>{
    document.querySelector("#msg").innerHTML+='Parent is clicked<br>'
    document.querySelector("#msg").innerHTML+='stopping propogation by calling e.stopPropagation() '
    console.log('Parent is clicked')
    e.stopPropagation()
},false)


var grandparent =document.querySelector("#child")
grandparent.addEventListener('click',(e)=>{
    document.querySelector("#msg").innerHTML+='child is clicked <br>'
    console.log('child is clicked')
},false)
