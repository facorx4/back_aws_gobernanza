const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RepositorioTablaCampoSchema = Schema({
    identificador: String,
    Nombre: String,
    Descripcion: String,
    Manual: String,
    Profundidad: String,
    Longitud: String,
    Decimales: String,
    LlavePrimaria: String,
    PermiteNulos: String,
    repositorioTabla: {
        type: Schema.Types.ObjectId,
        ref: 'RepositorioTabla'
    },
}, { collection: 'RepositorioTablaCampo' });

module.exports = mongoose.model('RepositorioTablaCampo', RepositorioTablaCampoSchema);