const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    userNombres: { type: String, required: true },
    userApellidos: { type: String, required: true },
    userSys: { type: String, required: true },
    userEmail: { type: String, required: true },
    userPassword: { type: String, required: true },
    userEstado: { type: Boolean, required: true },
    userRolID: {
        type: Schema.Types.ObjectId,
        ref: 'Rol'
    },
    userLastDate: { type: String, required: true },
    userDateAdd: { type: String, required: true },
    userContacto: { type: String },
    userSobreMi: { type: String },
    userAvatar: String,
    estilo: {
        type: Schema.Types.ObjectId,
        ref: 'Estilo'
    },
    permisos: Array
}, { collection: 'Usuario' });

/***************************************************************************************** 
con esta linea generamos un error para los campos que
no se pueden repetir en la base de datos como el Email, userSys 
*****************************************************************************************/

//UsuarioSchema.plugin(uniqueValidator, {mensaje: '{PATH} debe de ser unico'});

/**************************************************************************************** 
en esta parte lo que hacemos es quitar el artributo de userPassword 
para el obteto que retornamos pero aun asi sigue guardado en 
la base de datos todo esot con fines de seguridad  

****************************************************************************************/
UsuarioSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.userPassword;
    return userObject;
}


/* exportamos el modulo  */
module.exports = mongoose.model('Usuario', UsuarioSchema);