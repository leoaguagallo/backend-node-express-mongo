const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

/*
* Modelo / Collection
*/
const User_Schema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
}, {
    timestamps: true //auditoria
})

/*
* Funcion asincrona para encritar contraseñas
*/
User_Schema.methods.encrypt_Password = async (password) => {
    const cont = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, cont) //devuelve contrasenia cifrada
}

/*
* Funcion para comparar contraseña de ingreso con la de la base de datos
*/
User_Schema.methods.match_Password = async (password) => {
    return await bcrypt.compare(password, this.password)
}

/*
* Exportar Modelos
*/
module.exports = model('User', User_Schema)