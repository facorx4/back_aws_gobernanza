const { Router } = require('express');
const router = Router();

const CompaniaDominiosControlador = require('../controladores/companiadominio.controlador');

const { verificaToker } = require('../helpers/autenticacion'); //importamos el middlewares que valida el token

const api = '/api/';

router.get(`${api}dominios`, verificaToker, CompaniaDominiosControlador.getDominiosCompanias);
router.get(`${api}dominios/all`, verificaToker, CompaniaDominiosControlador.getAll);
router.get(`${api}dominios/:id`, verificaToker, CompaniaDominiosControlador.getDominiosCompanias);
router.get(`${api}detalledom/:id`, verificaToker, CompaniaDominiosControlador.getDetalleDominio);
router.post(`${api}dominios/:ind/:id`, verificaToker, CompaniaDominiosControlador.create);
router.put(`${api}dominios/:ind/:id`, verificaToker, CompaniaDominiosControlador.edit);
router.delete(`${api}dominios/:id`, verificaToker, CompaniaDominiosControlador.deleteDominio);

module.exports = router;