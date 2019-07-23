
var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');
var app = express();
var server = require('http').createServer(app);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
    res.render('index');
});

server.listen(process.env.PORT || 3000);