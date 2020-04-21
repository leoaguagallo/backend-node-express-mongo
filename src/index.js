require('dotenv').config(); //cargar variables de .env

/*
* Server import
*/
const app = require('./server')

/*
* Database import
*/
require('./database')

/*
* Settings
*/
const PORT = app.get('port'); //obtener puerto


app.listen(PORT, () => {
    console.log('Server run in http://localhost:'+PORT);
})