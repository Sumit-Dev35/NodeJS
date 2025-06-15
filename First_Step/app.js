const http=require('http');
const port=8081;

function serverFunction(request,response){
  response.writeHead(200,'Success',{'Content-Type': 'text/plain'});
  response.end('Hello World');
}

function errorOnListen(error){
  if(error){
    throw error;
  }
  else{
    console.log(`Server is successfully running on ${port}`);
  }
}

const server=http.createServer(serverFunction);

server.listen(port,errorOnListen);