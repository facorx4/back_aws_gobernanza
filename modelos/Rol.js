const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const RolSchema = new Schema({
    nomRol: { type: String,  },
    modulos: Array,
    dateAddRol: { type: String, },
    


}, { collection: 'Rol' });


/* exportamos el modulo  */
module.exports = mongoose.model('Rol', RolSchema);