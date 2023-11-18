## Throtling
* We will limit the calling of expensive function
* no matter how many time we make and event, we will call the expensive function aoly after certain specified time
* eg- in case of resize of window, if we are calling function, then we will not call on all the size but after every 500ms
* Function will be call after a fix interval
![image](https://github.com/nsaqui4c/learnJS/assets/45531263/f709de2e-bfdb-4c8a-a78c-cd662f8d35b7)
```js
const throttle = (expensive, limit)=>{
let flag= true
return function(){
  if(flag){
      expensive()
      flag=false
      setTimeout(()=>{flag=true},limit)
    }
  
  }

}

const betterfunction = throttle(expensive,limit)
window.addEventListner('resize',betterfunction)

```
## Debouncing
* call a expensive function only if there is certain dealy in the event
```js
const expensive = ()=>{
// some expensive logic
}

const debounce =(expensive,delay)=>{
  let timer;
  return function(...args){
    context=this;  // since this function will get return, and we might use this function with some object, we are getting the value of that object in context
    arg = args
    clearTimeout(timer) // clearing timeout, if we get another call of the function
    timer = setTimeout(()=>{  // no event is captured and for specified delay, then only expensive function will be called
    //expensive()   -> calling function without context
    expensive.apply(context,arg)
    },delay)
  }
}

const betterFunction  = debounce(expensive,delay)
window.addEventListner('keyup',betterFunction)
```
