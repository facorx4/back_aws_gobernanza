const { Router } = require('express');
const router = Router();



const ReportesControlador = require('../controladores/reportes.controlador');
const { verificaToker } = require('../helpers/autenticacion'); //importamos el middlewares que valida el token
const api = '/api/reporte/';
/***********************************************************
    Rutas crud roles 
***********************************************************/

router.get(`${api}all`, verificaToker, ReportesControlador.getAll);
router.post(`${api}crear`, verificaToker, ReportesControlador.create);
router.get(`${api}detalle/:id`, verificaToker, ReportesControlador.getOne);
router.put(`${api}editar/:id`, verificaToker, ReportesControlador.edit);
router.delete(`${api}eliminar/:id`, verificaToker, ReportesControlador.eliminar);

router.get(`${api}dominio/:id`, verificaToker, ReportesControlador.getDominio);

module.exports = router;