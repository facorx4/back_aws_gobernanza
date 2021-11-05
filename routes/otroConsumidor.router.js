const { Router } = require('express');
const router = Router();

const OtrosConsumidoresControlador = require('../controladores/otrosconsumidores.controlador');
const { verificaToker } = require('../helpers/autenticacion');

const api = '/api/entidad/otroconsumidor/';

router.get(`${api}all`, verificaToker, OtrosConsumidoresControlador.getAll);
router.post(`${api}crear`, verificaToker, OtrosConsumidoresControlador.create);
router.get(`${api}detalle/:id`, verificaToker, OtrosConsumidoresControlador.getOne);
router.put(`${api}editar/:id`, verificaToker, OtrosConsumidoresControlador.edit);
router.delete(`${api}eliminar/:id`, verificaToker, OtrosConsumidoresControlador.eliminar);

module.exports = router;