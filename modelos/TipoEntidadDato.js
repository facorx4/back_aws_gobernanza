const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TipoEntSchema = Schema({
    nombre: String,
    descripcion: String
}, { collection: 'TipoEntidadDato' });

module.exports = mongoose.model('TipoEntidadDato', TipoEntSchema);