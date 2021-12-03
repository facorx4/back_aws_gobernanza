const { Router } = require('express');
const router = Router();

const ModuloControlador = require('../controladores/modulos.controlador');
const { verificaToker } = require('../helpers/autenticacion'); //importamos el middlewares que valida el token
const api = '/api/modulo/';
const multipartMod = require('connect-multiparty');  
const multipartMiddleware = multipartMod({  
    uploadDir: './tmp/files/dataFile/Modulos/'
});

/***********************************************************
    Rutas crud modulos 
***********************************************************/
router.get(`${api}all`, verificaToker, ModuloControlador.getAll);
router.post(`${api}crear`, verificaToker, ModuloControlador.create);
router.get(`${api}menu/:id`, verificaToker, ModuloControlador.getMenu);
router.get(`${api}detalle/:id`, verificaToker, ModuloControlador.getOne);
router.put(`${api}editar/:id`, verificaToker, ModuloControlador.edit);
router.delete(`${api}eliminar/:id`, verificaToker, ModuloControlador.eliminar);


/***********************************************************
    Rutas de import data y cargar
***********************************************************/

router.post(`${api}import-data`, multipartMiddleware, verificaToker, ModuloControlador.cargarArchivo); 
router.post(`${api}creardata`, verificaToker, ModuloControlador.createImport);
module.exports = router;
