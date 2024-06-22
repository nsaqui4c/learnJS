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

## learning...
* we cannot directly call optimized function in getData(), because on every call it will create new optimized function hence a new timer variable.
* because of which we cannot clear the ealrier timeout
* creating a global scope variable debounced, we have control to clear the timer
```js
function getData() {
  debounced();
}

let debounced = optimized()

function optimized() {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log("function is working", timer);
    }, 1000);
  };
}

```
* Another way to achieve the same is by using global timer varaible
```js
function getData() {
  debounced();
}

let timer;

let debounced = function() {

  clearTimeout(timer);
  timer = setTimeout(() => {
    console.log("function is working", timer);
  }, 1000);

}
```

