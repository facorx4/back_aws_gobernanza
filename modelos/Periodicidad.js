const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PeriodicidadSchema = Schema({
    nombre: String,
}, { collection: 'Periodicidad' });

module.exports = mongoose.model('Periodicidad', PeriodicidadSchema);