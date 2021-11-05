const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PrincipioSchema = Schema({

    nombre: String,
    descripcion: { type: String, required: true },
  
},{ collection: 'Principio' }); //para personalizar el nombre de la colección

module.exports = mongoose.model('Principio', PrincipioSchema);