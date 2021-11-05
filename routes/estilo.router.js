const { Router } = require('express');
const router = Router();

const EstiloControlador = require('../controladores/estilos.controlador');
const { verificaToker } = require('../helpers/autenticacion'); //importamos el middlewares que valida el token
const api = '/api/estilo/';
/***********************************************************
    Rutas de para los conceptos
***********************************************************/
router.get(`${api}all`, verificaToker, EstiloControlador.getAll);

router.post(`${api}crear`, verificaToker, EstiloControlador.create);
router.get(`${api}detalle/:id`, verificaToker, EstiloControlador.getOne);
router.put(`${api}editar/:id`, verificaToker, EstiloControlador.edit);
router.delete(`${api}eliminar/:id`, verificaToker, EstiloControlador.eliminar);


module.exports = router;