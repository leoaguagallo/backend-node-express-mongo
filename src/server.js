/*
* Servidor
*/
const express = require('express');

const bodyParser = require('body-parser')
const cors = require('cors')

//inicializacion del servidor
const app =  express();

/*
* Settings
*/
app.set('port', process.env.PORT || 5000); //asignar puerto

/*
* Middlewares
*/
app.use(bodyParser.json()) //conversion a json peticiones POST
/*
//--> Habilitar el cosumo de mi API
*/
app.use(cors())


/*
* Routers
*/
app.use(require('./routes/users.route'))

/*
* Exportar el servidor
*/
module.exports = app;