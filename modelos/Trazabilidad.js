const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrazabilidadSchema = Schema({
    dominio: {
        type: Schema.Types.ObjectId,
        ref: 'DominioCompania'
    },
    subDominio: {
        type: Schema.Types.ObjectId,
        ref: 'SubDominioCompania'
    },
    conceptoNegocio: {
        type: Schema.Types.ObjectId,
        ref: 'ConceptoNegocio'
    },


    nombreEntidadDato:{
        type: Schema.Types.ObjectId,
        ref: 'Entidad'
    },
    tipoEntidadDato: {
        type: Schema.Types.ObjectId,
        ref: 'TipoEntidadDato'
    },
    nombreFuente: String,
    fuenteOficial: {
        type: Schema.Types.ObjectId,
        ref: 'FuenteOficial'
    },
    repoFuenteOficial: String,
    rutaOrigenRepositorio: String,
    tipoRepositorio: {
        type: Schema.Types.ObjectId,
        ref: 'TipoRepositorio'
    },
    tablaFuenteOficial: String,
    nombreCampoFuenteOficial: String,
    descripcionCampo: String,
    dataEntry: String,
    periodicidadAct: {
        type: Schema.Types.ObjectId,
        ref: 'Periodicidad'
    },
    profundidadDato: String,
    tipoDato: String,
    longitud: String,
    valoresValidos: String,
    esLlavePrimaria: String,
    responsableDefinición: String,
}, { collection: 'Trazabilidad' });

module.exports = mongoose.model('Trazabilidad', TrazabilidadSchema);