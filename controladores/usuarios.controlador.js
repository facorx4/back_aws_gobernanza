const Usuarios = require("../modelos/Usuario");
const bcrypt = require('bcrypt');
var fs = require('fs');
var path = require('path');
const { json } = require("body-parser");
const jwt = require('jsonwebtoken');

async function getAll(req, res) {
    const [listaUsuarios, total] = await Promise.all([
        Usuarios.find({}),
        Usuarios.count()
    ]);
    return res.status(200).json({
        status: "success",
        data: listaUsuarios,
        total: total
    });
}

async function create(req, res) {
    const body = req.body;
    body.userEstado = body.userEstado == 'activo' ? true : false; //actualiza el valo del estado
    let objDate = new Date();
    const fecha = `${objDate.getFullYear()}/${objDate.getMonth() + 1}/${objDate.getDate()}`; //yyyy/mm/dd
    const usuario = new Usuarios({
        userNombres: body.userNombres,
        userApellidos: body.userApellidos,
        userSys: body.userSys,
        userEmail: body.userEmail,
        userPassword: bcrypt.hashSync(body.userPassword, 10),
        userEstado: body.userEstado,
        userRolID: body.userRolID,
        userLastDate: 'null',
        userDateAdd: fecha,
        userContacto: '',
        userSobreMi: '',
        userAvatar: body.userAvatar,
        estilo: body.estilo,
        permisos: body.permisos

    });
    await usuario.save((err, usuarioStore) => {
        if (err || !usuarioStore) {
            return res.status(400).json({
                status: 'error',
                message: 'El usuario no se ha guardado !!!'
            });
        }
        // Devolver una respuesta 
        return res.status(200).json({
            status: 'success',
            data: usuarioStore
        });
    });
}

async function getOne(req, res) {
    const { id } = req.params; //obtenemos el id del usuario
    await Usuarios.findById(id, (err, usuarioStorage) => {
        if (err || !usuarioStorage) {
            return res.status(500).json({
                status: "Error",
                data: "Error al devolver los datos",
            });
        }
        return res.status(200).json({
            status: "success",
            data: usuarioStorage,
        });
    });
}

async function edit(req, res) {
    const { id } = req.params; //obtenemos el id del usuario
    var {
        userNombres,
        userApellidos,
        userSys,
        userEmail,
        userEstado,
        userRolID,
        userAvatar,
        estilo,
        permisos
    } = req.body;
    userEstado = userEstado == "activo" ? true : false
    await Usuarios.findOneAndUpdate({ _id: id }, {
        userNombres,
        userApellidos,
        userSys,
        userEmail,
        userEstado,
        userRolID,
        userAvatar,
        estilo,
        permisos
    }, { new: true }, (err, usuarUpdate) => {
        if (err || !usuarUpdate) {
            console.log(err)
            return res.status(400).json({
                status: "Error",
                data: "Error al actualizar usuario",
            });
        }
        return res.status(200).json({
            status: "success",
            data: usuarUpdate,
        });
    });
}

async function eliminar(req, res) {

    const { id } = req.params; //obtenemos el id del registro

    await Usuarios.findByIdAndDelete({ _id: id }, (err, usaerDelete) => {
        if (err || !usaerDelete) {
            return res.status(400).json({
                status: "Error",
                error: {
                    mensaje: "usuario no encontrado"
                }
            });
        }
        return res.status(200).json({
            status: "success",
            data: usaerDelete,
        });

    });
}

async function perfilUsuario(req, res) {
    const id = req.body.userId; //obtenemos el id del usuario
    const datosUsuario = {
        userNombres: req.body.userNombres,
        userApellidos: req.body.userApellidos,
        userEmail: req.body.userEmail,
        userContacto: req.body.userContacto,
        userSobreMi: req.body.userSobreMi,
        estilo: req.body.estilo,
        userAvatar: req.body.userAvatar
    }
    await Usuarios.findOneAndUpdate({ _id: id }, datosUsuario, { new: true }, (err, usuarUpdate) => {
        if (err || !usuarUpdate) {
            console.log(err)
            return res.status(400).json({
                status: "Error",
                data: "Error al actualizar usuario",
            });
        }
        let Authorization = jwt.sign({ usuario: usuarUpdate }, process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN })
        return res.status(200).json({
            status: "success",
            data: usuarUpdate,
            Authorization
        });
    });
}


async function passwordUsuario(req, res) {
    const id = req.body.userId; //obtenemos el id del usuario
    await Usuarios.findById(id, async (err, usuarioDB) => {
        if (err || !usuarioDB) {
            return res.status(400).json({
                status: "Error",
                error: {
                    mensaje: "Error, servidor no responde petición"
                }
            });
        }
        /* validamos la contraseña  */
        if (!bcrypt.compareSync(req.body.userActualPass, usuarioDB.userPassword)) {
            return res.status(400).json({
                status: "Error",
                error: {
                    mensaje: "Error, la contraseña actual no coincide con la registrada"
                }
            });
        }
        if (req.body.userPassword === req.body.userConfirPassword) {
            if (req.body.userPassword != req.body.userActualPass) {
                const newPass = bcrypt.hashSync(req.body.userPassword, 10);
                await Usuarios.findOneAndUpdate({ _id: id }, { userPassword: newPass }, (err, usuarUpdate) => {
                    if (err || !usuarUpdate) {
                        return res.status(400).json({
                            status: "Error",
                            usuario: "Error al actualizar usuario",
                        });
                    }
                    return res.status(200).json({
                        status: "success",
                        usuario: 'Se ha actualizo correctamente la contraseña',
                    });
                });
            } else {
                return res.status(400).json({
                    status: "Error",
                    usuario: "Error, Ingresa una contraseña diferente a la actual",
                });
            }
        } else {
            return res.status(400).json({
                status: "Error",
                usuario: "Error al actualizar usuario",
            });
        }
    })
}

async function upload(req, res) {
    // Recoger el fichero de la petición
    var file_name = 'Imagen no subida...';
    if (!req.files) {
        return res.status(404).send({
            status: 'error',
            message: file_name
        });
    }
    // Conseguir nombre y la extensión del archivo
    var file_path = req.files.file0.path;

    //var file_split = file_path.split('\\');
    // * ADVERTENCIA * EN LINUX O MAC
    var file_split = file_path.split('/');
    // Nombre del archivo
    var file_name = file_split[3];
    // Extensión del fichero
    var extension_split = file_name.split('\.');
    var file_ext = extension_split[1];
    // Comprobar la extension, solo imagenes, si es valida borrar el fichero
    if (file_ext != 'png' && file_ext != 'jpg' && file_ext != 'jpeg' && file_ext != 'gif') {
        // borrar el archivo subido
        fs.unlink(file_path, (err) => {
            console.log(err)
            return res.status(200).send({
                status: 'error',
                message: 'La extensión de la imagen no es válida !!!'
            });
        });
    } else {
        // Si todo es valido, sacando id de la url
        return res.status(200).send({
            status: 'success',
            image: file_name
        });
    }
}

async function getImage(req, res) {
    var file = req.params.image;
    var path_file = './tmp/files/avatars/' + file;
    fs.exists(path_file, (exists) => {
        if (exists) {
            return res.sendFile(path.resolve(path_file));
        } else {
            return res.status(404).send({
                status: 'error',
                message: 'La imagen no existe !!!'
            });
        }
    });
}

async function cargarArchivo(req, res) {
    // Recoger el fichero de la petición
    var file_name = 'Archivo no subido...';
    if (!req.files) {
        return res.status(404).send({
            status: 'error',
            message: file_name
        });
    }

    return res.status(200).send({
        status: 'success',

    });


}






async function createImport(req, res) {


    var cadena = [];

    const dir = './tmp/files/dataFile/Usuarios/';
    const files = fs.readdirSync(dir);


    for (const file of files) {


        const data = fs.readFileSync(`./tmp/files/dataFile/Usuarios/${file}`, 'UTF-8')



        cadena = data.split('\n')


    }

    var corre = true;


    for (i = 0; i < cadena.length; i++) {


        var recorre = cadena[i].split(/[ |,;]/)
        var userNombres = recorre[0];
        var userApellidos = recorre[1];
        var userSys = recorre[2];
        var userEmail = recorre[3]; 
        var userPassword = recorre[4]; 
        var userEstado = recorre[5]; 
        var userRolID = recorre[6];
        var userLastDate = recorre[7];
        var userDateAdd = recorre[8]; 
        var userContacto = recorre[9]; 
        var userSobreMi = recorre[10]; 
        var userAvatar = recorre[11]; 
        var estilo = recorre[12];

        const newObject = new Usuarios({

            userNombres: userNombres,
            userApellidos: userApellidos,
            userSys: userSys,
            userEmail: userEmail,
            userPassword: userPassword,
            userEstado: userEstado,
            userRolID: userRolID,
            userLastDate: userLastDate,
            userDateAdd: userDateAdd,
            userContacto: userContacto,
            userSobreMi: userSobreMi,
            userAvatar: userAvatar,
            estilo: estilo


        });



        await newObject.save((err, dataStore) => {
            if (err || !dataStore) {
                corre = false;
            }


        })


    }

    if (corre) {
        const directory = './tmp/files/dataFile/Usuarios/';

        fs.readdir(directory, (err, files) => {
            if (err) throw err;

            for (const file of files) {
                fs.unlink(path.join(directory, file), err => {
                    if (err) throw err;
                });
            }
        });

        return res.status(200).json({
            status: "success",
            data: "todo bien",
        });

    } else {
        return res.status(400).json({
            status: "success",
            data: "error al insertar los datos",
        });

    }

}


module.exports = {

    getAll,
    create,
    getOne,
    edit,
    eliminar,
    upload,
    getImage,
    perfilUsuario,
    passwordUsuario,
    cargarArchivo,
    createImport
}