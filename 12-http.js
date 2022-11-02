const http = require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('welcome to our home page')
    }
    else if(req.url==='/about'){
        res.end('This is about page')
    }
    else{
        res.end(
            `<h1>OPS</h1>
             <p>page not found</p><a href="/">Back to home page</a>`)
    }
})

server.listen(5000)