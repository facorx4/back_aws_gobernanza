const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DominioCompaniaSchema = Schema({
    nombreDom: String,
    detalle: String,
    compania: {
        type: Schema.Types.ObjectId,
        ref: 'Compania'
    }
}, { collection: 'DominioCompania' }); //para personalizar el nombre de la colección

module.exports = mongoose.model('DominioCompania', DominioCompaniaSchema);