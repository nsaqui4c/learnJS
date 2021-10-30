const posts=[{title:"post one",body:"post one body"},{title:"post two", body: "post two  body"}]


const getPost=()=>{

    setTimeout(()=>{
        posts.forEach((post) => {
            console.log("title - "+post.title + "body-  "+ post.body)
        })

    },2000)
    
}


getPost();

const createPost=(callback)=>{
    setTimeout(()=>{
        posts.push({title:"post 3 , ",body:"post 3 body"})
        callback();

    },4000)
}
createPost(getPost);