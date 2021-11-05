const mongoose = require('mongoose');
const { schema } = require('./Concepto');
const Schema = mongoose.Schema;

const ConceptonNegocioSchema = Schema({
    nombre: String,
    definicion: String,
    calculo: String,
    fechaCreacion: String,
    concepto: {
        type: Schema.Types.ObjectId,
        ref: 'Concepto'
    }
}, { collection: 'ConceptoNegocio' }); //para personalizar el nombre de la colección



module.exports = mongoose.model('ConceptoNegocio', ConceptonNegocioSchema);