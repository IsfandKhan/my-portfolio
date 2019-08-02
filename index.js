var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');

var app = express();

var IndexRouter = require('./routes/index');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use('/', IndexRouter);

app.listen(process.env.PORT || 3000);