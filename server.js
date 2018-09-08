var http = require('http');
var express = require ('express');
var app = express();
var handlebars = require('express-handlebars')
.create({defaultLayout: 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 8080);
app.get(__dirname + '../', function(req, res){
    res.render('home');
});

app.use(function(req, res){
    // res.type('text/plain');
    res.status(404);
    res.send('404 - not found');
});
app.listen(app.get('port'), function(){
    console.log('Server started.....8080')
});

// function onRequest(request, response) {
//     console.log("A user made a request"  + request.url);
//     response.writeHead(200, {"Context-Type": "text/plain"});
//     response.write("main");
//     response.end();
// }

// http.createServer(onRequest).listen(8080);
// console.log("Server is now running.....");


