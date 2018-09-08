var http = require('http');
var express = require ('express');
var app = express();
var path = require ('path');
var handlebars = require('express-handlebars')
.create({defaultLayout: 'main'});
app.engine('.handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 8080);
app.set('views', path.join(__dirname, 'views/layouts')

)
app.get(__dirname + '../layouts', function(req, res){
    res.render('main');
});
app.use(express.static(path.join(__dirname + '.../view')));
app.use(function(req, res){
    res.type('text/plain');
   ;
    res.render('home');
});