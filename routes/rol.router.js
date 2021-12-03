const { Router } = require('express');
const router = Router();
//const fileUpload = require('express-fileupload');
const RolesControlador = require('../controladores/roles.controlador');
const { verificaToker } = require('../helpers/autenticacion'); //importamos el middlewares que valida el token
const api = '/api/rol/';
const multipartRol = require('connect-multiparty');  
const multipartMiddleware = multipartRol({  
    uploadDir: './tmp/files/dataFile/Roles/'
});





/***********************************************************
    Rutas crud roles 
***********************************************************/
router.get(`${api}all`, verificaToker, RolesControlador.getAll);
router.post(`${api}crear`, verificaToker, RolesControlador.create);
router.get(`${api}detalle/:id`, verificaToker, RolesControlador.getOne);
router.put(`${api}editar/:id`, verificaToker, RolesControlador.edit);
router.delete(`${api}eliminar/:id`, verificaToker, RolesControlador.eliminar);


/***********************************************************
    Rutas de import data y cargar
***********************************************************/

router.post(`${api}import-data`, multipartMiddleware, verificaToker, RolesControlador.cargarArchivo); 
router.post(`${api}creardata`, verificaToker, RolesControlador.createImport);


module.exports = router;