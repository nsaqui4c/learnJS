user={
    name:"najmus",
    age:18
}
localStorage.setItem("can only store","string")
localStorage.setItem("if we store object","it will return object")
localStorage.setItem("user",user)

localStorage.setItem("JSONUSER",JSON.stringify(user))

sessionStorage.setItem("can only store","string")
sessionStorage.setItem("if we store object","it will return object")
sessionStorage.setItem("user",user)

sessionStorage.setItem("JSONUSER",JSON.stringify(user))

document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
var d = new Date();
d.setTime(d.getTime() + (2 * 24 * 60 * 60 * 
1000));
var expires = "expires=";
document.cookie = "cname" + "=" + "cvalue" + "; " + 
expires;