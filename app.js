var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride());

var routerIndex = require('./routes/index');

app.use('/',routerIndex);

app.listen(3000,function () {
    console.log('Servidor Corriendo en http://localhost:3000');
})