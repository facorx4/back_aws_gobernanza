const { Router } = require('express');
const router = Router();

const IndicadorControlador = require('../controladores/indicadordim.controlador');
const { verificaToker } = require('../helpers/autenticacion');

const api = '/api/entidad/indicador/';

router.get(`${api}all`, verificaToker, IndicadorControlador.getAll);
router.post(`${api}crear`, verificaToker, IndicadorControlador.create);
router.get(`${api}detalle/:id`, verificaToker, IndicadorControlador.getOne);
router.put(`${api}editar/:id`, verificaToker, IndicadorControlador.edit);
router.delete(`${api}eliminar/:id`, verificaToker, IndicadorControlador.eliminar);

module.exports = router;