const { Router } = require('express');
const router = Router();

const AplicativosControlador = require('../controladores/aplicativos.controlador');
const { verificaToker } = require('../helpers/autenticacion');

const api = '/api/entidad/aplicativo/';

router.get(`${api}all`, verificaToker, AplicativosControlador.getAll);
router.post(`${api}crear`, verificaToker, AplicativosControlador.create);
router.get(`${api}detalle/:id`, verificaToker, AplicativosControlador.getOne);
router.put(`${api}editar/:id`, verificaToker, AplicativosControlador.edit);
router.delete(`${api}eliminar/:id`, verificaToker, AplicativosControlador.eliminar);

module.exports = router;