const { Router } = require('express');
const router = Router();

const CompaniasControlador = require('../controladores/companias.controlador');

const { verificaToker } = require('../helpers/autenticacion'); //importamos el middlewares que valida el token

const api = '/api/compania/';
/***********************************************************
    Rutas para las compañias 
***********************************************************/
router.get(`${api}all`, verificaToker, CompaniasControlador.getAll);
router.post(`${api}crear`, verificaToker, CompaniasControlador.create);
router.get(`${api}detalle/:id`, verificaToker, CompaniasControlador.getOne);
router.put(`${api}editar/:id`, verificaToker, CompaniasControlador.edit);
router.delete(`${api}eliminar/:id`, verificaToker, CompaniasControlador.eliminar);

module.exports = router;