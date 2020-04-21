/*
* Servidor
*/
const express = require('express');

const bodyParser = require('body-parser')

//inicializacion del servidor
const app =  express();

/*
* Settings
*/
app.set('port', process.env.PORT || 3000); //asignar puerto

/*
* Middlewares
*/
app.use(bodyParser.json()) //conversion a json peticiones POST

/*
* Routers
*/
app.use(require('./routes/users.route'))

/*
* Exportar el servidor
*/
module.exports = app;