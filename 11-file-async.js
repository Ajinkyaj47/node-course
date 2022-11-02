//file asynch
const {readFile,writeFile, read} = require('fs')
console.log("Start here")
readFile('./content/first.txt','utf8',(err,rs)=>{
        if(err){
            console.log(err)
            return;
        } 
        const first = rs
        
        readFile('./content/second.txt','utf8',(err,rs)=>{
            if(err){
                console.log(err)
                return;
            } 
            const second = rs

            writeFile('./content/result-asyn.txt',`This is result of combine file1 and file2 ${first} ,
            ${second}`,(err,rs)=>{
                if(err){
                    console.log(err)
                    return
                }
                console.log('this task done here')
            })
    }) 

})
console.log('started another task here')