const { Router } = require('express');
const router = Router();

const PeriodicidadControlador = require('../controladores/periodicidad.controlador');
const { verificaToker } = require('../helpers/autenticacion');

const api = '/api/entidad/periodicidad/';

router.get(`${api}all`, verificaToker, PeriodicidadControlador.getAll);
router.post(`${api}crear`, verificaToker, PeriodicidadControlador.create);
router.get(`${api}detalle/:id`, verificaToker, PeriodicidadControlador.getOne);
router.put(`${api}editar/:id`, verificaToker, PeriodicidadControlador.edit);
router.delete(`${api}eliminar/:id`, verificaToker, PeriodicidadControlador.eliminar);

module.exports = router;