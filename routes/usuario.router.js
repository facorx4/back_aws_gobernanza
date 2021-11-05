const { Router } = require('express');
const router = Router();

const UsuarioControlador = require('../controladores/usuarios.controlador');
const LoginControlador = require('../controladores/login.controlador');
const multipart = require('connect-multiparty');
const md_upload = multipart({ uploadDir: './tmp/files/avatars' });
const { verificaToker } = require('../helpers/autenticacion'); //importamos el middlewares que valida el token

const api = '/api/usuario/';
/***********************************************************
    Rutas crud del usuario 
***********************************************************/
router.get(`${api}all`, verificaToker, UsuarioControlador.getAll);
router.post(`${api}crear`, verificaToker, UsuarioControlador.create);
router.get(`${api}detalle/:id`, verificaToker, UsuarioControlador.getOne);
router.put(`${api}editar/:id`, verificaToker, UsuarioControlador.edit);
router.delete(`${api}eliminar/:id`, verificaToker, UsuarioControlador.eliminar);
/***********************************************************
    Rutas delperfil del usuario
***********************************************************/
router.put(`${api}perfil`, verificaToker, UsuarioControlador.perfilUsuario);
router.put(`${api}password`, verificaToker, UsuarioControlador.passwordUsuario);
/***********************************************************
    Rutas de las imagenes
***********************************************************/
router.post(`${api}upload-image`, md_upload, verificaToker, UsuarioControlador.upload);
router.get(`${api}get-image/:image`, UsuarioControlador.getImage);
/***********************************************************
    Rutas para el inicio de sesion del usuario
***********************************************************/
router.post(`${api}login`, LoginControlador.iniciarSesion);

module.exports = router;