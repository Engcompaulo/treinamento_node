var express = require('express');
var app = express();

app.get('/', function(req, resp){
    resp.send("<html><head></head><body><h1>Home</h1></body></html>")
});

app.get('/medicos', function(req, resp){
    resp.send("<html><head></head><body><h1>Dr Luis</h1><br><h1>Dr Fernando</h1><br><h1>Dr Pedro</h1></body></html>")
});

app.listen(3000, function(){
    console.log("Servidor rodando com Express !");
});


