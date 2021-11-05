const { Router } = require('express');
const router = Router();



const ReglascalidadControlador = require('../controladores/reglascalidad.controlador');
const { verificaToker } = require('../helpers/autenticacion'); //importamos el middlewares que valida el token
const api = '/api/reglacalidad/';
/***********************************************************
    Rutas crud roles 
***********************************************************/

router.get(`${api}all`, verificaToker, ReglascalidadControlador.getAll);
router.post(`${api}crear`, verificaToker, ReglascalidadControlador.create);
router.get(`${api}detalle/:id`, verificaToker, ReglascalidadControlador.getOne);
router.put(`${api}editar/:id`, verificaToker, ReglascalidadControlador.edit);
router.delete(`${api}eliminar/:id`, verificaToker, ReglascalidadControlador.eliminar);
router.get(`${api}busqueda/:id`, verificaToker, ReglascalidadControlador.getBusqueda);


module.exports = router;