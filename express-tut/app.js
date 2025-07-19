const { log } = require('console');
const http=require('http');

const server=http.createServer((req,res)=>{
    log('user hit the server');
    res.end('Hello World')
})

server.listen(5000,(error)=>{
    if(error){
        log(`Got an error`,err)
    }
    else{
        log(`Server is listening on this ${5000}`)
    }
})