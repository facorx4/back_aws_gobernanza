const { Router } = require('express');
const router = Router();

const RepoTablaControlador = require('../controladores/repotabla.controlador');
const { verificaToker } = require('../helpers/autenticacion');

const api = '/api/repotabla/';

router.get(`${api}all`, verificaToker, RepoTablaControlador.getAll);
router.post(`${api}crear`, verificaToker, RepoTablaControlador.create);
router.get(`${api}detalle/:id`, verificaToker, RepoTablaControlador.getOne);
router.put(`${api}editar/:id`, verificaToker, RepoTablaControlador.edit);
router.delete(`${api}eliminar/:id`, verificaToker, RepoTablaControlador.eliminar);

module.exports = router;