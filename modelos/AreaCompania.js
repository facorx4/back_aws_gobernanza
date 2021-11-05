const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AreaCompaniaSchema = Schema({
    nombre: String,
    compania: {
        type: Schema.Types.ObjectId,
        ref: 'Compania'
    }
}, { collection: 'AreaCompania' }); //para personalizar el nombre de la colección

module.exports = mongoose.model('AreaCompania', AreaCompaniaSchema);