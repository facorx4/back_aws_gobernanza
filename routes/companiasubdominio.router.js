const { Router } = require('express');
const router = Router();

const CompaniaSubDominiosControlador = require('../controladores/companiasubdominio.controlador');

const { verificaToker } = require('../helpers/autenticacion'); //importamos el middlewares que valida el token

const api = '/api/';

router.get(`${api}subdominios`, verificaToker, CompaniaSubDominiosControlador.getSubDominiosCompanias);
router.get(`${api}subdominios/:idDominio`, verificaToker, CompaniaSubDominiosControlador.getSubDominios);
router.get(`${api}subdominios/:id/:idDominio`, verificaToker, CompaniaSubDominiosControlador.getSubDominiosCompanias);
router.get(`${api}subdominiodetalle/:id`, verificaToker, CompaniaSubDominiosControlador.getDetalleSubDominio);
router.post(`${api}subdominios/:ind/:id/:idDominio`, verificaToker, CompaniaSubDominiosControlador.create);
router.put(`${api}subdominios/:ind/:id`, verificaToker, CompaniaSubDominiosControlador.edit);
router.delete(`${api}subdominios/:id`, verificaToker, CompaniaSubDominiosControlador.deleteSubDominio);

module.exports = router;