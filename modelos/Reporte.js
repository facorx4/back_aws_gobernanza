const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReporteSchema = Schema({
   
    identificador: String,
    nombre: String,
    propietario: String,
    descripcion: String,
    regulatorio: String,
    periodicidad: {
        type: Schema.Types.ObjectId,
        ref: 'Periodicidad'
    },
    dimenciones: String,
    indicadores: String,
    cuadro: String,
    nombreCuadro: String,
    areas: Array,
    validado: String,
    fechaCreacion: { type: String, required:true },
    DominiosCompania: {
        type: Schema.Types.ObjectId,
        ref: 'DominioCompania'
    }
}, { collection: 'Reporte' }); //para personalizar el nombre de la colección

module.exports = mongoose.model('Reporte', ReporteSchema);