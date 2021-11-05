const { Router } = require('express');
const router = Router();



const SubdomioControlador = require('../controladores/subdominio.controlador');
const { verificaToker } = require('../helpers/autenticacion'); //importamos el middlewares que valida el token
const api = '/api/repositorio/subdominio/';
/***********************************************************
    Rutas crud roles 
***********************************************************/
router.get(`${api}all`, verificaToker, SubdomioControlador.getAll);
router.post(`${api}crear`, verificaToker, SubdomioControlador.create);
router.get(`${api}detalle/:id`, verificaToker, SubdomioControlador.getOne);
router.put(`${api}editar/:id`, verificaToker, SubdomioControlador.edit);
router.delete(`${api}eliminar/:id`, verificaToker, SubdomioControlador.eliminar);


module.exports = router;