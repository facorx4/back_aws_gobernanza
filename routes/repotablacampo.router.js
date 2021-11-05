const { Router } = require('express');
const router = Router();

const RepoTablaCampoControlador = require('../controladores/repotablacampo.controlador');
const { verificaToker } = require('../helpers/autenticacion');

const api = '/api/repotablacampo/';

router.get(`${api}all`, verificaToker, RepoTablaCampoControlador.getAll);
router.post(`${api}crear`, verificaToker, RepoTablaCampoControlador.create);
router.get(`${api}detalle/:id`, verificaToker, RepoTablaCampoControlador.getOne);
router.put(`${api}editar/:id`, verificaToker, RepoTablaCampoControlador.edit);
router.delete(`${api}eliminar/:id`, verificaToker, RepoTablaCampoControlador.eliminar);

module.exports = router;