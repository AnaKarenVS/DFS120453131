//este servidor es 100% de node JS
const http = require('http');

http.createServer(function(req, res){
    res.writeHead(
        200, {
            'Content-Type':'text/html'
        }
    );
    res.end("Hola Mundoooo");
}).listen('3000');