const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RepositorioEsquemaSchema = Schema({
    identificador: String,
    nombre: String,
    repositorio: {
        type: Schema.Types.ObjectId,
        ref: 'Repositorio'
    },
}, { collection: 'RepositorioEsquema' });

module.exports = mongoose.model('RepositorioEsquema', RepositorioEsquemaSchema);