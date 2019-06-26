var express = require("express");
var app = express();

app.set("view engine", "ejs")

app.get("/", function(req, resp){
    resp.render("home/index")
});

app.get("/formulario", function(req, resp){
    resp.render("admin/form_add_noticia")
});

app.get("/noticias", function(req, resp){
    resp.render("noticias/noticias")
});

app.listen(3000, function(){
    console.log("Servidor rodando com Express !");
});


