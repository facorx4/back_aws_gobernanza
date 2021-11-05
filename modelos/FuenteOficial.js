const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FuenteOficialSchema = Schema({
    nombre: String,
}, { collection: 'FuenteOficial' });

module.exports = mongoose.model('FuenteOficial', FuenteOficialSchema);