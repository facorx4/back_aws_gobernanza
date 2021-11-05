const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TicketSchema = new Schema({
    userNombres: String,
    userApellidos: String,
    userAvatar: String,
    userLastDate: String,
    userContacto: String,
    otroContacto: String,
    estado: String,
    descripcion: String,
    userHora: String,
    titulo: String,

}, { collection: 'Ticket' }); //para personalizar el nombre de la colección

module.exports = mongoose.model('Ticket', TicketSchema);