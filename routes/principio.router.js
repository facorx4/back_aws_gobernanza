const { Router } = require('express');
const router = Router();

const PrincipiosControlador = require('../controladores/principios.controlador');
const { verificaToker } = require('../helpers/autenticacion'); //importamos el middlewares que valida el token
const api = '/api/principio/';
/***********************************************************
    Rutas crud repositorios
***********************************************************/
router.get(`${api}all`, verificaToker, PrincipiosControlador.getAll);
router.post(`${api}crear`, verificaToker, PrincipiosControlador.create);
router.get(`${api}detalle/:id`, verificaToker, PrincipiosControlador.getOne);
router.put(`${api}editar/:id`, verificaToker, PrincipiosControlador.edit);
router.delete(`${api}eliminar/:id`, verificaToker, PrincipiosControlador.eliminar);

module.exports = router;