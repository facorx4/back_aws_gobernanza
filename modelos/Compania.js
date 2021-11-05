const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompaniaSchema = Schema({
    nombreCompania: String,
}, { collection: 'Compania' });

module.exports = mongoose.model('Compania', CompaniaSchema);