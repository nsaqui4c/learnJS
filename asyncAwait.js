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

const test= async()=>{
    await createPost().catch(err=>{console.log(err)})
    getPost();
}

test();


// const awesome=async(promise)=>{
//     try{
//         await promise();
//         return [data,null]
//     }
//     catch(err){
//     return[null,err]
//     }

// }

// const test=async()=>{
// const res=await awesome(createPost);
// console.log(res)

// }
