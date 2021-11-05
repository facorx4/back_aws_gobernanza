const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubmenuSchema = Schema({
    titulo: { type: String, required:true },
    ruta: String,
    modulos: Array,
    posicion: Number
}, { collection: 'Submenu' });

module.exports = mongoose.model('Submenu', SubmenuSchema);