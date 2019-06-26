var express = require("express");
var app = express();

app.set("view engine", "ejs")

app.get("/", function(req, resp){
    resp.send("<html><head></head><body><h1>Home</h1></body></html>")
});

app.get("/medicos", function(req, resp){
    resp.render("secao/medicos")
});

app.listen(3000, function(){
    console.log("Servidor rodando com Express !");
});


