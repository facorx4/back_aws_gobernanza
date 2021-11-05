const { Router } = require('express');
const router = Router();



const TicketControlador = require('../controladores/tickets.controlador');
const { verificaToker } = require('../helpers/autenticacion'); //importamos el middlewares que valida el token
const api = '/api/ticket/';
/***********************************************************
    Rutas crud roles 
***********************************************************/
router.get(`${api}all`, verificaToker, TicketControlador.getAll);
router.post(`${api}crear`, verificaToker, TicketControlador.create);
router.get(`${api}detalle/:id`, verificaToker, TicketControlador.getOne);
router.put(`${api}editar/:id`, verificaToker, TicketControlador.edit);
router.delete(`${api}eliminar/:id`, verificaToker, TicketControlador.eliminar);



module.exports = router;