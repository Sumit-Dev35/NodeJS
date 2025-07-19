const { log } = require('console');
const http = require('http');
const {readFileSync}=require('fs');

const homePage=readFileSync(`./index.html`);
console.log(homePage)


const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html'
    })
    if (req.url === '/'){
      res.write(homePage)
    }
    else if (req.url === '/about')
        res.write(`<h1>About Page</h1>`)
    res.end()
})

server.listen(5000, (error) => {
    if (error) {
        log(`Got an error`, err)
    }
    else {
        log(`Server is listening on this ${5000}`)
    }
})