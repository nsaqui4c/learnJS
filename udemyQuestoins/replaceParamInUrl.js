// 

const initialUrl = '/posts/:postid/comments/:commentid'

const result =  replace(initialUrl,[{from :"postid", to:3},{from :"commentid", to:5}])

function replace (initial, datas) {
        return datas.reduce((acc,data)=>{
            return acc = acc.replace(':'+data.from,data.to)
        },initial)
}

console.log(result)