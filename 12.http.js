const http = require('http');

//create server is looking for a call back function
// first parameter is the quest for example a webpage from the server
// second parameter of the call back is the response 
const server = http.createServer((req,res) => {
   if (req.url ==='/'){
        res.end('Welcome to our home page')
   }
   if (req.url ==='/about'){
    res.end('Here is our history')
   }

   res.end(`<h1> Ooops!</h1> <p> We cant seem to find the page you are looking for</p>
    <a href="/">Back Home</a>`)
})

//The port our server is listening on
server.listen(5000);