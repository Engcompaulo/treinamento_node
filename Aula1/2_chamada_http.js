var http = require('http');
// Assim
/*http.createServer(function(req, resp){
    resp.end("<html><head></head><body><h1>Paulo</h1></body></html>")
}).listen(3000);
*/
// ou

// Assim
var server = http.createServer(function(req, resp){
    resp.end("<html><head></head><body><h1>Paulo</h1></body></html>")
});

server.listen(3000);