const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubDominioRepositorioSchema = Schema({
    nombre: { type: String, required:true },
}, { collection: 'SubDominioRepositorio' });

module.exports = mongoose.model('SubDominioRepositorio', SubDominioRepositorioSchema);