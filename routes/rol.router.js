const { Router } = require('express');
const router = Router();



const RolesControlador = require('../controladores/roles.controlador');
const { verificaToker } = require('../helpers/autenticacion'); //importamos el middlewares que valida el token
const api = '/api/rol/';
/***********************************************************
    Rutas crud roles 
***********************************************************/
router.get(`${api}all`, verificaToker, RolesControlador.getAll);
router.post(`${api}crear`, verificaToker, RolesControlador.create);
router.get(`${api}detalle/:id`, verificaToker, RolesControlador.getOne);
router.put(`${api}editar/:id`, verificaToker, RolesControlador.edit);
router.delete(`${api}eliminar/:id`, verificaToker, RolesControlador.eliminar);


module.exports = router;