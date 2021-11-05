const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RepositorioSchema = Schema({
    nombre: { type: String, required: true  },
    descripcion: { type: String, required: true },
    ruta: { type: String, required: true },
    repositorioTipoId: {
        type: Schema.Types.ObjectId,
        ref: 'TipoRepositorio'
    },
    subdominioId: {
        type: Schema.Types.ObjectId,
        ref: 'SubDominioCompania'
    },
}, { collection: 'Repositorio' });

module.exports = mongoose.model('Repositorio', RepositorioSchema);