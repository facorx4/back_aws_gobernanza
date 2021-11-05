const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConceptoSchema = Schema({

    nombre: String,
  
}, { collection: 'Concepto' });

module.exports = mongoose.model('Concepto', ConceptoSchema);