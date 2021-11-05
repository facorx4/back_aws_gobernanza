const { Router } = require('express');
const router = Router();

const TipoEntControlador = require('../controladores/tipoentidad.controlador');
const { verificaToker } = require('../helpers/autenticacion');

const api = '/api/entidad/tipoentdato/';

router.get(`${api}all`, verificaToker, TipoEntControlador.getAll);
router.post(`${api}crear`, verificaToker, TipoEntControlador.create);
router.get(`${api}detalle/:id`, verificaToker, TipoEntControlador.getOne);
router.put(`${api}editar/:id`, verificaToker, TipoEntControlador.edit);
router.delete(`${api}eliminar/:id`, verificaToker, TipoEntControlador.eliminar);

module.exports = router;