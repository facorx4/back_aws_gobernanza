const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IndicadorDimensionSchema = Schema({
    nombre: String,
}, { collection: 'IndicadorDimension' });

module.exports = mongoose.model('IndicadorDimension', IndicadorDimensionSchema);