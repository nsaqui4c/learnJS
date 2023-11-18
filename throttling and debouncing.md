## Throtling
* We will limit the calling of expensive function
* no matter how many time we make and event, we will call the expensive function aoly after certain specified time
* eg- in case of resize of window, if we are calling function, then we will not call on all the size but after every 500ms
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
