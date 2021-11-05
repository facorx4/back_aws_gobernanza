const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EntidadSchema = Schema({
    dominio: String,
    subdominio: String,
    conceptoNegocio: {
        type: Schema.Types.ObjectId,
        ref: 'Conceptonegocios'
    },

    dominio: {
        type: Schema.Types.ObjectId,
        ref: 'DominiosCompania'
    },
    subdominio: {
        type: Schema.Types.ObjectId,
        ref: 'SubDominiosCompania'
    },
    conceptoNegocio: {
        type: Schema.Types.ObjectId,
        ref: 'ConceptoNegocio'
    },
    nombre: String,
    dataOwner: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    definicionNegocio: String,
    tipoEntidad: {
        type: Schema.Types.ObjectId,
        ref: 'TipoEntidadDato'
    },
    logicaCalculo: String,
    ejemploValores: String,
    prioridad: {
        type: Schema.Types.ObjectId,
        ref: 'Prioridad'
    },
    reportes: Array,
    indicadorDimencion: {
        type: Schema.Types.ObjectId,
        ref: 'IndicadorDimension'
    },
    periodicidadGeneracion: {
        type: Schema.Types.ObjectId,
        ref: 'Periodicidad'
    },
    aplicativos: Array,
    capoFuenteOficial: String,
    fuenteOficial: {
        type: Schema.Types.ObjectId,
        ref: 'FuenteOficial'
    },
    pantalla: String,
    campoFuente: String,
    otrosConsumidores: Array,
    validado: String
}, { collection: 'Entidad' });

module.exports = mongoose.model('entidad', EntidadSchema);