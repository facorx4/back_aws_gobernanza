const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReglacalidadSchema = Schema({
    nombreEntidadDato:{
        type: Schema.Types.ObjectId,
        ref: 'Entidad'
    },
    identificador: String,
    descripcion: String,
    umbralSuperior: String,
    umbralInferior: String,
    fechaCreacion: { type: String, required:true },
    validado: String,
    aplicativo: {
        type: Schema.Types.ObjectId,
        ref: 'Aplicativo'
    },
    periodicidad: {
        type: Schema.Types.ObjectId,
        ref: 'Periodicidad'
    },
    tipo: {
        type: Schema.Types.ObjectId,
        ref: 'TipoRegla'
    },
    principio: {
        type: Schema.Types.ObjectId,
        ref: 'Principio'
    },

    conceptoNegocio: {
        type: Schema.Types.ObjectId,
        ref: 'ConceptoNegocio'
    }

}, { collection: 'RaglaCalidad' }); //para personalizar el nombre de la colección
    


module.exports = mongoose.model('ReglaCalidad', ReglacalidadSchema);