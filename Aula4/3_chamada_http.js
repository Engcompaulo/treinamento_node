var http = require('http');

var server = http.createServer(function(req, resp){
    var  categoria = req.url;
    if(categoria == '/home'){
        resp.end("<html><head></head><body><h1>Home</h1></body></html>")
    }else if(categoria == '/pedro'){
        resp.end("<html><head></head><body><h1>Pedro</h1></body></html>")
    }else if(categoria == '/filipe'){
        resp.end("<html><head></head><body><h1>Filipe</h1></body></html>")
    }else{
            resp.end("<html><head></head><body><h1>Nenhum</h1></body></html>")
    }
    
});

server.listen(3000);