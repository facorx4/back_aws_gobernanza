const { Router } = require('express');
const router = Router();

const EntidadControlador = require('../controladores/entidad.controlador');
const { verificaToker } = require('../helpers/autenticacion'); //importamos el middlewares que valida el token
const api = '/api/entidad/';
/***********************************************************
    Rutas de para los conceptos
***********************************************************/
router.get(`${api}all`, verificaToker, EntidadControlador.getAll);
router.get(`${api}busqueda/:id`, verificaToker, EntidadControlador.getBusqueda);
router.post(`${api}crear`, verificaToker, EntidadControlador.create);
router.get(`${api}detalle/:id`, verificaToker, EntidadControlador.getOne);
router.put(`${api}editar/:id`, verificaToker, EntidadControlador.edit);
router.delete(`${api}eliminar/:id`, verificaToker, EntidadControlador.eliminar);



module.exports = router;