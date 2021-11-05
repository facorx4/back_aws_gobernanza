const { Router } = require('express');
const router = Router();

const CompaniaAreaControlador = require('../controladores/companiarea.controlador');

const { verificaToker } = require('../helpers/autenticacion'); //importamos el middlewares que valida el token

const api = '/api/';
/***********************************************************
    Rutas para las compañias 
***********************************************************/
router.get(`${api}areas`, verificaToker, CompaniaAreaControlador.getAreasCompanias);
router.get(`${api}all`, verificaToker, CompaniaAreaControlador.getAll);
router.get(`${api}areas/:id`, verificaToker, CompaniaAreaControlador.getAreasCompanias);
router.get(`${api}detalle/:id`, verificaToker, CompaniaAreaControlador.getDetalleArea);
router.post(`${api}areas/:ind/:id`, verificaToker, CompaniaAreaControlador.create);
router.put(`${api}areas/:ind/:id`, verificaToker, CompaniaAreaControlador.edit);
router.delete(`${api}areas/:id`, verificaToker, CompaniaAreaControlador.eliminar);



module.exports = router;
