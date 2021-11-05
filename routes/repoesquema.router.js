const { Router } = require('express');
const router = Router();

const RepoEsquemaControlador = require('../controladores/repoesquema.controlador');
const { verificaToker } = require('../helpers/autenticacion');

const api = '/api/repoesquema/';

router.get(`${api}all`, verificaToker, RepoEsquemaControlador.getAll);
router.post(`${api}crear`, verificaToker, RepoEsquemaControlador.create);
router.get(`${api}detalle/:id`, verificaToker, RepoEsquemaControlador.getOne);
router.put(`${api}editar/:id`, verificaToker, RepoEsquemaControlador.edit);
router.delete(`${api}eliminar/:id`, verificaToker, RepoEsquemaControlador.eliminar);

module.exports = router;