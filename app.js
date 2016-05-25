var express = require('express');
var app = express();

var routerIndex = require('./routes/index');

app.use('/',routerIndex);

app.listen(3000,function () {
    console.log('Servidor Corriendo en http://localhost:3000');
})