const { Router } = require('express');
const router = Router();

const SubmenuControlador = require('../controladores/submenus.controlador');
const { verificaToker } = require('../helpers/autenticacion'); //importamos el middlewares que valida el token
const api = '/api/submenu/';
const multipartSubm = require('connect-multiparty');  
const multipartMiddleware = multipartSubm({  
    uploadDir: './tmp/files/dataFile/Submenus/'
});

/***********************************************************
    Rutas crud submenu
***********************************************************/
//router.post(`${api}nuevo`, SubmenusControlador.saveSub);
router.get(`${api}all`, verificaToker, SubmenuControlador.getAll);
router.post(`${api}crear`, verificaToker, SubmenuControlador.create);
router.get(`${api}detalle/:id`, verificaToker, SubmenuControlador.getOne);
router.put(`${api}editar/:id`, verificaToker, SubmenuControlador.edit);
router.delete(`${api}eliminar/:id`, verificaToker, SubmenuControlador.eliminar);


/***********************************************************
    Rutas de import data y cargar
***********************************************************/

router.post(`${api}import-data`, multipartMiddleware, verificaToker, SubmenuControlador.cargarArchivo); 
router.post(`${api}creardata`, verificaToker, SubmenuControlador.createImport);


module.exports = router;