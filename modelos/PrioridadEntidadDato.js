const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PrioridadEntidadDatoSchema = Schema({
    nombre: String,
    descripcion: String
}, { collection: 'PrioridadEntidadDato' });

module.exports = mongoose.model('PrioridadEntidadDato', PrioridadEntidadDatoSchema);