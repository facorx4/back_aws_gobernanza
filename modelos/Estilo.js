const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EstiloSchema = Schema({
    nombre: String,
    navbar: String,
    sidebar: String,
    header: String,
    botonCrear: String,
    botonGuardar: String,
    botonAcciones: String,
    botonAgregar: String,
    tituloDetalle: String,
    paginador: String,
    dasboard: String,
    logoCompania: String,
    
}, { collection: 'Estilo' }); //para personalizar el nombre de la colección

module.exports = mongoose.model('Estilo', EstiloSchema);