
var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', __dirname);
app.engine('handlebars', exphbs({defaultLayout:'index'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
    res.render('layouts/index');
});

app.listen(5000||process.env.PORT);
