const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RepositorioTabla = Schema({
    identificador: String,
    nombre: String,
    repositorioEsquema: {
        type: Schema.Types.ObjectId,
        ref: 'RepositorioEsquema'
    },
}, { collection: 'RepositorioTabla' });

module.exports = mongoose.model('RepositorioTabla', RepositorioTabla);