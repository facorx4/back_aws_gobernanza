const { Router } = require('express');
const router = Router();

const RepositoriosControlador = require('../controladores/repositorios.controlador');
const { verificaToker } = require('../helpers/autenticacion'); //importamos el middlewares que valida el token
const api = '/api/repositorio/';
/***********************************************************
    Rutas crud repositorios
***********************************************************/
router.get(`${api}all`, verificaToker, RepositoriosControlador.getAll);
router.post(`${api}crear`, verificaToker, RepositoriosControlador.create);
router.get(`${api}detalle/:id`, verificaToker, RepositoriosControlador.getOne);
router.put(`${api}editar/:id`, verificaToker, RepositoriosControlador.edit);
router.delete(`${api}eliminar/:id`, verificaToker, RepositoriosControlador.eliminar);

module.exports = router;