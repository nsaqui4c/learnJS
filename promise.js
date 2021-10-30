const posts=[{title:"post one",body:"post one body"},{title:"post two", body: "post two  body"}]


const getPost=()=>{

    setTimeout(()=>{
        posts.forEach((post) => {
            console.log("title - "+post.title + "body-  "+ post.body)
        })

    },2000)
    
}


getPost();

const createPost=()=>{
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            posts.push({title:"post 3 , ",body:"post 3 body"})
            err='some error'
            if (err=='')
            resolve();
            else
            reject(err)    
        },4000)
    })
 
}
createPost().then(getPost).catch(err=>{console.log(err)}).then(console.log('catch-then'));


//cannot use .then if function in not promise
function returnsomething(){
    return something
}

//returnsomething.then(data=>{ console.log(data)})

