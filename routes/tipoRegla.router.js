const { Router } = require('express');
const router = Router();

const TiposdereglasControlador = require('../controladores/tiposdereglas.controlador');
const { verificaToker } = require('../helpers/autenticacion'); //importamos el middlewares que valida el token
const api = '/api/tipoderegla/';
/***********************************************************
    Rutas crud repositorios
***********************************************************/
router.get(`${api}all`, verificaToker, TiposdereglasControlador.getAll);
router.post(`${api}crear`, verificaToker, TiposdereglasControlador.create);
router.get(`${api}detalle/:id`, verificaToker, TiposdereglasControlador.getOne);
router.put(`${api}editar/:id`, verificaToker, TiposdereglasControlador.edit);
router.delete(`${api}eliminar/:id`, verificaToker, TiposdereglasControlador.eliminar);

module.exports = router;