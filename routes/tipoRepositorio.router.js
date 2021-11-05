const { Router } = require('express');
const router = Router();



const tipoRepositorioControlador = require('../controladores/tipoRepositorio.controlador');
const { verificaToker } = require('../helpers/autenticacion'); //importamos el middlewares que valida el token
const api = '/api/repositorio/tiporepositorio/';
/***********************************************************
    Rutas crud roles 
***********************************************************/
router.get(`${api}all`, verificaToker, tipoRepositorioControlador.getAll);
router.post(`${api}crear`, verificaToker, tipoRepositorioControlador.create);
router.get(`${api}detalle/:id`, verificaToker, tipoRepositorioControlador.getOne);
router.put(`${api}editar/:id`, verificaToker, tipoRepositorioControlador.edit);
router.delete(`${api}eliminar/:id`, verificaToker, tipoRepositorioControlador.eliminar);


module.exports = router;