const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TipoReglaSchema = Schema({

    nombre: String,
 
  
},{ collection: 'TipoRegla' }); //para personalizar el nombre de la colección

module.exports = mongoose.model('TipoRegla', TipoReglaSchema);