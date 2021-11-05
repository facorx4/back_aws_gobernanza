const { Router } = require('express');
const router = Router();



const ConceptonegocioControlador = require('../controladores/conceptonegocios.controlador');
const { verificaToker } = require('../helpers/autenticacion'); //importamos el middlewares que valida el token
const api = '/api/conceptonegocio/';
/***********************************************************
    Rutas crud roles 
***********************************************************/

router.post(`${api}crear`, ConceptonegocioControlador.create);
router.get(`${api}all`, verificaToker, ConceptonegocioControlador.getAll);
router.get(`${api}detalle/:id`, verificaToker, ConceptonegocioControlador.getOne);
router.put(`${api}editar/:id`, verificaToker, ConceptonegocioControlador.edit);
router.delete(`${api}eliminar/:id`, verificaToker, ConceptonegocioControlador.eliminar);




module.exports = router;