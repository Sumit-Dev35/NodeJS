const http = require("http");

const server=http.createServer((req,res)=>{
   res.write('Hello World !');
   res.end()
}).listen(5000,()=>{
  console.log(`Server is started at 5000`);
})

console.log(server);

