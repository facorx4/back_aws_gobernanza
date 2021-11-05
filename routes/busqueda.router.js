const { Router } = require('express');
const router = Router();

const BusquedasControlador = require('../controladores/busquedas.controlador');
const { verificaToker } = require('../helpers/autenticacion'); //importamos el middlewares que valida el token
const api = '/api/';


router.get(`${api}todo/:busqueda`, verificaToker, BusquedasControlador.getBusquedas);
router.get(`${api}coleccion/:tabla/:busqueda`, verificaToker, BusquedasControlador.getDocumentosColeccion);


module.exports = router;