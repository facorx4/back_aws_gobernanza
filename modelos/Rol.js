const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const RolSchema = new Schema({
    nomRol: { type: String, required: true },
    modulos: Array,
    dateAddRol: { type: String, required: true }


}, { collection: 'Rol' });


/* exportamos el modulo  */
module.exports = mongoose.model('Rol', RolSchema);