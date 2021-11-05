const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AplicativoSchema = Schema({
    nombre: String,
}, { collection: 'Aplicativo' });

module.exports = mongoose.model('Aplicativo', AplicativoSchema);