let myName={
    firstname:'Naj',
    lastName:'saq'
}

let printName=function(state){
    console.log(this.firstname+ " "+ this.lastName +" in "+state)
}

let printMyName= printName.bind(myName);
printMyName('alld')

//Start of myBind

Function.prototype.myBind=function(...props){
    let fn=this //fn is pointing to Function whatever is before myBind
    params= props.slice(1) //all params except first
    return(        
        function(...param2){ //returning function and parameter passed in it
           // fn.call(props[0],...params,...param2 )
           fn.call(...props,...param2 )

        }
    )

}

let printMyName2= printName.myBind(myName);
printMyName2('alld')
