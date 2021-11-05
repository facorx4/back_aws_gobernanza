const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OtroConsumidorSchema = Schema({
    nombre: String,
}, { collection: 'OtroConsumidor' });

module.exports = mongoose.model('OtroConsumidor', OtroConsumidorSchema);