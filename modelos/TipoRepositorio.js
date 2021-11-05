const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TipoRepositorioSchema = Schema({
    nombre: { type: String, required:true },
}, { collection: 'TipoRepositorio' });

module.exports = mongoose.model('TipoRepositorio', TipoRepositorioSchema);