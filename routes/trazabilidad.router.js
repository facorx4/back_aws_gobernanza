const { Router } = require('express');
const router = Router();

const TrazabilidadControlador = require('../controladores/trazabilidad.controlador');
const { verificaToker } = require('../helpers/autenticacion'); //importamos el middlewares que valida el token
const api = '/api/trazabilidad/';


router.get(`${api}all`, verificaToker, TrazabilidadControlador.getAll);
router.post(`${api}crear`, verificaToker, TrazabilidadControlador.create);
router.get(`${api}detalle/:id`, verificaToker, TrazabilidadControlador.getOne);
router.put(`${api}editar/:id`, verificaToker, TrazabilidadControlador.edit);
router.delete(`${api}eliminar/:id`, verificaToker, TrazabilidadControlador.eliminar);
router.get(`${api}busqueda/:id`, verificaToker, TrazabilidadControlador.getBusqueda);

module.exports = router;