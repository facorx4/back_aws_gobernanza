const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ModuloSchema = Schema({
    titulo: { type: String, required:true },
    submenu: { type : Array, ref: 'Submenu' },
    icono: String,
    posicion: Number
}, { collection: 'Modulo' });

module.exports = mongoose.model('Modulos', ModuloSchema);