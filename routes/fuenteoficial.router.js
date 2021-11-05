const { Router } = require('express');
const router = Router();

const FuenteOficialControlador = require('../controladores/fuenteoficial.controlador');
const { verificaToker } = require('../helpers/autenticacion');

const api = '/api/entidad/fuenteoficial/';

router.get(`${api}all`, verificaToker, FuenteOficialControlador.getAll);
router.post(`${api}crear`, verificaToker, FuenteOficialControlador.create);
router.get(`${api}detalle/:id`, verificaToker, FuenteOficialControlador.getOne);
router.put(`${api}editar/:id`, verificaToker, FuenteOficialControlador.edit);
router.delete(`${api}eliminar/:id`, verificaToker, FuenteOficialControlador.eliminar);



module.exports = router;