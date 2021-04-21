var http = require('http');
http.createServer(function(req,res)
{
    res.end("Welcome John ! !");
    
}).listen(8080)