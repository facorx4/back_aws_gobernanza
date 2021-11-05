const { Router } = require('express');
const router = Router();



const SubmenuControlador = require('../controladores/submenus.controlador');
const { verificaToker } = require('../helpers/autenticacion'); //importamos el middlewares que valida el token
const api = '/api/submenu/';
/***********************************************************
    Rutas crud submenu
***********************************************************/
//router.post(`${api}nuevo`, SubmenusControlador.saveSub);
router.get(`${api}all`, verificaToker, SubmenuControlador.getAll);
router.post(`${api}crear`, verificaToker, SubmenuControlador.create);
router.get(`${api}detalle/:id`, verificaToker, SubmenuControlador.getOne);
router.put(`${api}editar/:id`, verificaToker, SubmenuControlador.edit);
router.delete(`${api}eliminar/:id`, verificaToker, SubmenuControlador.eliminar);


module.exports = router;