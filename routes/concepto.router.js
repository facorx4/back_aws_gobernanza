const { Router } = require('express');
const router = Router();

const ConceptosControlador = require('../controladores/conceptos.controlador');
const { verificaToker } = require('../helpers/autenticacion'); //importamos el middlewares que valida el token
const api = '/api/concepto/';
/***********************************************************
    Rutas de para los conceptos
***********************************************************/
router.get(`${api}all`, verificaToker, ConceptosControlador.getAll);
router.post(`${api}crear`, verificaToker, ConceptosControlador.create);
router.get(`${api}detalle/:id`, verificaToker, ConceptosControlador.getOne);
router.put(`${api}editar/:id`, verificaToker, ConceptosControlador.edit);
router.delete(`${api}eliminar/:id`, verificaToker, ConceptosControlador.eliminar);



module.exports = router;