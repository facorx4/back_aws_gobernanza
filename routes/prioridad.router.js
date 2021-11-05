const { Router } = require('express');
const router = Router();

const PrioridadControlador = require('../controladores/prioridad.controlador');
const { verificaToker } = require('../helpers/autenticacion');

const api = '/api/entidad/prioridad/';

router.get(`${api}all`, verificaToker, PrioridadControlador.getAll);
router.post(`${api}crear`, verificaToker, PrioridadControlador.create);
router.get(`${api}detalle/:id`, verificaToker, PrioridadControlador.getOne);
router.put(`${api}editar/:id`, verificaToker, PrioridadControlador.edit);
router.delete(`${api}eliminar/:id`, verificaToker, PrioridadControlador.eliminar);

module.exports = router;