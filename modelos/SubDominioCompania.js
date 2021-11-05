const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubDominioCompaniaSchema = Schema({
    nombre: String,
    propietario: String,
    compania: {
        type: Schema.Types.ObjectId,
        ref: 'Compania'
    },
    dominio: {
        type: Schema.Types.ObjectId,
        ref: 'DominioCompania'
    }
}, { collection: 'SubDominioCompania' });

module.exports = mongoose.model('SubDominioCompania', SubDominioCompaniaSchema);